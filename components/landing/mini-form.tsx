"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { MessageCircle } from "lucide-react"

import type { LPPage } from "@/lib/wa-link"
import { buildWALink } from "@/lib/wa-link"

const KUALIFIKASI_OPTIONS = [
  { value: "K", label: "Kecil (K)" },
  { value: "M", label: "Menengah (M)" },
  { value: "B", label: "Besar (B)" },
]

const SUB_KLASIFIKASI_OPTIONS = [
  { value: "BG001", label: "BG001 - Jasa Pelaksana Konstruksi Gedung" },
  { value: "BG002", label: "BG002 - Jasa Pelaksana Konstruksi Bangunan Industri" },
  { value: "BG003", label: "BG003 - Jasa Pelaksana Konstruksi Bangunan Perumahan" },
  { value: "SI001", label: "SI001 - Jasa Pelaksana Konstruksi Jalan" },
  { value: "SI002", label: "SI002 - Jasa Pelaksana Konstruksi Jembatan" },
  { value: "SI003", label: "SI003 - Jasa Pelaksana Konstruksi Saluran Air" },
  { value: "TE001", label: "TE001 - Jasa Pelaksana Konstruksi Mekanikal" },
  { value: "TE002", label: "TE002 - Jasa Pelaksana Konstruksi Elektrikal" },
  { value: "TE003", label: "TE003 - Jasa Pelaksana Konstruksi Tata Lingkungan" },
  { value: "lainnya", label: "Lainnya / Belum Tahu" },
]

const TIMELINE_OPTIONS = [
  { value: "1minggu", label: "1 Minggu (Urgent)" },
  { value: "2minggu", label: "2 Minggu" },
  { value: "1bulan", label: "1 Bulan" },
  { value: "fleksibel", label: "Fleksibel" },
]

interface MiniFormProps {
  variant?: "hero" | "cta"
  page?: LPPage
}

export function MiniForm({ variant = "hero", page = "sbu" }: MiniFormProps) {
  const [kualifikasi, setKualifikasi] = useState("")
  const [subKlasifikasi, setSubKlasifikasi] = useState("")
  const [timeline, setTimeline] = useState("")

  const generateWhatsAppLink = () => {
    const kualifikasiLabel = KUALIFIKASI_OPTIONS.find(k => k.value === kualifikasi)?.label || kualifikasi || "Belum dipilih"
    const subKlasifikasiLabel = SUB_KLASIFIKASI_OPTIONS.find(s => s.value === subKlasifikasi)?.label || subKlasifikasi || "Belum dipilih"
    const timelineLabel = TIMELINE_OPTIONS.find(t => t.value === timeline)?.label || timeline || "Belum dipilih"

    return buildWALink({
      page,
      formData: {
        kualifikasi: kualifikasiLabel,
        subKlasifikasi: subKlasifikasiLabel,
        timeline: timelineLabel,
      },
    })
  }

  const handleSubmit = () => {
    const link = generateWhatsAppLink()
    window.open(link, "_blank")
  }

  return (
    <div className={`w-full max-w-md ${variant === "hero" ? "bg-white p-6 rounded-lg shadow-xl" : "bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20"}`}>
      <h3 className={`text-lg font-semibold mb-4 ${variant === "hero" ? "text-[#0B2545]" : "text-white"}`}>
        Konsultasi Gratis
      </h3>

      <div className="flex flex-col gap-4">
        <Select value={kualifikasi} onValueChange={setKualifikasi}>
          <SelectTrigger className={variant === "hero" ? "bg-white border-[#E2E8F0]" : "bg-white/10 border-white/20 text-white"}>
            <SelectValue placeholder="Pilih Kualifikasi SBU" />
          </SelectTrigger>
          <SelectContent>
            {KUALIFIKASI_OPTIONS.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={subKlasifikasi} onValueChange={setSubKlasifikasi}>
          <SelectTrigger className={variant === "hero" ? "bg-white border-[#E2E8F0]" : "bg-white/10 border-white/20 text-white"}>
            <SelectValue placeholder="Pilih Sub-klasifikasi" />
          </SelectTrigger>
          <SelectContent>
            {SUB_KLASIFIKASI_OPTIONS.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={timeline} onValueChange={setTimeline}>
          <SelectTrigger className={variant === "hero" ? "bg-white border-[#E2E8F0]" : "bg-white/10 border-white/20 text-white"}>
            <SelectValue placeholder="Timeline Kebutuhan" />
          </SelectTrigger>
          <SelectContent>
            {TIMELINE_OPTIONS.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button
          onClick={handleSubmit}
          className="w-full bg-[#C9A961] hover:bg-[#A88B45] text-[#0B2545] font-semibold py-6 text-base"
        >
          <MessageCircle className="mr-2 h-5 w-5" />
          Konsultasi via WhatsApp
        </Button>
      </div>

      <p className={`text-xs mt-3 text-center ${variant === "hero" ? "text-[#4A5568]" : "text-white/70"}`}>
        Nicx merespons dalam 15 menit (jam kerja)
      </p>
    </div>
  )
}