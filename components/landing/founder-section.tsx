import Image from "next/image"

export function FounderSection() {
  return (
    <section className="py-16 lg:py-24 bg-[#0B2545]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">

          {/* Foto */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-[#C9A961] shadow-xl relative">
                <Image
                  src="/logos/nicx.jpg"
                  alt="Nicx — Founder Atrahdis"
                  fill
                  sizes="(max-width: 768px) 192px, 224px"
                  priority
                  className="object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#C9A961] text-[#0B2545] text-xs font-bold px-4 py-1.5 rounded-full">
                Mengurus langsung sejak 2016
              </div>
            </div>
          </div>

          {/* Teks */}
          <div className="text-center md:text-left">
            <p className="text-[#C9A961] font-semibold text-sm uppercase tracking-wider mb-2">
              Founder & Principal Consultant
            </p>
            <h2 className="text-4xl font-black text-white mb-2">Nicx</h2>
            <p className="text-[#C9A961] italic text-lg mb-6">
              "Regulation is a code. We debug it for you."
            </p>
            <p className="text-white/70 leading-relaxed text-base md:text-lg max-w-xl">
              Nicx melihat regulasi seperti kode program: ada logika, ada aturan,
              dan kalau strukturnya benar, hasilnya pasti. Sejak 2016, dia urus SBU
              langsung di lapangan — bukan delegasi. Satu hal yang tidak pernah
              berubah: tidak ada berkas yang masuk ke LPJK sebelum dia sendiri yang
              audit dan approve.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
