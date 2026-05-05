import type { LPPage } from "./wa-link"

export type Variant = LPPage

export interface HeroContent {
  headline: string
  subheadline: string
  description: string
}

export interface PageContent {
  variant: Variant
  hero: HeroContent
  metaTitle: string
  metaDescription: string
  problems?: { title: string; description: string }[]
  faq?: { question: string; answer: string }[]
}

export const VARIANTS: Variant[] = ["sbu", "perpanjangan", "biaya", "tender"]

export const PAGE_CONTENT: Record<Variant, PageContent> = {
  sbu: {
    variant: "sbu",
    hero: {
      headline: "SBU [K/M/B] Anda. Nicx Audit Sendiri.",
      subheadline: "Mulai 3 Hari Kerja. Garansi 100% Tertulis di Kontrak.",
      description:
        "Bukan delegasi ke tim junior. Nicx personally review setiap case sejak 2016. Audit gratis sebelum bayar — PPh 1.75%, termin proyek bisa cair.",
    },
    metaTitle: "Jasa Pembuatan SBU Konstruksi",
    metaDescription:
      "SBU Kecil mulai 3 hari kerja, Menengah 10–20 hari, Besar 30–60 hari. Nicx audit sendiri sejak 2016. Garansi uang kembali 100% tertulis di kontrak.",
    problems: [
      {
        title: "NIB Merah di OSS",
        description:
          "Sistem OSS-RBA auto-reject jika NIB Anda berstatus merah. Bank garansi menolak, termin proyek bisa macet total. Nicx cek status NIB sebelum Anda bayar.",
      },
      {
        title: "KBLI Tidak Sinkron",
        description:
          "OSS menolak jika KBLI di NIB tidak cocok dengan sub-klasifikasi SBU yang Anda ajukan. Akibatnya? LPJK reject, berkas ulang dari awal.",
      },
      {
        title: "SKK Expired",
        description:
          "LPJK auto-reject semua permohonan jika SKK tenaga ahli sudah expired. Banyak kontraktor tidak sadar sampai ditolak. Audit gratis Nicx tangkap ini sebelum Anda bayar.",
      },
    ],
    faq: [
      {
        question: "Apa saja dokumen yang diperlukan untuk membuat SBU?",
        answer:
          "NIB, Akta Pendirian & Perubahan, NPWP Perusahaan, SKK Tenaga Ahli yang masih berlaku, Laporan Keuangan (untuk Menengah perlu diaudit KAP), dan dokumen pendukung lainnya sesuai sub-klasifikasi. Nicx kirimkan checklist lengkap setelah Anda konsultasi.",
      },
      {
        question: "Berapa lama proses pembuatan SBU?",
        answer:
          "SBU Kecil (berkas lengkap): mulai 3 hari kerja. SBU Menengah: 10–20 hari kerja. SBU Besar: 30–60 hari kerja. Waktu dihitung setelah semua dokumen lengkap dan pembayaran dikonfirmasi.",
      },
      {
        question: "Apakah ada garansi jika ditolak LPJK?",
        answer:
          "Nicx audit dokumen SEBELUM submit ke LPJK. Jika ada risiko ditolak, Anda diberitahu sebelum bayar penuh. Jika ditolak karena kesalahan kami, uang kembali 100% — tertulis di kontrak.",
      },
      {
        question: "Apa bedanya kualifikasi SBU K, M, dan B?",
        answer:
          "Kecil (K): proyek s.d. Rp 2,5 Miliar. Menengah (M): proyek s.d. Rp 50 Miliar. Besar (B): proyek di atas Rp 50 Miliar. Persyaratan SKK dan dokumen berbeda tiap kualifikasi. Konsultasikan dulu jika belum yakin.",
      },
      {
        question: "Apakah bisa urus SKK tenaga ahli juga?",
        answer:
          "Ya, SKK (Sertifikat Kompetensi Kerja) adalah syarat wajib untuk SBU. Nicx bisa urus bersamaan dengan SBU dalam satu paket.",
      },
      {
        question: "Bagaimana sistem pembayaran?",
        answer:
          "DP 50% setelah audit dan quote disetujui, pelunasan 50% setelah SBU terbit. Invoice resmi diberikan untuk setiap pembayaran.",
      },
    ],
  },
  perpanjangan: {
    variant: "perpanjangan",
    hero: {
      headline: "SBU Expired? Beres Tanpa Tender Tertunda.",
      subheadline: "Nicx Audit Berkas Sebelum Submit. Garansi Lolos atau Uang Kembali.",
      description:
        "SBU expired = PPh kembali 2% (bukan 1.75%), termin proyek bisa macet, tender gugur. Nicx handle perpanjangan tanpa gap — SBU aktif sebelum deadline.",
    },
    metaTitle: "Perpanjangan SBU Konstruksi",
    metaDescription:
      "SBU expired? PPh naik ke 2%, termin macet, tender gugur. Nicx audit berkas sebelum submit, garansi 100% uang kembali tertulis di kontrak.",
    problems: [
      {
        title: "SBU Expired = PPh Naik",
        description:
          "Tanpa SBU aktif, PPh potong langsung 2% (bukan 1.75%). Di proyek Rp 5 M, itu Rp 125 juta langsung hilang dari cashflow Anda.",
      },
      {
        title: "Termin Proyek Macet",
        description:
          "Kontraktor tanpa SBU aktif tidak bisa menagih termin. Banyak proyek tertunda berbulan-bulan hanya karena perpanjangan SBU telat.",
      },
      {
        title: "Tender Gugur Otomatis",
        description:
          "Prakualifikasi tender mewajibkan SBU aktif. Satu hari expired, Anda gugur — tanpa pengecualian. Deadline prakual Q2 2026 sudah dekat.",
      },
    ],
    faq: [
      {
        question: "Apakah bisa perpanjang SBU yang sudah expired?",
        answer:
          "Bisa, tapi prosesnya sama seperti pembuatan baru jika sudah expired. Nicx handle end-to-end — Anda cukup kirim berkas, sisanya kami urus.",
      },
      {
        question: "Berapa lama proses perpanjangan?",
        answer:
          "Sama seperti pembuatan baru: Kecil 3 hari kerja, Menengah 10–20 hari, Besar 30–60 hari. Tergantung kelengkapan dokumen.",
      },
      {
        question: "Dokumen apa yang perlu disiapkan untuk perpanjangan?",
        answer:
          "Sama seperti pembuatan baru ditambah SBU lama. Yang sering bikin masalah: SKK tenaga ahli expired, NIB belum update, laporan keuangan belum diaudit KAP.",
      },
      {
        question: "Berapa biaya perpanjangan SBU?",
        answer:
          "Biaya perpanjangan sama dengan pembuatan baru sesuai kualifikasi. Konsultasikan dulu untuk audit gratis — Nicx berikan quote final sebelum Anda bayar.",
      },
    ],
  },
  biaya: {
    variant: "biaya",
    hero: {
      headline: "Biaya SBU Transparan —",
      subheadline: "Tidak Ada Biaya Tersembunyi. Audit Gratis Sebelum Bayar.",
      description:
        "Mulai Rp 4,5 juta. Quote final setelah audit gratis Nicx. Bandingkan: biaya layanan vs nilai proyek yang bisa hangus jika SBU gagal.",
    },
    metaTitle: "Biaya SBU Konstruksi",
    metaDescription:
      "SBU Kecil mulai Rp 4,5 jt, Menengah mulai Rp 18 jt, Besar mulai Rp 50 jt. Quote final setelah audit gratis. Garansi uang kembali 100% tertulis di kontrak.",
    problems: [
      {
        title: "Biaya Tersembunyi",
        description:
          "Banyak jasa SBU yang quote murah di awal, tapi biaya tambahan muncul terus-menerus: revisi dokumen, re-submit, biaya SKK terpisah. Nicx berikan satu harga final setelah audit.",
      },
      {
        title: "SBU Gagal = Proyek Hangus",
        description:
          "Berapa nilai proyek yang Anda pertaruhkan? SBU gagal berarti tender gugur, termin macet, PPh naik. Biaya layanan SBU jauh lebih kecil dari risiko tanpa SBU.",
      },
      {
        title: "Proses Opak Tanpa Transparansi",
        description:
          "Anda bayar, lalu tunggu tanpa update. Dengan Nicx, setiap tahap dilaporkan — Anda tahu persis di mana proses berjalan.",
      },
    ],
    faq: [
      {
        question: "Berapa biaya pembuatan SBU?",
        answer:
          "SBU Kecil: mulai Rp 4,5 juta. SBU Menengah: mulai Rp 18 juta. SBU Besar: mulai Rp 50 juta. Quote final setelah audit gratis — tidak ada biaya tersembunyi.",
      },
      {
        question: "Apakah ada biaya tambahan di luar quote?",
        answer:
          "Tidak. Quote yang Nicx berikan setelah audit adalah harga final. Jika ada kebutuhan tambahan (misalnya SKK baru), Nicx informasikan di awal sebelum Anda bayar.",
      },
      {
        question: "Bagaimana sistem pembayaran?",
        answer:
          "DP 50% setelah audit dan quote disetujui, pelunasan 50% setelah SBU terbit. Invoice resmi diberikan untuk setiap pembayaran.",
      },
      {
        question: "Apakah ada garansi?",
        answer:
          "Ya. Jika SBU ditolak LPJK karena kesalahan kami, uang kembali 100% — tertulis di kontrak yang Anda terima sebelum bayar.",
      },
    ],
  },
  tender: {
    variant: "tender",
    hero: {
      headline: "SBU untuk Tender — Siap Sebelum Deadline Prakual.",
      subheadline: "Mulai 3 Hari Kerja. 0 Klaim Garansi Dicairkan dalam 24 Bulan.",
      description:
        "Deadline prakualifikasi dekat? SBU bisa terbit mulai 3 hari kerja (berkas lengkap). Nicx handle sejak audit dokumen sampai LPJK approve — Anda fokus menyiapkan tender.",
    },
    metaTitle: "SBU untuk Tender Konstruksi",
    metaDescription:
      "SBU terbit mulai 3 hari kerja (Kecil). Jika tender Anda butuh SBU cepat, Nicx audit berkas hari ini. Garansi 100% uang kembali tertulis di kontrak.",
    problems: [
      {
        title: "SBU Belum Ada = Tidak Bisa Ikut Tender",
        description:
          "Prakualifikasi mewajibkan SBU aktif. Tanpa itu, Anda tidak bisa submit penawaran — peluang proyek hilang sebelum mulai.",
      },
      {
        title: "KSWP Tidak Clear = Tender Lock",
        description:
          "Kartu Singgungan Wajib Pajak (KSWP) tidak clear langsung diskualifikasi. Nicx cek status KSWP Anda sebelum mendaftar tender.",
      },
      {
        title: "KBLI Salah = Sub-bidang Rejected",
        description:
          "LPJK reject sub-klasifikasi yang tidak sesuai KBLI di NIB. Satu KBLI salah = prakualifikasi gugur, tender hilang.",
      },
    ],
    faq: [
      {
        question: "Bisa cepat dapat SBU untuk tender bulan depan?",
        answer:
          "SBU Kecil bisa terbit mulai 3 hari kerja setelah berkas lengkap. Menengah 10–20 hari. Nicx prioritaskan case tender dengan deadline ketat.",
      },
      {
        question: "Apa saja yang dibutuhkan untuk prakualifikasi tender?",
        answer:
          "SBU aktif, NIB berstatus benar, KSWP clear, dan dokumen tender spesifik. Nicx audit semua sebelum Anda mendaftar — pastikan tidak ada yang bikin gugur.",
      },
      {
        question: "Apakah SBU bisa diupgrade kualifikasi untuk tender besar?",
        answer:
          "Ya, Nicx bisa handle upgrade kualifikasi dari K ke M atau M ke B. Proses dan timeline berbeda — konsultasikan dulu agar tender tidak tertunda.",
      },
      {
        question: "Deadline prakualifikasi saya 2 minggu lagi, bisa?",
        answer:
          "Untuk SBU Kecil berkas lengkap, 3 hari kerja realistis. Untuk Menengah, 10–20 hari kerja. Konsultasikan sekarang agar Nicx bisa cek kelengkapan berkas Anda.",
      },
    ],
  },
}

export function getPageContent(variant: Variant): PageContent {
  return PAGE_CONTENT[variant]
}