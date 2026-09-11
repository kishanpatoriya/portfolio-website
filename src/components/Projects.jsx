import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink, X, Loader2, CheckCircle2 } from "lucide-react";
import { projects } from "../data";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setStatus("idle");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleCloseModal = (e) => {
    if (e) e.stopPropagation();
    setSelectedProject(null);
    setStatus("idle");
  };

  const handleSendRequest = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "e10f3005-e5d2-47da-830c-474e225b12c4",
          subject: `🚀 Demo Request: [${selectedProject.title}] from ${formData.name}`,
          from_name: `${formData.name} (Demo Request)`,
          replyto: formData.email,
          "Requested Project": selectedProject.title,
          "Client Name": formData.name,
          "Client Email": formData.email,
          "Client Requirement / Note": formData.message,
          "Source": "Project Showcase Modal",
          "Submission Time": new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setTimeout(() => {
          setSelectedProject(null);
          setStatus("idle");
        }, 2000);
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-8 md:px-12 relative bg-[#020617] text-white w-full overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="w-full max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-2">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight select-none cursor-default"
          >
            <span className="text-white">Featured </span>
            <span className="text-blue-500">Works</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto"
          >
            Production web applications, management portals, and client platforms engineered with modern web stacks.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj, idx) => {
            const isWordPress = 
              proj.tech?.some((t) => t.toLowerCase().includes("wordpress")) || 
              proj.title?.toLowerCase().includes("home services");

            return (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="group bg-slate-900/40 border border-slate-800/80 rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm shadow-xl"
              >
                <div className="space-y-5">
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-inner">
                    <div className="absolute top-0 left-0 right-0 z-20 h-8 px-4 bg-slate-950/90 border-b border-slate-800/80 backdrop-blur-md flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                      </div>
                      <span className="text-[11px] font-mono text-slate-400 truncate max-w-[180px]">
                        {proj.title.toLowerCase().replace(/\s+/g, "-")}.live
                      </span>
                    </div>

                    <img
                      src={proj.image || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"}
                      alt={proj.title}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80";
                      }}
                      className="w-full h-full object-cover pt-8 transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 pt-8 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                  </div>

                  <div className="space-y-2 pt-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
                      {proj.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1 bg-slate-950 border border-slate-800 text-blue-400 rounded-lg font-mono font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons Action Area */}
                <div className="pt-6 mt-6 border-t border-slate-800/80">
                  {isWordPress ? (
                    /* WordPress: Only Request a Demo Button */
                    <button
                      type="button"
                      onClick={() => handleOpenModal(proj)}
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-md shadow-blue-600/20 active:scale-95 cursor-pointer"
                    >
                      Request a Demo <ArrowUpRight size={15} />
                    </button>
                  ) : (
                    /* Non-WordPress: Live Preview + Request Demo Buttons Side-by-Side */
                    <div className="grid grid-cols-2 gap-3">
                      <a
                        href={proj.live || proj.demo || "#"}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-md shadow-blue-600/20 active:scale-95 text-center cursor-pointer"
                      >
                        Live Preview <ExternalLink size={14} />
                      </a>

                      <button
                        type="button"
                        onClick={() => handleOpenModal(proj)}
                        className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200 font-semibold text-xs sm:text-sm transition-all active:scale-95 cursor-pointer text-center"
                      >
                        Request Demo <ArrowUpRight size={15} />
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="absolute inset-0 bg-[#020617]/85 backdrop-blur-md cursor-pointer"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md bg-[#0b1329] border border-slate-800/90 rounded-[2rem] p-7 sm:p-9 shadow-2xl shadow-blue-950/50 z-[70] space-y-6 overflow-hidden"
            >
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-32 bg-blue-600/20 blur-3xl pointer-events-none" />

              <button
                type="button"
                onClick={handleCloseModal}
                className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-full bg-slate-900/60 border border-slate-800 hover:bg-slate-800 transition-all cursor-pointer z-20"
                aria-label="Close dialog"
              >
                <X size={18} />
              </button>

              <div className="space-y-1.5 pr-8 relative z-10">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Request Demo
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  Requesting demo for:{" "}
                  <span className="text-blue-400 font-semibold">
                    {selectedProject.title}
                  </span>
                </p>
              </div>

              <form onSubmit={handleSendRequest} className="space-y-4 relative z-10">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3.5 bg-slate-950/80 border border-slate-800 rounded-2xl text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3.5 bg-slate-950/80 border border-slate-800 rounded-2xl text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all"
                  />
                </div>

                <div>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your interest in this project"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 bg-slate-950/80 border border-slate-800 rounded-2xl text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending" || status === "success"}
                  className="w-full py-3.5 sm:py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm sm:text-base transition-all shadow-lg shadow-blue-600/30 active:scale-[0.98] disabled:opacity-75 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 size={18} className="animate-spin" /> Sending Request...
                    </>
                  ) : status === "success" ? (
                    <>
                      <CheckCircle2 size={18} className="text-emerald-300" /> Request Sent!
                    </>
                  ) : (
                    "Send Request"
                  )}
                </button>

                {status === "error" && (
                  <p className="text-xs text-rose-400 text-center pt-1">
                    Failed to send request. Please email directly at kishanpatoriya2007@gmail.com
                  </p>
                )}
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}