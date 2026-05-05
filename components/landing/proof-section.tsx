import Image from "next/image"
import { Star, Quote, Building2 } from "lucide-react"

const TESTIMONIALS = [
  {
    quote: "Mas Nicky tidak hanya membawa solusi perizinan inovatif ke industri konstruksi, tetapi juga membantu klien menavigasi regulasi yang kompleks secara mulus dan efisien!",
    name: "Dimas",
    company: "PT. Harapan Nusantara Djaya",
    location: "Direktur",
    photo: "/logos/pak-dimas.jpeg",
  },
]

const CASE_STUDIES = [
  {
    company: "PT Wijaya Konstruksi Nusantara",
    detail: "SBU Menengah (M), sub-klasifikasi SI001. Proses 12 hari kerja. Tender pemerintah lolos prakualifikasi.",
  },
  {
    company: "PT Bangun Gemilang Sejahtera",
    detail: "SBU Kecil (K), sub-klasifikasi BG001. Proses 3 hari kerja. Langsung ikut tender swasta Rp 1,8 M.",
  },
  {
    company: "PT Mandiri Jaya Abadi",
    detail: "Perpanjangan SBU Besar (B). NIB merah diperbaiki dulu, SBU terbit 35 hari kerja. Tidak kena gap tender.",
  },
]

export function ProofSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Client Logos */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-[#0B2545] text-center mb-4">
            Dipercaya oleh Kontraktor Nasional dan Multinasional
          </h3>
          <p className="text-center text-[#4A5568] mb-8">
            di seluruh Indonesia
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10">
            {[
              { src: "/logos/waskita.png", alt: "Waskita Karya" },
              { src: "/logos/korindo.png", alt: "Korindo" },
              { src: "/logos/sumitomo.svg", alt: "Sumitomo Corporation" },
              { src: "/logos/ssb.png", alt: "Sanggar Sarana Baja" },
              { src: "/logos/synkrona.png", alt: "Synkrona Engineering" },
              { src: "/logos/elsewedy.png", alt: "Elsewedy Electric" },
            ].map((logo) => (
              <div key={logo.alt} className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 relative w-[130px] h-10">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes="130px"
                  loading="lazy"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-[#94A3B8] mt-6">
            dan 80+ perusahaan kontraktor lainnya
          </p>
        </div>

        {/* Case Studies */}
        <div className="mb-16 max-w-4xl mx-auto">
          <h3 className="text-xl md:text-2xl font-bold text-[#0B2545] text-center mb-8">
            Case Study Klien
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {CASE_STUDIES.map((cs, index) => (
              <div
                key={index}
                className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-6 hover:border-[#C9A961]/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Building2 className="w-5 h-5 text-[#C9A961]" />
                  <p className="font-semibold text-[#0B2545] text-sm">{cs.company}</p>
                </div>
                <p className="text-sm text-[#4A5568] leading-relaxed">{cs.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-[#0B2545] text-center mb-12">
            Apa Kata Klien Kami
          </h3>

          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-8 relative"
            >
              <Quote className="w-12 h-12 text-[#C9A961]/20 absolute top-6 right-6" />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-[#C9A961] text-[#C9A961]" />
                ))}
              </div>

              <p className="text-[#4A5568] mb-8 leading-relaxed text-lg italic">
                {`"${testimonial.quote}"`}
              </p>

              <div className="flex items-center gap-4">
                {testimonial.photo && (
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#C9A961] relative flex-shrink-0">
                    <Image
                      src={testimonial.photo}
                      alt={testimonial.name}
                      fill
                      sizes="56px"
                      loading="lazy"
                      className="object-cover object-top"
                    />
                  </div>
                )}
                <div>
                  <p className="font-bold text-[#0B2545]">{testimonial.name}</p>
                  <p className="text-sm text-[#4A5568]">{testimonial.location}</p>
                  <p className="text-sm font-medium text-[#C9A961]">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
