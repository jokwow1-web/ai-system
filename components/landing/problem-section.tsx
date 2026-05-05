import { XCircle, AlertTriangle, FileX } from "lucide-react"
import type { Variant } from "@/lib/lp-content"
import { PAGE_CONTENT } from "@/lib/lp-content"

interface ProblemSectionProps {
  variant?: Variant
}

const DEFAULT_PROBLEMS = [
  {
    icon: XCircle,
    title: "NIB Merah di OSS",
    description: "Sistem OSS-RBA auto-reject jika NIB Anda berstatus merah. Bank garansi menolak, termin proyek bisa macet total. Nicx cek status NIB sebelum Anda bayar.",
  },
  {
    icon: AlertTriangle,
    title: "KBLI Tidak Sinkron",
    description: "OSS menolak jika KBLI di NIB tidak cocok dengan sub-klasifikasi SBU yang Anda ajukan. Akibatnya? LPJK reject, berkas ulang dari awal.",
  },
  {
    icon: FileX,
    title: "SKK Expired",
    description: "LPJK auto-reject semua permohonan jika SKK tenaga ahli sudah expired. Banyak kontraktor tidak sadar sampai ditolak. Audit gratis Nicx tangkap ini sebelum Anda bayar.",
  },
]

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  "XCircle": XCircle,
  "AlertTriangle": AlertTriangle,
  "FileX": FileX,
}

export function ProblemSection({ variant = "sbu" }: ProblemSectionProps) {
  const problems = PAGE_CONTENT[variant]?.problems?.map(p => ({
    ...p,
    icon: ICON_MAP[p.title.includes("NIB") ? "XCircle" : p.title.includes("KBLI") ? "AlertTriangle" : "FileX"],
  })) || DEFAULT_PROBLEMS

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-[#C9A961] font-semibold text-sm uppercase tracking-wider mb-4">
            Kenali Risikonya
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B2545] mb-4 text-balance">
            3 Kesalahan Fatal yang Membuat Kontraktor GUGUR di Tender 2026
          </h2>
          <p className="text-lg text-[#4A5568]">
            Jangan sampai Anda termasuk. Cek apakah dokumen Anda sudah benar sebelum submit.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-8 hover:shadow-lg hover:border-[#C9A961]/30 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-500 transition-colors">
                <problem.icon className="w-7 h-7 text-red-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-[#0B2545] mb-3">
                {problem.title}
              </h3>
              <p className="text-[#4A5568] leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 bg-[#0B2545]/5 border border-[#0B2545]/10 rounded-full px-6 py-3">
            <span className="w-3 h-3 bg-green-500 rounded-full" />
            <span className="text-[#0B2545] font-medium">
              Nicx audit gratis sebelum Anda bayar
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}