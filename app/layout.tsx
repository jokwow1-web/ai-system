import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import { GTMScripts } from '@/components/landing/gtm-scripts'
import { organizationSchema } from '@/lib/json-ld'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Atrahdis | Jasa Pengurusan SBU Konstruksi',
    template: '%s | Atrahdis',
  },
  description: 'Nicx audit sendiri setiap case SBU sejak 2016. K, M, B — mulai 3 hari kerja. Garansi uang kembali 100% tertulis di kontrak.',
  keywords: ['SBU Konstruksi', 'Jasa SBU', 'LPJK', 'Sertifikat Badan Usaha', 'Tender Konstruksi', 'SKK'],
  authors: [{ name: 'Atrahdis Consulting' }],
  generator: 'Next.js',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    siteName: 'Atrahdis',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0B2545',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <head>
        <Script
          id="json-ld-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema()),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-background">
        <GTMScripts />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
