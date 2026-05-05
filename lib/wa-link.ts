import { WA_NUMBER } from "./constants"

export type LPPage = "sbu" | "perpanjangan" | "biaya" | "tender"

interface UTMPrams {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_content?: string
  utm_term?: string
}

interface WALinkOptions {
  page: LPPage
  formData?: {
    kualifikasi?: string
    subKlasifikasi?: string
    timeline?: string
  }
  utm?: UTMPrams
  direct?: boolean
}

const PAGE_LABELS: Record<LPPage, string> = {
  sbu: "Pembuatan SBU",
  perpanjangan: "Perpanjangan SBU",
  biaya: "Info Biaya SBU",
  tender: "SBU untuk Tender",
}

function getUTMParams(): UTMPrams {
  if (typeof window === "undefined") return {}
  const params = new URLSearchParams(window.location.search)
  return {
    utm_source: params.get("utm_source") || undefined,
    utm_medium: params.get("utm_medium") || undefined,
    utm_campaign: params.get("utm_campaign") || undefined,
    utm_content: params.get("utm_content") || undefined,
    utm_term: params.get("utm_term") || undefined,
  }
}

function formatUTMTag(utm: UTMPrams): string {
  const parts = [
    utm.utm_source,
    utm.utm_medium,
    utm.utm_campaign,
    utm.utm_content,
  ].filter(Boolean)
  return parts.length > 0 ? `[${parts.join("|")}]` : ""
}

export function buildWALink(options: WALinkOptions): string {
  const { page, formData, utm, direct = false } = options
  const finalUTM = { ...getUTMParams(), ...utm }
  const utmTag = formatUTMTag(finalUTM)
  const pageLabel = PAGE_LABELS[page]

  let message: string

  const campaignLabel = finalUTM.utm_campaign
    ? `iklan ${finalUTM.utm_campaign}`
    : finalUTM.utm_source || "website"

  if (direct) {
    message = `Halo Nicx, saya dari ${campaignLabel} ingin konsultasi ${pageLabel}. ${utmTag}`.trim()
  } else if (formData) {
    const kLabel = formData.kualifikasi || "Belum dipilih"
    const sLabel = formData.subKlasifikasi || "Belum dipilih"
    const tLabel = formData.timeline || "Belum dipilih"
    message = `Halo Nicx, saya dari ${campaignLabel} ingin konsultasi ${pageLabel}.\n\nKualifikasi: ${kLabel}\nSub-klasifikasi: ${sLabel}\nTimeline: ${tLabel}\n${utmTag}`.trim()
  } else {
    message = `Halo Nicx, saya dari ${campaignLabel} ingin konsultasi ${pageLabel}. ${utmTag}`.trim()
  }

  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`
}