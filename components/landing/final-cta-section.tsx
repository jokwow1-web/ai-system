"use client"

import { MiniForm } from "./mini-form"
import { MessageCircle, Phone } from "lucide-react"

import { buildWALink } from "@/lib/wa-link"
import type { LPPage } from "@/lib/wa-link"

interface FinalCTASectionProps {
  page?: LPPage
}

export function FinalCTASection({ page = "sbu" }: FinalCTASectionProps) {
  const directWALink = buildWALink({ page, direct: true })

  return (
    <section id="konsultasi" className="py-16 lg:py-24 bg-gradient-to-br from-[#0B2545] via-[#1B3A5F] to-[#0B2545] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A961' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
              Siap Mulai Proses SBU Anda?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Konsultasi gratis dengan Nicx. Audit berkas Anda dan dapatkan quote transparan dalam 1x24 jam.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Form */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-[#0B2545] mb-6">
                Isi Form Konsultasi
              </h3>
              <MiniForm variant="hero" page={page} />
            </div>

            {/* Alternative Contact */}
            <div className="flex flex-col gap-6">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">
                  Atau Hubungi Langsung
                </h3>
                <p className="text-white/70 mb-6">
                  Prefer langsung chat tanpa isi form? Tidak masalah, klik tombol di bawah.
                </p>
                <a
                  href={directWALink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold py-4 px-6 rounded-xl transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat WhatsApp Sekarang
                </a>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#C9A961]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#C9A961]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Jam Operasional</h4>
                    <p className="text-white/70 text-sm">
                      Senin - Jumat: 08:00 - 17:00 WIB<br />
                      Sabtu: 08:00 - 12:00 WIB
                    </p>
                    <p className="text-white/50 text-sm mt-2">
                      Chat di luar jam kerja dibalas di hari kerja berikutnya.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}