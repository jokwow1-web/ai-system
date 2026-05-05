import { Suspense } from "react"
import type { Metadata } from "next"
import Script from "next/script"
import { LandingPageContent } from "./content"
import { PAGE_CONTENT } from "@/lib/lp-content"
import { serviceSchema, faqPageSchema } from "@/lib/json-ld"

const content = PAGE_CONTENT.sbu

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
  keywords: ["SBU Konstruksi", "Jasa SBU", "Pembuatan SBU", "LPJK", "Sertifikat Badan Usaha", "Tender Konstruksi", "SKK"],
  alternates: {
    canonical: "https://atrahdis.id/sbu",
  },
  openGraph: {
    title: content.metaTitle,
    description: content.metaDescription,
    type: "website",
    locale: "id_ID",
  },
}

export default function SBULandingPage() {
  return (
    <>
      <Script
        id="json-ld-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema("sbu")),
        }}
      />
      <Script
        id="json-ld-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageSchema(content.faq || [])),
        }}
      />
      <Suspense fallback={<LoadingFallback />}>
        <LandingPageContent variant="sbu" />
      </Suspense>
    </>
  )
}

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B2545] via-[#1B3A5F] to-[#0B2545] flex items-center justify-center">
      <div className="animate-pulse text-white text-lg">Memuat...</div>
    </div>
  )
}