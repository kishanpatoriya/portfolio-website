import React from "react";
import { Award, ArrowUpRight } from "lucide-react";

// Microsoft 4-Color Squares Logo
const MicrosoftLogo = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 21 21" fill="none">
    <rect x="1" y="1" width="9" height="9" fill="#F25022" />
    <rect x="11" y="1" width="9" height="9" fill="#7FBA00" />
    <rect x="1" y="11" width="9" height="9" fill="#00A4EF" />
    <rect x="11" y="11" width="9" height="9" fill="#FFB900" />
  </svg>
);

// Official TCS Brand Lockup
const TCSLogo = () => (
  <div className="w-full h-full bg-white rounded-lg flex flex-col items-center justify-center p-1 select-none">
    <div className="flex flex-col items-center leading-[0.8] tracking-tight">
      <span className="text-[7.5px] font-black tracking-[0.14em] text-black">
        TATA
      </span>
      <span className="text-[4.8px] font-extrabold tracking-tight text-black mt-[1.5px]">
        CONSULTANCY
      </span>
      <span className="text-[5px] font-extrabold tracking-tight text-black mt-[0.5px]">
        SERVICES
      </span>
    </div>
    <div className="text-[11px] font-black text-black tracking-[-0.08em] leading-none mt-1 font-sans">
      tcs
    </div>
  </div>
);

// Deloitte Signature Wordmark with Green Dot
const DeloitteLogo = () => (
  <div className="flex items-center text-white font-black text-sm tracking-tight select-none">
    <span>D</span>
    <span className="w-1.5 h-1.5 rounded-full bg-[#86BC25] ml-0.5 mt-2" />
  </div>
);

export default function Certifications() {
  const certs = [
    {
      title: "Data Management Workshop",
      issuer: "Microsoft",
      tag: "Data & Architecture",
      logo: <MicrosoftLogo />,
      link: "https://www.linkedin.com/in/kishan-patoriya/overlay/Certifications/1475832431/treasury/?profileId=ACoAAFqLmOABjivKRKZit0LRwRFbhtcBVpHEljA"
    },
    {
      title: "CyberSecurity Forensic Analyst (CSFA)",
      issuer: "Tata Consultancy Services (TCS)",
      tag: "Security Standards",
      logo: <TCSLogo />,
      link: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_68c65e1681edf82e82b9df33_1760683505345_completion_certificate.pdf"
    },
    {
      title: "Cyber Job Simulation",
      issuer: "Deloitte Australia (Forage)",
      tag: "Industry Simulation",
      logo: <DeloitteLogo />,
      link: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/E9pA6qsdbeyEkp3ti_9PBTqmSxAf6zZTseP_68c65e1681edf82e82b9df33_1784990641082_completion_certificate.pdf"
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-8 md:px-12 bg-[#020617] text-white w-full">
      <div className="w-full max-w-7xl mx-auto space-y-6">
        {/* Section Label */}
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-slate-400 uppercase">
          <Award size={14} className="text-blue-500" />
          <span>Verified Credentials & Corporate Workshops</span>
        </div>

        {/* Clickable Brand Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {certs.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${item.title} certificate`}
              className="group block bg-slate-900/30 border border-slate-800/80 rounded-2xl p-5 hover:border-blue-500/50 hover:bg-slate-900/70 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3.5 min-w-0">
                  {/* Brand Logo */}
                  <div className="w-11 h-11 rounded-xl bg-slate-950 border border-slate-800/90 flex items-center justify-center shrink-0 group-hover:border-slate-700 transition-colors overflow-hidden">
                    {item.logo}
                  </div>

                  {/* Title & Tag */}
                  <div className="truncate">
                    <h4 className="text-sm font-bold text-slate-100 group-hover:text-blue-400 transition-colors leading-snug truncate">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5 truncate">
                      {item.issuer} • <span className="text-blue-400/80">{item.tag}</span>
                    </p>
                  </div>
                </div>

                {/* External Indicator Arrow */}
                <div className="p-1 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0">
                  <ArrowUpRight size={17} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}