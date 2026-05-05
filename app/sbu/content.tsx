"use client"

import { HeroSection } from "@/components/landing/hero-section"
import { ProblemSection } from "@/components/landing/problem-section"
import { ProcessSection } from "@/components/landing/process-section"
import { FounderSection } from "@/components/landing/founder-section"
import { ProofSection } from "@/components/landing/proof-section"
import { WorkProofSection } from "@/components/landing/work-proof-section"
import { GuaranteeSection } from "@/components/landing/guarantee-section"
import { PricingSection } from "@/components/landing/pricing-section"
import { FAQSection } from "@/components/landing/faq-section"
import { FinalCTASection } from "@/components/landing/final-cta-section"
import { FooterSection } from "@/components/landing/footer-section"
import { WAStickyButton } from "@/components/landing/wa-sticky-button"
import { TrackingProvider } from "@/components/landing/tracking-provider"

interface LandingPageContentProps {
  variant?: "sbu" | "perpanjangan" | "biaya" | "tender"
}

export function LandingPageContent({ variant = "sbu" }: LandingPageContentProps) {
  return (
    <main className="min-h-screen">
      <TrackingProvider page={variant} />
      <HeroSection variant={variant} />
      <ProblemSection variant={variant} />
      <ProcessSection />
      <FounderSection />
      <ProofSection />
      <WorkProofSection />
      <GuaranteeSection />
      <PricingSection />
      <FAQSection variant={variant} />
      <FinalCTASection page={variant} />
      <FooterSection />
      <WAStickyButton page={variant} />
    </main>
  )
}