"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import type { Variant } from "@/lib/lp-content"
import { PAGE_CONTENT } from "@/lib/lp-content"

const DEFAULT_FAQ = [
  {
    question: "Apa saja dokumen yang diperlukan untuk membuat SBU?",
    answer: "NIB, Akta Pendirian & Perubahan, NPWP Perusahaan, SKK Tenaga Ahli yang masih berlaku, Laporan Keuangan (untuk Menengah perlu diaudit KAP), dan dokumen pendukung lainnya sesuai sub-klasifikasi. Nicx kirimkan checklist lengkap setelah konsultasi.",
  },
  {
    question: "Berapa lama proses pembuatan SBU?",
    answer: "SBU Kecil (berkas lengkap): mulai 3 hari kerja. SBU Menengah: 10–20 hari kerja. SBU Besar: 30–60 hari kerja. Waktu dihitung setelah semua dokumen lengkap dan pembayaran dikonfirmasi.",
  },
  {
    question: "Apakah ada garansi jika ditolak LPJK?",
    answer: "Nicx audit dokumen SEBELUM submit ke LPJK. Jika ada risiko ditolak, Anda diberitahu sebelum bayar penuh. Jika ditolak karena kesalahan tim Nicx, uang kembali 100% — tertulis di kontrak.",
  },
  {
    question: "Apa bedanya kualifikasi SBU K, M, dan B?",
    answer: "Kecil (K): proyek s.d. Rp 2,5 Miliar. Menengah (M): proyek s.d. Rp 50 Miliar. Besar (B): proyek di atas Rp 50 Miliar. Persyaratan SKK dan dokumen berbeda tiap kualifikasi. Konsultasikan dulu jika belum yakin.",
  },
  {
    question: "Apakah bisa urus SKK tenaga ahli juga?",
    answer: "Ya, SKK (Sertifikat Kompetensi Kerja) adalah syarat wajib untuk SBU. Nicx bisa urus bersamaan dengan SBU dalam satu paket.",
  },
  {
    question: "Apakah melayani seluruh Indonesia?",
    answer: "Ya, full online via WhatsApp dan email. Dokumen dikirim dalam format digital, SBU dikirim soft copy. Tidak perlu datang ke kantor.",
  },
  {
    question: "Bagaimana sistem pembayaran?",
    answer: "DP 50% setelah audit dan quote disetujui, pelunasan 50% setelah SBU terbit. Invoice resmi diberikan untuk setiap pembayaran.",
  },
]

interface FAQSectionProps {
  variant?: Variant
}

export function FAQSection({ variant = "sbu" }: FAQSectionProps) {
  const faqItems = PAGE_CONTENT[variant]?.faq || DEFAULT_FAQ

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-[#C9A961] font-semibold text-sm uppercase tracking-wider mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B2545] mb-4 text-balance">
            Pertanyaan yang Sering Ditanyakan
          </h2>
          <p className="text-lg text-[#4A5568]">
            Temukan jawaban untuk pertanyaan umum seputar pengurusan SBU Konstruksi.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-6 data-[state=open]:bg-white data-[state=open]:border-[#C9A961]/30 data-[state=open]:shadow-md transition-all"
              >
                <AccordionTrigger className="text-left text-[#0B2545] font-semibold hover:no-underline py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#4A5568] pb-5 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}