import React from "react";
import { motion } from "framer-motion";

// Clean Vector Tech Icons
const SkillIcon = ({ name }) => {
  const normalized = name.toLowerCase();

  if (normalized.includes("react")) {
    return (
      <svg className="w-8 h-8 text-[#087ea4]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1.6" fill="currentColor" />
      </svg>
    );
  }
  if (normalized.includes("javascript") || normalized === "js") {
    return (
      <span className="w-8 h-8 rounded bg-[#F7DF1E] text-slate-950 font-black text-xs flex items-center justify-center font-mono shadow-sm">
        JS
      </span>
    );
  }
  if (normalized.includes("node")) {
    return (
      <svg className="w-8 h-8 text-[#539E43]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l9 5.2v10.4l-9 5.2-9-5.2V7.2L12 2zm0 2.3L4.8 8.5v7l7.2 4.2 7.2-4.2v-7L12 4.3z" />
      </svg>
    );
  }
  if (normalized.includes("express")) {
    return (
      <svg className="w-8 h-8 text-slate-100" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.7 13.8a6.3 6.3 0 0 1-4.7 2 6.4 6.4 0 0 1-6.4-6.4 6.4 6.4 0 0 1 6.4-6.4 6.3 6.3 0 0 1 4.7 2l-1.3 1.3a4.5 4.5 0 0 0-3.4-1.4 4.5 4.5 0 0 0-4.5 4.5 4.5 4.5 0 0 0 4.5 4.5 4.5 4.5 0 0 0 3.4-1.4z" />
      </svg>
    );
  }
  if (normalized.includes("mongo")) {
    return (
      <svg className="w-8 h-8 text-[#13AA52]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C11.5 4 8 8.5 8 13.5c0 3.2 2.1 5.9 5 6.4v2.1c.3 0 .7 0 1-.1v-2c2.9-.5 5-3.2 5-6.4 0-5-3.5-9.5-4-11.5h-3z" />
      </svg>
    );
  }
  if (normalized.includes("mysql")) {
    return (
      <span className="w-8 h-8 rounded bg-[#00758F] text-white font-black text-xs flex items-center justify-center font-mono shadow-sm">
        SQL
      </span>
    );
  }
  if (normalized.includes("jwt")) {
    return (
      <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-pink-500 to-purple-600 text-white font-black text-[10px] flex items-center justify-center font-mono shadow-sm">
        JWT
      </span>
    );
  }
  if (normalized.includes("php")) {
    return (
      <span className="w-8 h-8 rounded-xl bg-[#777BB4] text-white font-bold text-xs flex items-center justify-center font-mono shadow-sm">
        PHP
      </span>
    );
  }
  if (normalized.includes("wordpress")) {
    return (
      <svg className="w-8 h-8 text-[#21759B]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.7-1.5l3.9-11.3 2.8 8.2.8-2.6-1.6-4.6 2.6-.1a8.2 8.2 0 0 1-3.8 11.9zm6.4-5.3l-2.4-7a5.5 5.5 0 0 0 .5-.1 8.2 8.2 0 0 1 1.9 7.1zM8 8.8l-2.8 8.1A8.2 8.2 0 0 1 3.8 12c0-2 .7-3.8 1.9-5.3l2.3 2.1zm2.3-4.5A8.2 8.2 0 0 1 12 3.8a8.2 8.2 0 0 1 5.2 1.9l-2.3 6.6-2.6-7.5-.1-.1a5.6 5.6 0 0 0-1.9-.4z" />
      </svg>
    );
  }
  if (normalized.includes("hostinger")) {
    return (
      <span className="w-8 h-8 rounded-full bg-[#673AB7] text-white font-black text-sm flex items-center justify-center font-mono shadow-sm">
        H
      </span>
    );
  }
  if (normalized.includes("tailwind")) {
    return (
      <svg className="w-8 h-8 text-[#06B6D4]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 6c-2.4 0-3.9 1.2-4.5 3.6 1-.8 2-1.1 3-.7.6.2 1 .7 1.5 1.3 1.4 1.5 3 3.3 6 3.3 2.4 0 3.9-1.2 4.5-3.6-1 .8-2 1.1-3 .7-.6-.2-1-.7-1.5-1.3-1.4-1.5-3-3.3-6-3.3zm-6 6c-2.4 0-3.9 1.2-4.5 3.6 1-.8 2-1.1 3-.7.6.2 1 .7 1.5 1.3 1.4 1.5 3 3.3 6 3.3 2.4 0 3.9-1.2 4.5-3.6-1 .8-2 1.1-3 .7-.6-.2-1-.7-1.5-1.3-1.4-1.5-3-3.3-6-3.3z" />
      </svg>
    );
  }
  if (normalized.includes("html")) {
    return (
      <span className="w-8 h-8 rounded bg-[#E34F26] text-white font-bold text-xs flex items-center justify-center font-mono shadow-sm">
        H5
      </span>
    );
  }
  if (normalized.includes("css")) {
    return (
      <span className="w-8 h-8 rounded bg-[#1572B6] text-white font-bold text-xs flex items-center justify-center font-mono shadow-sm">
        C3
      </span>
    );
  }
  if (normalized.includes("git")) {
    return (
      <svg className="w-8 h-8 text-slate-100" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    );
  }

  return <div className="w-4 h-4 rounded-full bg-blue-500 shadow-sm" />;
};

export default function Skills() {
  const skillsList = [
    { name: "React.js", category: "Frontend" },
    { name: "JavaScript", category: "Language" },
    { name: "Node.js", category: "Runtime" },
    { name: "Express.js", category: "Backend" },
    { name: "MongoDB", category: "Database" },
    { name: "MySQL", category: "Database" },
    { name: "PHP", category: "Backend" },
    { name: "WordPress", category: "CMS" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "HTML5", category: "Markup" },
    { name: "CSS3", category: "Styling" },
    { name: "Git & GitHub", category: "Version Control" },
    { name: "JWT Auth", category: "Security" },
    { name: "Hostinger", category: "Hosting" },
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-8 md:px-12 relative bg-[#020617] text-white w-full overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="w-full max-w-7xl mx-auto space-y-14">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight select-none cursor-default"
          >
            <span className="text-white">Technical </span>
            <span className="text-blue-500">Skills</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto"
          >
            Core technologies, backend environments, and deployment tools I work with.
          </motion.p>
        </div>

        {/* Clean Responsive Card Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {skillsList.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.03,
                ease: "easeOut",
              }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative bg-slate-900/40 border border-slate-800/80 rounded-2xl p-5 flex flex-col items-center justify-center gap-3 backdrop-blur-sm hover:border-blue-500/50 hover:bg-slate-900/80 hover:shadow-lg hover:shadow-blue-500/10 transition-all select-none cursor-default"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800/90 flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                <SkillIcon name={skill.name} />
              </div>

              {/* Text Info */}
              <div className="text-center">
                <h4 className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors">
                  {skill.name}
                </h4>
                <span className="text-[11px] font-mono text-slate-400 tracking-wide">
                  {skill.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}