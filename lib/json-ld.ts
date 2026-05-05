interface OrganizationSchema {
  "@context": "https://schema.org"
  "@type": "Organization"
  name: string
  url: string
  logo: string
  description: string
  contactPoint: {
    "@type": "ContactPoint"
    telephone: string
    contactType: string
    availableLanguage: string[]
  }
}

interface ServiceSchema {
  "@context": "https://schema.org"
  "@type": "Service"
  name: string
  description: string
  provider: {
    "@type": "Organization"
    name: string
    url: string
  }
  areaServed: {
    "@type": "Country"
    name: string
  }
  priceRange: string
}

interface FAQPageSchema {
  "@context": "https://schema.org"
  "@type": "FAQPage"
  mainEntity: Array<{
    "@type": "Question"
    name: string
    acceptedAnswer: {
      "@type": "Answer"
      text: string
    }
  }>
}

export function organizationSchema(): OrganizationSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PT Atrahdis Idea Nusantara",
    url: "https://atrahdis.id",
    logo: "https://atrahdis.id/icon.svg",
    description:
      "Jasa pengurusan SBU Konstruksi — Kecil, Menengah, Besar. Nicx audit sendiri setiap case sejak 2016.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+62-896-9921-7161",
      contactType: "WhatsApp",
      availableLanguage: ["Indonesian"],
    },
  }
}

export function serviceSchema(variant: "sbu" | "perpanjangan" | "biaya" | "tender"): ServiceSchema {
  const serviceNames: Record<typeof variant, string> = {
    sbu: "Jasa Pembuatan SBU Konstruksi",
    perpanjangan: "Jasa Perpanjangan SBU Konstruksi",
    biaya: "Konsultasi Biaya SBU Konstruksi",
    tender: "Jasa SBU untuk Tender Konstruksi",
  }

  const descriptions: Record<typeof variant, string> = {
    sbu: "Pembuatan SBU Kecil mulai 3 hari kerja, Menengah 10–20 hari, Besar 30–60 hari. Audit gratis sebelum bayar.",
    perpanjangan: "Perpanjangan SBU sebelum expired. PPh tetap 1.75%, tender tidak gugur.",
    biaya: "Biaya transparan SBU Kecil mulai Rp 4,5 juta. Quote final setelah audit gratis.",
    tender: "SBU untuk prakualifikasi tender. Proses cepat, garansi uang kembali 100%.",
  }

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceNames[variant],
    description: descriptions[variant],
    provider: {
      "@type": "Organization",
      name: "PT Atrahdis Idea Nusantara",
      url: "https://atrahdis.id",
    },
    areaServed: {
      "@type": "Country",
      name: "Indonesia",
    },
    priceRange: "$$$",
  }
}

export function faqPageSchema(
  faqItems: Array<{ question: string; answer: string }>
): FAQPageSchema {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }
}
