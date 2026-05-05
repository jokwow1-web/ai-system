"use client"

import { MiniForm } from "./mini-form"
import { CheckCircle, Shield, Clock } from "lucide-react"
import type { Variant } from "@/lib/lp-content"
import { PAGE_CONTENT } from "@/lib/lp-content"

interface HeroSectionProps {
  variant: Variant
}

const TRUST_BADGES = [
  { icon: Shield, text: "Nicx Audit Sendiri Sejak 2016" },
  { icon: CheckCircle, text: "0 Klaim Garansi dalam 24 Bulan" },
  { icon: Clock, text: "SBU Kecil Mulai 3 Hari Kerja" },
]

export function HeroSection({ variant }: HeroSectionProps) {
  const content = PAGE_CONTENT[variant].hero

  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-[#0B2545] via-[#1B3A5F] to-[#0B2545]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A961' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-[#C9A961]/20 border border-[#C9A961]/30 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-[#C9A961] rounded-full animate-pulse" />
              <span className="text-sm text-[#C9A961] font-medium">Konsultan SBU Konstruksi</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-balance">
              {content.headline}
              <span className="block text-[#C9A961] mt-2">{content.subheadline}</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl leading-relaxed">
              {content.description}
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 mb-8">
              {TRUST_BADGES.map((badge, index) => (
                <div key={index} className="flex items-center gap-2">
                  <badge.icon className="w-5 h-5 text-[#C9A961]" />
                  <span className="text-white/90 font-medium">{badge.text}</span>
                </div>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="lg:hidden">
              <MiniForm variant="hero" page={variant} />
            </div>
          </div>

          {/* Right Form - Desktop */}
          <div className="hidden lg:block">
            <MiniForm variant="hero" page={variant} />
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}