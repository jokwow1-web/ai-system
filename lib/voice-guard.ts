/**
 * Voice Guard — brand voice enforcement for Atrahdis LP content.
 * Scans for banned words, validates YOU/YOUR ratio, and checks qualification terms.
 */

// Banned words and patterns — MUST NOT appear in any copy
export const BANNED_WORDS: Array<{ pattern: RegExp; reason: string }> = [
  { pattern: /\bterpercaya\b/gi, reason: "Use specific credential instead (e.g. 'sejak 2016', '0 klaim garansi')" },
  { pattern: /\bterdepan\b/gi, reason: "Use Joker Principle proof instead (e.g. client logos, testimonial)" },
  { pattern: /\bterbaik\b/gi, reason: "Use specific metric or credential instead" },
  { pattern: /\bpasti\s+lolos\b/gi, reason: "Use 'garansi uang kembali 100% tertulis di kontrak' instead" },
  { pattern: /\bjaminan\s+berhasil\b/gi, reason: "Use 'garansi uang kembali 100% tertulis di kontrak' instead" },
  { pattern: /\bakses\s+eksklusif\s+LPJK\b/gi, reason: "Cannot claim exclusive LPJK access" },
  { pattern: /\b98\s*%\s*success\s*rate\b/gi, reason: "Cannot claim conversion rate without audited backup" },
  { pattern: /\bK1\b|\bK2\b|\bK3\b|\bM1\b|\bM2\b|\bB1\b|\bB2\b/g, reason: "Use K, M, B only — not K1/K2 etc." },
  { pattern: /\btim\s+kami\b/gi, reason: "Use 'Nicx' or 'Ara' — not 'tim kami'" },
  { pattern: /\btim\s+lawyer\s+profesional\b/gi, reason: "Use 'Nicx langsung yang audit sejak 2016' instead" },
  { pattern: /\b7\s+hari\s+kerja\b/gi, reason: "Use honest timelines: K=3 hari, M=10-20, B=30-60" },
  { pattern: /\b20\s+slot\s+tersisa\b/gi, reason: "No fake scarcity. Use 'Nicx batasi case per bulan' instead" },
  { pattern: /\bslot\s+tersisa\b/gi, reason: "No fake scarcity" },
  { pattern: /\bcallback\s+terbatas\b/gi, reason: "No fake scarcity" },
  // Twitter / personal brand additions
  { pattern: /\bbreaking\s+news\b/gi, reason: "No sensationalism — regulatory changes are facts, not drama" },
  { pattern: /\brevolusi\s+regulasi\b/gi, reason: "No sensationalism" },
  { pattern: /\bkisah\s+inspiratif\b/gi, reason: "Use pain case format instead" },
  { pattern: /\btestimoni\s+luar\s+biasa\b/gi, reason: "No hype testimonials" },
  { pattern: /\bsukses\s+gemilang\b/gi, reason: "No hype language" },
  { pattern: /\brahasia\s+sukses\b/gi, reason: "Use specific steps instead" },
  { pattern: /\btips\s+ampuh\b/gi, reason: "Use specific steps instead" },
  { pattern: /\bstrategi\s+jitu\b/gi, reason: "Use specific steps instead" },
  { pattern: /\bleverage\b/gi, reason: "No corporate jargon" },
  { pattern: /\bsynergy\b/gi, reason: "No corporate jargon" },
  { pattern: /\boptimize\b/gi, reason: "No corporate jargon" },
]

// Qualification terms — only K, M, B are allowed
export const VALID_QUALIFICATIONS = ["K", "M", "B"] as const

// Honest timeline ranges
export const HONEST_TIMELINES = {
  K: "3 hari kerja",
  M: "10-20 hari kerja",
  B: "30-60 hari kerja",
} as const

export interface VoiceGuardResult {
  passed: boolean
  bannedWordViolations: Array<{ match: string; reason: string; count: number }>
  youRatio: { youCount: number; weCount: number; ratio: string; passed: boolean }
  details: string[]
}

/**
 * Scan text for voice guard violations.
 */
export function scanText(text: string): VoiceGuardResult {
  const bannedWordViolations: Array<{ match: string; reason: string; count: number }> = []

  for (const { pattern, reason } of BANNED_WORDS) {
    const matches = text.match(pattern)
    if (matches) {
      bannedWordViolations.push({
        match: matches[0],
        reason,
        count: matches.length,
      })
    }
  }

  // YOU/YOUR ratio: count second-person vs first-person pronouns
  const youPattern = /\b(anda|bapak|ibu|kami|klien|perusahaan)\b/gi
  const wePattern = /\b(kami|kita|nicx|arahdis)\b/gi
  const youMatches = text.match(/\b(anda|bapak|ibu|klien|perusahaan)\b/gi) || []
  const weMatches = text.match(/\b(kami|kita)\b/gi) || []
  const youCount = youMatches.length
  const weCount = weMatches.length
  const ratio = weCount > 0 ? `${youCount}:${weCount}` : `${youCount}:0`
  const ratioPassed = weCount === 0 || youCount / weCount >= 2

  const details: string[] = []
  if (bannedWordViolations.length > 0) {
    details.push(`BANNED WORDS: ${bannedWordViolations.map(v => `"${v.match}" (${v.reason})`).join(", ")}`)
  }
  if (!ratioPassed) {
    details.push(`YOU/YOU ratio ${ratio} — need at least 2:1 (you:we)`)
  }

  return {
    passed: bannedWordViolations.length === 0 && ratioPassed,
    bannedWordViolations,
    youRatio: { youCount, weCount, ratio, passed: ratioPassed },
    details,
  }
}

/**
 * CLI runner — scans all TSX/TS files in the project for violations.
 */
if (typeof require !== "undefined" && require.main === module) {
  const fs = require("fs")
  const path = require("path")

  const dirs = ["app", "components", "lib"]
  const extensions = [".tsx", ".ts"]

  let allViolations: Array<{ file: string; result: VoiceGuardResult }> = []
  let totalFiles = 0

  for (const dir of dirs) {
    const dirPath = path.join(process.cwd(), dir)
    if (!fs.existsSync(dirPath)) continue

    const walkDir = (d: string) => {
      for (const entry of fs.readdirSync(d, { withFileTypes: true })) {
        const fullPath = path.join(d, entry.name)
        if (entry.isDirectory()) {
          walkDir(fullPath)
        } else if (extensions.some(ext => entry.name.endsWith(ext)) && !entry.name.includes("voice-guard")) {
          totalFiles++
          const content = fs.readFileSync(fullPath, "utf-8")
          const result = scanText(content)
          if (!result.passed) {
            allViolations.push({ file: fullPath, result })
          }
        }
      }
    }
    walkDir(dirPath)
  }

  if (allViolations.length > 0) {
    console.error("❌ Voice guard FAILED:\n")
    for (const { file, result } of allViolations) {
      console.error(`  ${file}:`)
      for (const detail of result.details) {
        console.error(`    - ${detail}`)
      }
    }
    process.exit(1)
  } else {
    console.log(`✅ Voice guard passed (${totalFiles} files scanned)`)
  }
}