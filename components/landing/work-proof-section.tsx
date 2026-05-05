import Image from "next/image"

const PROOF_PHOTOS = [
  { src: "/proof/proof-1.jpg", alt: "Dokumen NIB klien Atrahdis" },
  { src: "/proof/proof-2.jpg", alt: "SBU Kelistrikan yang telah terbit" },
  { src: "/proof/proof-3.jpg", alt: "SKK Tenaga Ahli Konstruksi" },
  { src: "/proof/proof-4.jpg", alt: "KTA Perusahaan Konstruksi" },
  { src: "/proof/proof-5.jpg", alt: "SBU Kelistrikan PT Fukudenryoku" },
  { src: "/proof/proof-6.jpg", alt: "SBU Konstruksi PT Borindo Sarana Utama" },
]

export function WorkProofSection() {
  return (
    <section className="py-16 lg:py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-[#C9A961] font-semibold text-sm uppercase tracking-wider mb-4">
            Hasil Kerja Nyata
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B2545] mb-4 text-balance">
            Setiap SBU Terdokumentasi Sebelum Dikirim
          </h2>
          <p className="text-lg text-[#4A5568]">
            Kebiasaan kami: foto setiap berkas yang selesai sebelum dikirim ke klien. Ini sebagian arsip kami.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {PROOF_PHOTOS.map((photo, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-sm border border-[#E2E8F0] aspect-[4/3] group"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                loading="lazy"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-[#94A3B8] italic mt-6">
          Dokumentasi internal 2020–2021. Berkas fisik klien kini sepenuhnya digital.
        </p>
      </div>
    </section>
  )
}
