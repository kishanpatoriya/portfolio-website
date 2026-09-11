import React from "react";
import { Phone, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { personalInfo } from "../data";

// Exact WhatsApp SVG Icon
const WhatsAppIcon = ({ size = 18, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const rawPhone = personalInfo.phone?.replace(/[^0-9]/g, "") || "917859993086";
  const whatsappUrl = `https://wa.me/${rawPhone}?text=${encodeURIComponent(
    "Hi Kishan, I saw your portfolio and would like to connect with you!"
  )}`;

  return (
    <footer className="w-full bg-[#020617] border-t border-slate-900/90 text-slate-400 py-12 px-4 sm:px-8 md:px-12">
      <div className="w-full max-w-7xl mx-auto space-y-10">
        
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          
          {/* Left Info */}
          <div className="space-y-1.5 max-w-xl">
            <h3 className="text-2xl font-extrabold text-white tracking-tight">
              {personalInfo.name}
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Mern Stack Developer building custom web applications and scalable digital solutions.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* GitHub */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="w-11 h-11 rounded-full bg-slate-900/90 border border-slate-800/90 text-slate-300 flex items-center justify-center hover:text-white hover:border-blue-500/60 hover:bg-slate-850 hover:shadow-[0_0_12px_rgba(59,130,246,0.25)] transition-all duration-200"
            >
              <GithubIcon size={18} />
            </a>

            {/* LinkedIn */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="w-11 h-11 rounded-full bg-slate-900/90 border border-slate-800/90 text-slate-300 flex items-center justify-center hover:text-white hover:border-blue-500/60 hover:bg-slate-850 hover:shadow-[0_0_12px_rgba(59,130,246,0.25)] transition-all duration-200"
            >
              <LinkedinIcon size={18} />
            </a>

            {/* Call Button */}
            <a
              href={`tel:${personalInfo.phone}`}
              aria-label="Direct Phone Call"
              className="w-11 h-11 rounded-full bg-slate-900/90 border border-slate-800/90 text-slate-300 flex items-center justify-center hover:text-white hover:border-blue-500/60 hover:bg-slate-850 hover:shadow-[0_0_12px_rgba(59,130,246,0.25)] transition-all duration-200"
            >
              <Phone size={17} />
            </a>

            {/* WhatsApp (Image Match Icon) */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Chat on WhatsApp"
              className="w-11 h-11 rounded-full bg-slate-900/90 border border-slate-800/90 text-slate-300 flex items-center justify-center hover:text-white hover:border-blue-500/60 hover:bg-slate-850 hover:shadow-[0_0_12px_rgba(59,130,246,0.25)] transition-all duration-200"
            >
              <WhatsAppIcon size={18} />
            </a>

            {/* Email */}
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Send Direct Email"
              className="w-11 h-11 rounded-full bg-slate-900/90 border border-slate-800/90 text-slate-300 flex items-center justify-center hover:text-white hover:border-blue-500/60 hover:bg-slate-850 hover:shadow-[0_0_12px_rgba(59,130,246,0.25)] transition-all duration-200"
            >
              <Mail size={18} />
            </a>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-slate-900" />

        {/* Centered Copyright */}
        <div className="flex items-center justify-center text-center text-xs text-slate-500">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}