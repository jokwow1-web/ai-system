import { Upload, FileCheck, Award } from "lucide-react"

const STEPS = [
  {
    step: 1,
    icon: Upload,
    title: "Upload Berkas",
    description: "Kirim dokumen via WhatsApp. Nicx audit gratis dalam 1x24 jam untuk memastikan kelengkapan dan kesesuaian.",
  },
  {
    step: 2,
    icon: FileCheck,
    title: "Konfirmasi Quote",
    description: "Terima quote transparan tanpa biaya tersembunyi. Setelah deal, Nicx langsung proses ke LPJK.",
  },
  {
    step: 3,
    icon: Award,
    title: "Terima SBU + Backup",
    description: "SBU terbit dan Nicx kirimkan soft copy beserta backup dokumen. Compliance Anda terjaga untuk tender berikutnya.",
  },
]

export function ProcessSection() {
  return (
    <section className="py-16 lg:py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-[#C9A961] font-semibold text-sm uppercase tracking-wider mb-4">
            Proses Mudah
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B2545] mb-4 text-balance">
            Terima Beres dalam 3 Langkah
          </h2>
          <p className="text-lg text-[#4A5568]">
            Tidak perlu bolak-balik ke kantor. Semua bisa diselesaikan via WhatsApp dan email.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-[16%] right-[16%] h-1 bg-gradient-to-r from-[#C9A961] via-[#C9A961] to-[#C9A961]/30" />

          <div className="grid lg:grid-cols-3 gap-8">
            {STEPS.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E2E8F0] hover:shadow-lg hover:border-[#C9A961]/30 transition-all duration-300">
                  {/* Step Number */}
                  <div className="relative z-10 w-16 h-16 bg-[#0B2545] rounded-2xl flex items-center justify-center mb-6 mx-auto lg:mx-0">
                    <span className="text-2xl font-bold text-[#C9A961]">{step.step}</span>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 bg-[#C9A961]/10 rounded-xl flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-[#C9A961]" />
                  </div>

                  <h3 className="text-xl font-bold text-[#0B2545] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#4A5568] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Badge */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 bg-[#C9A961]/10 border border-[#C9A961]/20 rounded-full px-6 py-3">
            <span className="text-[#0B2545] font-semibold">
              Mulai 3 hari kerja
            </span>
            <span className="text-[#4A5568]">untuk SBU Kecil berkas lengkap</span>
          </div>
        </div>
      </div>
    </section>
  )
}
