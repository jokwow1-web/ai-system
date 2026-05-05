"use client"

import { MessageCircle } from "lucide-react"

import { buildWALink } from "@/lib/wa-link"
import type { LPPage } from "@/lib/wa-link"

interface WAStickyButtonProps {
  page?: LPPage
}

export function WAStickyButton({ page = "sbu" }: WAStickyButtonProps) {
  const waLink = buildWALink({ page, direct: true })

  return (
    <>
      {/* Mobile - Bottom Right */}
      <div className="fixed bottom-4 right-4 z-50 md:hidden">
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold py-3 px-6 rounded-full shadow-lg shadow-[#25D366]/30 transition-all hover:scale-105"
        >
          <MessageCircle className="w-5 h-5" />
          <span>Chat WhatsApp</span>
        </a>
      </div>

      {/* Desktop - Bottom Right */}
      <div className="fixed bottom-6 right-6 z-50 hidden md:block">
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold py-4 px-6 rounded-2xl shadow-lg shadow-[#25D366]/30 transition-all hover:scale-105"
        >
          <MessageCircle className="w-6 h-6" />
          <div className="flex flex-col">
            <span className="text-sm font-normal opacity-80">Butuh bantuan?</span>
            <span>Chat WhatsApp</span>
          </div>
        </a>
      </div>
    </>
  )
}