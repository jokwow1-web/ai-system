import { MapPin, Phone, Mail, Shield, Users, Award } from "lucide-react"

import { WA_NUMBER } from "@/lib/constants"

export function FooterSection() {
  return (
    <footer className="bg-[#061830] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-[#C9A961]">Atrahdis</span> Consulting
            </h3>
            <p className="text-white/70 mb-6 max-w-md leading-relaxed">
              Nicx personally review setiap case SBU sejak 2016. Audit gratis, proses transparan, garansi uang kembali 100% tertulis di kontrak.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-2">
                <Shield className="w-4 h-4 text-[#C9A961]" />
                <span className="text-sm">Sejak 2017</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-2">
                <Users className="w-4 h-4 text-[#C9A961]" />
                <span className="text-sm">NIB: 9120006530734</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-2">
                <Award className="w-4 h-4 text-[#C9A961]" />
                <span className="text-sm">LPJK Terdaftar</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Hubungi Langsung</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href={`https://wa.me/${WA_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/70 hover:text-[#C9A961] transition-colors"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>0896-9921-7161</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@atrahdis.id"
                  className="flex items-start gap-3 text-white/70 hover:text-[#C9A961] transition-colors"
                >
                  <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>info@atrahdis.id</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>
                  Jl. TB. Simatupang Kav. 41,<br />
                  Beltway Office Park,<br />
                  Ragunan, Pasar Minggu,<br />
                  Jakarta Selatan 12550<br />
                  <span className="text-sm text-white/50">NIB: 9120006530734</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Layanan</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-[#C9A961] transition-colors">
                  Pembuatan SBU Baru
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#C9A961] transition-colors">
                  Perpanjangan SBU
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#C9A961] transition-colors">
                  Pengurusan SKK
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#C9A961] transition-colors">
                  Paket Legalitas Tender
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#C9A961] transition-colors">
                  Konsultasi Gratis
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              © 2017 - {new Date().getFullYear()} Atrahdis Consulting. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/50 hover:text-white/80 text-sm transition-colors">
                Kebijakan Privasi
              </a>
              <a href="#" className="text-white/50 hover:text-white/80 text-sm transition-colors">
                Syarat & Ketentuan
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
