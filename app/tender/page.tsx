import { Suspense } from "react"
import type { Metadata } from "next"
import { LandingPageContent } from "../sbu/content"
import { PAGE_CONTENT } from "@/lib/lp-content"

const content = PAGE_CONTENT.tender

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
  keywords: ["SBU Tender", "SBU Prakualifikasi", "Tender Konstruksi", "LPJK", "Sertifikat Badan Usaha"],
  alternates: {
    canonical: "https://atrahdis.id/tender",
  },
  openGraph: {
    title: content.metaTitle,
    description: content.metaDescription,
    type: "website",
    locale: "id_ID",
  },
}

export default function TenderLandingPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <LandingPageContent variant="tender" />
    </Suspense>
  )
}

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B2545] via-[#1B3A5F] to-[#0B2545] flex items-center justify-center">
      <div className="animate-pulse text-white text-lg">Memuat...</div>
    </div>
  )
}