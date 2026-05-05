import { Check } from "lucide-react"

const PRICING_TIERS = [
  {
    name: "Kecil",
    sub: "Kualifikasi K / Sipil, Gedung, dll",
    price: "Rp 4,5 Juta",
    priceNote: "harga tetap",
    duration: "mulai 3 hari kerja",
    features: [
      "Audit berkas gratis sebelum bayar",
      "Koordinasi submit ke LPJK",
      "Soft copy SBU resmi",
      "Backup dokumen compliance",
      "Konsultasi via WhatsApp",
    ],
    popular: false,
  },
  {
    name: "Menengah",
    sub: "Kualifikasi M / Semua sub-klasifikasi",
    price: "Rp 18 Juta",
    priceNote: "harga tetap",
    duration: "10–20 hari kerja",
    features: [
      "Semua layanan paket Kecil",
      "Pendampingan audit KAP",
      "Review legalitas dokumen lengkap",
      "Koordinasi multi-klasifikasi",
      "Dedicated account manager",
      "Reminder perpanjangan tahunan",
    ],
    popular: true,
  },
]

export function PricingSection() {
  return (
    <section className="py-16 lg:py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-[#C9A961] font-semibold text-sm uppercase tracking-wider mb-4">
            Biaya Transparan
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B2545] mb-4 text-balance">
            Biaya Mulai Rp 4,5 Juta — No Hidden Fee
          </h2>
          <p className="text-lg text-[#4A5568]">
            Quote final setelah audit gratis. Tidak ada biaya tersembunyi atau tambahan mendadak.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {PRICING_TIERS.map((tier, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 ${
                tier.popular
                  ? "border-2 border-[#C9A961] shadow-xl"
                  : "border border-[#E2E8F0] shadow-sm"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-[#C9A961] text-[#0B2545] px-4 py-1 rounded-full text-sm font-semibold">
                    Paling Dicari
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[#0B2545] mb-1">{tier.name}</h3>
                <p className="text-sm text-[#4A5568]">{tier.sub}</p>
                <p className="text-sm text-[#4A5568] mt-1">{tier.duration}</p>
              </div>

              <div className="mb-6">
                <p className="text-sm text-[#4A5568]">{tier.priceNote}</p>
                <p className="text-3xl font-bold text-[#0B2545]">{tier.price}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#C9A961] flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A5568]">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#konsultasi"
                className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                  tier.popular
                    ? "bg-[#C9A961] hover:bg-[#A88B45] text-[#0B2545]"
                    : "bg-[#0B2545] hover:bg-[#1B3A5F] text-white"
                }`}
              >
                Konsultasi Sekarang
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-[#4A5568] mt-8 max-w-2xl mx-auto">
          * Harga final diberikan setelah audit gratis. Dapat bervariasi tergantung jumlah sub-klasifikasi dan kompleksitas dokumen.
        </p>
      </div>
    </section>
  )
}
