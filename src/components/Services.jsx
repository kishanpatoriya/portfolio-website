import React from "react";
import { motion } from "framer-motion";
import { Code2, Globe, Database, Smartphone, Wrench, ArrowUpRight } from "lucide-react";

export default function Services() {
  const serviceList = [
    {
      icon: <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />,
      title: "Full-Stack Web Development",
      description:
        "Building scalable, secure web apps from scratch using React, Node.js, Express, and MongoDB with modern REST API architectures."
    },
    {
      icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />,
      title: "WordPress & CMS Solutions",
      description:
        "Custom WordPress design, Elementor layout configuration, plugin setup, speed optimization, and responsive business pages."
    },
    {
      icon: <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />,
      title: "Frontend UI/UX & Responsive Web",
      description:
        "Converting Figma/XD designs into clean Tailwind CSS and React code with pixel-perfect responsive behavior across mobile and desktop."
    },
    {
      icon: <Database className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />,
      title: "API Design & Database Modeling",
      description:
        "Structuring MongoDB schemas, MySQL relational databases, secure JWT authentication workflows, and robust server-side routing."
    },
    {
      icon: <Wrench className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />,
      title: "Website Maintenance & Bug Fixing",
      description:
        "Code refactoring, responsive design bug fixes, performance boosting, and deployment assistance on cPanel or cloud hosts."
    }
  ];

  return (
    <section
      id="services"
      className="py-20 sm:py-24 px-4 sm:px-8 md:px-12 relative bg-[#020617] text-white w-full overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="w-full max-w-7xl mx-auto space-y-14 sm:space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight select-none cursor-default"
          >
            <span className="text-white">What I </span>
            <span className="text-blue-500">Offer</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto"
          >
            End-to-end web engineering, modern client portals, and custom web applications.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceList.map((srv, idx) => (
            <motion.div
              key={srv.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="group relative bg-slate-900/40 border border-slate-800/80 rounded-3xl p-5 sm:p-7 flex flex-col justify-between hover:border-blue-500/50 hover:bg-slate-900/70 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="space-y-3.5">
                {/* Icon aur Title side-by-side */}
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0 group-hover:border-blue-500/40 group-hover:scale-105 transition-all">
                    {srv.icon}
                  </div>

                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white group-hover:text-blue-400 transition-colors leading-tight">
                    {srv.title}
                  </h3>
                </div>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {srv.description}
                </p>
              </div>

              <div className="pt-4 sm:pt-5 mt-4 border-t border-slate-800/60">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 group-hover:text-blue-300 transition-colors"
                >
                  Discuss Project <ArrowUpRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}