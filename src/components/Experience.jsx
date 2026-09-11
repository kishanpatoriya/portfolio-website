import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, Building2, Clock } from "lucide-react";
import { experience } from "../data";

// Helper function to calculate duration dynamically from period string
function calculateDuration(periodStr) {
  if (!periodStr) return "";

  const monthMap = {
    jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
    jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11
  };

  try {
    const [startStr, endStr] = periodStr.split("-").map((s) => s.trim());
    if (!startStr) return "";

    const [startMonthStr, startYearStr] = startStr.split(" ");
    const startMonth = monthMap[startMonthStr.toLowerCase().slice(0, 3)];
    const startYear = parseInt(startYearStr, 10);
    const startDate = new Date(startYear, startMonth, 1);

    let endDate;
    if (!endStr || endStr.toLowerCase() === "present") {
      endDate = new Date();
    } else {
      const [endMonthStr, endYearStr] = endStr.split(" ");
      const endMonth = monthMap[endMonthStr.toLowerCase().slice(0, 3)];
      const endYear = parseInt(endYearStr, 10);
      endDate = new Date(endYear, endMonth + 1, 0); // End of that month
    }

    let months = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth()) + 1;
    if (months <= 0) months = 1;

    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    if (years === 0) {
      return `${months} ${months === 1 ? "mo" : "mos"}`;
    }
    if (remainingMonths === 0) {
      return `${years} ${years === 1 ? "yr" : "yrs"}`;
    }
    return `${years} ${years === 1 ? "yr" : "yrs"} ${remainingMonths} ${remainingMonths === 1 ? "mo" : "mos"}`;
  } catch (error) {
    return "";
  }
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 relative bg-[#020617] text-white w-full overflow-hidden"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[500px] lg:w-[650px] h-[300px] lg:h-[350px] bg-blue-600/10 blur-[100px] lg:blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="w-full max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-2 sm:space-y-3 px-2">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight select-none cursor-default"
          >
            <span className="text-white">Career </span>
            <span className="text-blue-500">Journey</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto"
          >
            Professional milestones, engineering contributions, and hands-on production roles.
          </motion.p>
        </div>

        {/* Responsive Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 sm:left-6 lg:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-blue-500 via-blue-500/40 to-transparent pointer-events-none" />

          <div className="space-y-8 sm:space-y-12 lg:space-y-14">
            {experience.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const duration = calculateDuration(item.period);

              return (
                <motion.div
                  key={`${item.company}-${idx}`}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.1 }}
                  className={`relative flex flex-col lg:flex-row items-start ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 sm:left-6 lg:left-1/2 top-5 sm:top-6 -translate-x-1/2 z-20 flex items-center justify-center">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-950 border-2 border-blue-500 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.6)]">
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-blue-400 animate-pulse" />
                    </div>
                  </div>

                  {/* Experience Card */}
                  <div
                    className={`w-[calc(100%-2.75rem)] sm:w-[calc(100%-4rem)] ml-11 sm:ml-16 lg:ml-0 lg:w-[calc(50%-2.5rem)] ${
                      isEven ? "lg:mr-auto" : "lg:ml-auto"
                    }`}
                  >
                    <div className="group bg-slate-900/40 border border-slate-800/80 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-7 backdrop-blur-md hover:border-blue-500/50 hover:bg-slate-900/70 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
                      
                      {/* Period Badge & Calculated Duration */}
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-mono font-medium text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 sm:px-3 py-1 rounded-full w-fit">
                          <Calendar size={12} className="shrink-0" />
                          <span>{item.period}</span>
                        </div>

                        {duration && (
                          <div className="flex items-center gap-1 text-[11px] sm:text-xs font-mono font-medium text-slate-300 bg-slate-800/70 border border-slate-700/80 px-2.5 py-1 rounded-full">
                            <Clock size={11} className="text-blue-400 shrink-0" />
                            <span>{duration}</span>
                          </div>
                        )}
                      </div>

                      {/* Role & Company */}
                      <div className="space-y-1.5">
                        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white group-hover:text-blue-400 transition-colors flex items-center gap-2">
                          <Briefcase size={16} className="text-blue-500 shrink-0" />
                          <span className="leading-snug">{item.role}</span>
                        </h3>

                        <div className="flex items-center gap-1.5 text-slate-400 text-xs sm:text-sm font-medium">
                          <Building2 size={14} className="text-slate-500 shrink-0" />
                          <span>{item.company}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="mt-3.5 sm:mt-4 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-800/80 pt-3.5 sm:pt-4">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}