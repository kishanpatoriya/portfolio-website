import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { ReactIcon, NodeIcon, MongoIcon, ExpressIcon, TailwindIcon } from "./TechIcons";
import { personalInfo } from "../data";

export default function Hero() {
  const stack = [
    { name: "React.js", icon: <ReactIcon size={20} /> },
    { name: "Tailwind CSS", icon: <TailwindIcon size={20} /> },
    { name: "Node.js", icon: <NodeIcon size={20} /> },
    { name: "Express.js", icon: <ExpressIcon /> },
    { name: "MongoDB", icon: <MongoIcon size={20} /> },
  ];

  const repeatedStack = [...stack, ...stack, ...stack];

  const phrases = [
    "Responsive Web Designs",
    "Modern Web Applications",
    "Clean & Interactive UI",
    "Pixel-Perfect Experiences",
    "Dynamic Full-Stack Apps",
  ];

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = phrases[phraseIndex];
    const typingSpeed = isDeleting ? 35 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIndex]);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center w-full px-4 sm:px-8 md:px-12 pt-28 pb-16 overflow-hidden">
      {/* Royal Blue Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-blue-600/15 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="w-full max-w-7xl mx-auto text-center space-y-8">
        
        {/* Status Pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs text-slate-300 backdrop-blur-xl shadow-lg"
        >
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
          <span>Available for Remote Opportunities & Web Projects</span>
        </motion.div>

        {/* Hero Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4 max-w-4xl mx-auto"
        >
          <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.2] cursor-default">
            Designing & Building <br />
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-sky-400">
              {currentText}
            </span>
            <span className="text-blue-400 font-light animate-pulse ml-1">|</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Hi, I'm <span className="text-slate-100 font-semibold">{personalInfo.name}</span>. I build clean, mobile-responsive web interfaces and modern full-stack web applications with interactive user experiences.
          </p>
        </motion.div>

        {/* Animated Marquee */}
        <div className="relative w-full max-w-5xl mx-auto overflow-hidden py-3 bg-slate-900/30 border border-slate-800/80 rounded-2xl backdrop-blur-md shadow-xl">
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-20 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-20 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-4 w-max"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              ease: "linear",
              duration: 18,
              repeat: Infinity,
            }}
          >
            {repeatedStack.map((item, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-xl bg-slate-950/90 border border-slate-800 text-xs sm:text-sm font-mono font-medium text-slate-200 hover:border-blue-500/50 hover:text-blue-300 hover:bg-slate-900 transition-colors shadow-md cursor-default whitespace-nowrap"
              >
                <span className="flex items-center justify-center">
                  {item.icon}
                </span>
                <span className="tracking-wide">{item.name}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-2"
        >
          <a
            href="#projects"
            className="flex items-center gap-2 px-7 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-blue-600/25 transition-all active:scale-95"
          >
            Explore Projects <ArrowUpRight size={16} />
          </a>
          <a
            href="#contact"
            className="px-7 py-3 bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-slate-200 font-semibold text-sm rounded-xl transition-all active:scale-95"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center justify-center gap-4 pt-2 text-slate-400"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl hover:text-blue-400 hover:border-blue-500/40 transition-all"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl hover:text-blue-400 hover:border-blue-500/40 transition-all"
          >
            <LinkedinIcon size={18} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}