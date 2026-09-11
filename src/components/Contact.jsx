import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, Loader2, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { personalInfo } from "../data";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
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
          subject: `💼 New Client Inquiry: ${formData.name} reached out via Portfolio`,
          from_name: `${formData.name} (Portfolio Inquiry)`,
          replyto: formData.email,
          "Client Name": formData.name,
          "Client Email": formData.email,
          "Inquiry Message": formData.message,
          "Source": "Contact Form (#contact)",
          "Submission Time": new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-24 px-4 sm:px-8 md:px-12 relative bg-[#020617] text-white w-full overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] h-[350px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="w-full max-w-7xl mx-auto space-y-12 sm:space-y-16">
        <div className="text-center space-y-2">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight select-none cursor-default"
          >
            <span className="text-white">Get In </span>
            <span className="text-blue-500">Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto"
          >
            Have a project in mind, an opportunity, or want to connect? Send a direct note.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto items-start">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2 p-6 sm:p-8 bg-slate-900/40 border border-slate-800/80 rounded-3xl backdrop-blur-md shadow-xl space-y-5"
          >
            {status === "success" && (
              <div className="p-3.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-xl text-xs font-medium flex items-center gap-2">
                <CheckCircle2 size={16} /> Message sent successfully! I will get back to you shortly.
              </div>
            )}

            {status === "error" && (
              <div className="p-3.5 bg-rose-500/10 border border-rose-500/30 text-rose-400 rounded-xl text-xs font-medium">
                Failed to send message. Please reach out directly via email.
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">Message</label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your project or inquiry..."
                className="w-full px-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-xl transition-all shadow-md shadow-blue-600/20 active:scale-95 disabled:opacity-70 cursor-pointer"
            >
              {status === "sending" ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Sending...
                </>
              ) : (
                <>
                  Send Message <Send size={15} />
                </>
              )}
            </button>
          </motion.form>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1 space-y-6 pt-2 lg:pt-0"
          >
            <div className="space-y-2 sm:space-y-3">
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Let's discuss your next build
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Open for full-time frontend/full-stack developer opportunities, contract work, and technical collaborations.
              </p>
            </div>

            <div className="space-y-3.5">
              <div className="flex items-center gap-4 p-4 bg-slate-900/40 border border-slate-800/80 rounded-2xl backdrop-blur-sm hover:border-blue-500/40 transition-colors">
                <div className="p-3 bg-blue-600/10 text-blue-400 rounded-xl border border-blue-500/20 shrink-0">
                  <Mail size={20} />
                </div>
                <div className="truncate">
                  <p className="text-xs text-slate-400">Email Me</p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-blue-400 transition-colors break-all"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-slate-900/40 border border-slate-800/80 rounded-2xl backdrop-blur-sm hover:border-blue-500/40 transition-colors">
                <div className="p-3 bg-blue-600/10 text-blue-400 rounded-xl border border-blue-500/20 shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Call Me</p>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-blue-400 transition-colors font-mono"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-11 h-11 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 flex items-center justify-center hover:text-white hover:border-blue-500/50 hover:bg-slate-850 transition-all"
              >
                <GithubIcon size={19} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 flex items-center justify-center hover:text-white hover:border-blue-500/50 hover:bg-slate-850 transition-all"
              >
                <LinkedinIcon size={19} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}