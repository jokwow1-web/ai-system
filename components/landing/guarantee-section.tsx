import { Shield, CheckCircle, AlertCircle } from "lucide-react"

const GUARANTEE_BULLETS = [
  "Nicx (founder, berpengalaman langsung sejak 2016) audit semua dependensi berkas (OSS, KBLI, SKK, KAP) SEBELUM submit ke LPJK",
  "Jika ada risiko ditolak, Nicx informasikan SEBELUM Anda bayar penuh — bebas batal tanpa biaya",
  "Jika sudah bayar dan LPJK menolak karena kesalahan tim Nicx, uang kembali 100% — tertulis di kontrak yang Anda terima sebelum bayar",
]

export function GuaranteeSection() {
  return (
    <section className="py-16 lg:py-24 bg-[#0B2545]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#C9A961]/20 rounded-2xl mb-6">
              <Shield className="w-8 h-8 text-[#C9A961]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
              Jaminan Uang Kembali 100%
            </h2>
            <p className="text-xl text-[#C9A961] font-semibold">
              Jika Berkas Anda Ditolak LPJK
            </p>
          </div>

          {/* Yellow highlight box */}
          <div className="bg-[#C9A961] rounded-2xl p-8 mb-8">
            <div className="flex items-start gap-3 mb-6">
              <AlertCircle className="w-6 h-6 text-[#0B2545] flex-shrink-0 mt-0.5" />
              <p className="text-[#0B2545] font-bold text-lg">
                Satu-satunya Jasa SBU dengan Jaminan Tertulis
              </p>
            </div>
            <ul className="space-y-4">
              {GUARANTEE_BULLETS.map((bullet, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#0B2545] flex-shrink-0 mt-0.5" />
                  <span className="text-[#0B2545] font-medium leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Seal + proof track record */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-4">
            <div className="inline-flex flex-col items-center justify-center w-44 h-44 rounded-full border-4 border-[#C9A961] bg-[#C9A961]/10">
              <Shield className="w-9 h-9 text-[#C9A961] mb-2" />
              <span className="text-[#C9A961] font-black text-center text-sm leading-tight uppercase tracking-wide">
                Garansi 100%<br />Uang Kembali
              </span>
              <span className="text-white/60 text-xs mt-2">Jaminan Tertulis</span>
            </div>
            <div className="text-center">
              <p className="text-5xl font-black text-[#C9A961]">0</p>
              <p className="text-white font-semibold mt-1">Klaim Garansi Dicairkan</p>
              <p className="text-white/60 text-sm">dalam 24 bulan terakhir</p>
              <p className="text-white/50 text-xs mt-2">sejak 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
