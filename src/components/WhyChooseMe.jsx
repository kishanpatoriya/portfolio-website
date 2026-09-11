import React from "react";
import { motion } from "framer-motion";

// Custom Circle Check SVG Icon
const CheckCircleIcon = () => (
  <svg
    className="w-5 h-5 text-cyan-400 shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export default function WhyChooseMe() {
  const points = [
    "Clean, scalable, and maintainable code architecture.",
    "Reliable delivery with strict adherence to deadlines.",
    "Fast, transparent, and proactive communication.",
    "Custom solutions tailored exactly to your business logic."
  ];

  return (
    <section 
      id="why-choose-me" 
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-8 md:px-12 relative bg-[#020617] text-white w-full overflow-hidden"
    >
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      {/* Navbar ke exact same container width (max-w-7xl) */}
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full relative bg-[#0d111c]/90 border border-slate-800/80 rounded-[2.2rem] p-8 sm:p-12 lg:p-16 backdrop-blur-md shadow-2xl overflow-hidden"
        >
          {/* Ambient Corner Highlight */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Column: Heading & Text */}
            <div className="lg:col-span-5 space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Why Choose Me?
              </h2>
              <p className="text-slate-400 text-sm sm:text-base lg:text-lg leading-relaxed max-w-md">
                I don't just write code; I solve business problems. When you hire me, you get a technical partner invested in your project's success.
              </p>
            </div>

            {/* Right Column: Stacked Pills */}
            <div className="lg:col-span-7 flex flex-col gap-3.5 sm:gap-4 w-full">
              {points.map((point, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="flex items-center gap-3.5 sm:gap-4 px-5 py-4 sm:py-5 rounded-2xl bg-[#131926]/90 border border-slate-800/70 hover:border-slate-700 hover:bg-[#161e2e] transition-all duration-200"
                >
                  <CheckCircleIcon />
                  <span className="text-xs sm:text-sm md:text-[15px] font-medium text-slate-200 tracking-wide">
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}