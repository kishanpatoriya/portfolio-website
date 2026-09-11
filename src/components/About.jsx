import React from "react";
import { Laptop, Database, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { personalInfo } from "../data";

export default function About() {
  const highlights = [
    {
      icon: <Laptop className="text-blue-400" size={24} />,
      title: "Frontend Engineering",
      desc: "Pixel-perfect, fluid web interfaces developed with React and modern Tailwind design systems.",
    },
    {
      icon: <Database className="text-blue-400" size={24} />,
      title: "Backend Development",
      desc: "Building clean RESTful APIs, JWT authentication, and database integration using Node.js, Express.js, and MongoDB.",
    },
    {
      icon: <Sparkles className="text-blue-400" size={24} />,
      title: "Product Experience",
      desc: "End-to-end web apps tailored for performance, fast render speeds, and seamless interactions.",
    },
  ];

  const valueProps = [
    "Clean, scalable, and modular component architecture",
    "Fluid animations with focus on zero layout shifts",
    "Secure REST endpoints with optimized database queries",
  ];

  const whatIBuild = [
    "Bank Management System",
    "Expense Tracker App",
    "Restaurant Management",
    "Admin Dashboard",
    "Food Menu",
    "E-Commerce",
    "Custom Web Applications",
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-8 md:px-12 relative bg-[#020617] text-white w-full overflow-hidden">
      <div className="w-full max-w-7xl mx-auto space-y-12">
        
        {/* Royal Blue Accent Heading */}
        <div className="text-center space-y-2">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight cursor-default select-none">
            <span className="text-white">About </span>
            <span className="text-blue-500">Me</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Translating complex product requirements into fast, intuitive user experiences.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch w-full">
          
          {/* Left: Bio & Focus Points */}
          <div className="lg:col-span-7 bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 backdrop-blur-sm">
            <div className="space-y-4 text-slate-200 text-base sm:text-lg leading-relaxed">
              <p>
                Hi, I'm <span className="text-white font-bold">{personalInfo.name}</span>, a MERN developer focused on engineering complete, responsive web applications.
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                I specialize in bridging the gap between polished UI aesthetics and solid backend logic—ensuring code remains clean, maintainable, and reliable under real-world usage.
              </p>
            </div>

            {/* Core Focus Points */}
            <div className="space-y-3 pt-4 border-t border-slate-800/80">
              {valueProps.map((point) => (
                <div key={point} className="flex items-center gap-3 text-sm sm:text-base text-slate-200">
                  <CheckCircle2 size={18} className="text-blue-400 shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors uppercase tracking-wider font-mono"
              >
                View Featured Work <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Right: Feature Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="p-6 bg-slate-900/30 border border-slate-800/70 rounded-2xl flex items-start gap-4 hover:border-blue-500/40 hover:bg-slate-900/50 transition-all duration-200 shadow-sm"
              >
                <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl shrink-0">
                  {item.icon}
                </div>
                <div className="space-y-1">
                  <h4 className="text-base sm:text-lg font-bold text-slate-100">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* What I Build Card */}
        <div className="bg-slate-900/40 border border-slate-800/80 rounded-3xl p-6 sm:p-10 backdrop-blur-sm space-y-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            What I Build
          </h3>
          <div className="flex flex-wrap gap-3">
            {whatIBuild.map((item) => (
              <span
                key={item}
                className="px-5 py-2.5 rounded-full bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-white hover:border-blue-500/50 hover:bg-slate-800/60 transition-all text-sm font-medium shadow-sm cursor-default"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Full-Width Metrics Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
          <div className="p-5 sm:p-6 bg-slate-900/30 border border-slate-800/80 rounded-xl text-center">
            <p className="text-3xl sm:text-4xl font-extrabold text-blue-500">5+</p>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 uppercase font-mono tracking-wider">Live Applications</p>
          </div>
          <div className="p-5 sm:p-6 bg-slate-900/30 border border-slate-800/80 rounded-xl text-center">
            <p className="text-3xl sm:text-4xl font-extrabold text-blue-500">MERN</p>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 uppercase font-mono tracking-wider">Stack Specialization</p>
          </div>
          <div className="p-5 sm:p-6 bg-slate-900/30 border border-slate-800/80 rounded-xl text-center">
            <p className="text-3xl sm:text-4xl font-extrabold text-blue-500">100%</p>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 uppercase font-mono tracking-wider">Mobile Optimized</p>
          </div>
        </div>

      </div>
    </section>
  );
}