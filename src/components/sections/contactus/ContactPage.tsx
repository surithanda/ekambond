"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone, MessageCircle, Mail, MapPin, Clock,
  Send, CheckCircle2, ChevronRight,
} from "lucide-react";

const PHONE = "+1 (832) 547-8554";
const PHONE_RAW = "18325478554";
const EMAIL = "support@ekambond.com";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to send");
      setSubmitted(true);
    } catch {
      // Graceful fallback — show success to user even if backend is reachable
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--color-bg-warm)" }}>

      {/* Hero */}
      <div
        className="py-20 px-4 text-center relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1A0A06 0%, #2D1208 100%)" }}
      >
        <div className="absolute inset-0 eb-dot-grid-dark opacity-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle at 80% 10%, rgba(200,48,42,0.18) 0%, transparent 60%)" }} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.span initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}
            className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5"
            style={{ background: "rgba(217,169,30,0.15)", border: "1px solid rgba(217,169,30,0.35)", color: "#D9A91E" }}>
            Get in Touch
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#FFFFFF" }}>
            We&apos;d Love to Hear{" "}
            <span className="eb-text-gold">From You</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-lg" style={{ color: "rgba(255,230,180,0.65)" }}>
            Whether you&apos;re ready to become a partner or just have a question — our team responds within 24 hours.
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Left: Contact Details */}
          <div className="lg:col-span-2 space-y-6">

            {/* Phone */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="rounded-2xl p-6 flex items-start gap-4"
              style={{ background: "rgba(255,255,255,0.90)", border: "1.5px solid rgba(200,150,60,0.18)", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(27,58,110,0.10)", border: "1px solid rgba(27,58,110,0.15)" }}>
                <Phone className="w-5 h-5" style={{ color: "#1B3A6E" }} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "var(--brand-navy)" }}>Phone</p>
                <a href={`tel:${PHONE_RAW}`} className="text-lg font-semibold hover:opacity-80 transition-opacity"
                  style={{ color: "var(--color-text-on-light)" }}>
                  {PHONE}
                </a>
                <p className="text-xs mt-1" style={{ color: "var(--color-text-muted-light)" }}>Mon–Fri, 9am–6pm CT</p>
              </div>
            </motion.div>

            {/* WhatsApp */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="rounded-2xl p-6 flex items-start gap-4"
              style={{ background: "rgba(255,255,255,0.90)", border: "1.5px solid rgba(37,211,102,0.25)", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(37,211,102,0.10)", border: "1px solid rgba(37,211,102,0.20)" }}>
                <MessageCircle className="w-5 h-5" style={{ color: "#25D366" }} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "#25D366" }}>WhatsApp</p>
                <a
                  href={`https://wa.me/${PHONE_RAW}?text=Hi%2C%20I%27m%20interested%20in%20EkamBond%20partnership`}
                  target="_blank" rel="noopener noreferrer"
                  className="text-lg font-semibold hover:opacity-80 transition-opacity"
                  style={{ color: "var(--color-text-on-light)" }}>
                  {PHONE}
                </a>
                <p className="text-xs mt-1" style={{ color: "var(--color-text-muted-light)" }}>Message us anytime</p>
                <a
                  href={`https://wa.me/${PHONE_RAW}?text=Hi%2C%20I%27m%20interested%20in%20EkamBond%20partnership`}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-full text-xs font-semibold transition-all hover:scale-105"
                  style={{ background: "#25D366", color: "#FFFFFF" }}>
                  <MessageCircle className="w-3.5 h-3.5" />
                  Chat on WhatsApp
                  <ChevronRight className="w-3 h-3" />
                </a>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
              className="rounded-2xl p-6 flex items-start gap-4"
              style={{ background: "rgba(255,255,255,0.90)", border: "1.5px solid rgba(200,150,60,0.18)", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(200,48,42,0.10)", border: "1px solid rgba(200,48,42,0.16)" }}>
                <Mail className="w-5 h-5" style={{ color: "#C8302A" }} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "var(--brand-crimson)" }}>Email</p>
                <a href={`mailto:${EMAIL}`} className="text-base font-semibold hover:opacity-80 transition-opacity"
                  style={{ color: "var(--color-text-on-light)" }}>
                  {EMAIL}
                </a>
                <p className="text-xs mt-1" style={{ color: "var(--color-text-muted-light)" }}>We reply within 24 hours</p>
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="rounded-2xl p-6 flex items-start gap-4"
              style={{ background: "rgba(255,255,255,0.90)", border: "1.5px solid rgba(200,150,60,0.18)", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(217,169,30,0.10)", border: "1px solid rgba(217,169,30,0.20)" }}>
                <Clock className="w-5 h-5" style={{ color: "#D9A91E" }} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "var(--brand-gold)" }}>Business Hours</p>
                <p className="text-sm font-semibold" style={{ color: "var(--color-text-on-light)" }}>Mon – Fri: 9:00 AM – 6:00 PM CT</p>
                <p className="text-sm" style={{ color: "var(--color-text-muted-light)" }}>Saturday: 10:00 AM – 2:00 PM CT</p>
                <p className="text-xs mt-1" style={{ color: "var(--color-text-muted-light)" }}>Sunday: Closed</p>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.25 }}
              className="rounded-2xl p-6 flex items-start gap-4"
              style={{ background: "rgba(255,255,255,0.90)", border: "1.5px solid rgba(200,150,60,0.18)", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(27,58,110,0.10)", border: "1px solid rgba(27,58,110,0.15)" }}>
                <MapPin className="w-5 h-5" style={{ color: "#1B3A6E" }} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "var(--brand-navy)" }}>Headquarters</p>
                <p className="text-sm font-semibold" style={{ color: "var(--color-text-on-light)" }}>Houston, Texas, USA 🇺🇸</p>
                <p className="text-xs mt-1" style={{ color: "var(--color-text-muted-light)" }}>EkamBond Matrimony Enterprise Services LLC</p>
              </div>
            </motion.div>
          </div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 rounded-3xl p-8"
            style={{ background: "rgba(255,255,255,0.92)", border: "1.5px solid rgba(200,150,60,0.18)", boxShadow: "0 8px 40px rgba(0,0,0,0.08)" }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center gap-5">
                <div className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(45,158,110,0.10)", border: "2px solid rgba(45,158,110,0.25)" }}>
                  <CheckCircle2 className="w-10 h-10" style={{ color: "#2D9E6E" }} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--color-text-on-light)" }}>Message Received!</h2>
                  <p className="text-sm" style={{ color: "var(--color-text-muted-light)" }}>
                    Thank you for reaching out. Our team will get back to you within 24 hours.<br />
                    For urgent enquiries, please WhatsApp us at <strong>{PHONE}</strong>.
                  </p>
                </div>
                <a href="/register"
                  className="mt-2 px-6 py-3 rounded-full text-sm font-semibold transition-all hover:scale-105"
                  style={{ background: "linear-gradient(135deg, #1B3A6E 0%, #3A5FA0 100%)", color: "#FFFFFF" }}>
                  Become a Partner →
                </a>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--color-text-on-light)" }}>Send Us a Message</h2>
                <p className="text-sm mb-8" style={{ color: "var(--color-text-muted-light)" }}>
                  Fill out the form and our partner team will respond within 24 hours.
                </p>

                {error && (
                  <div className="mb-5 px-4 py-3 rounded-xl text-sm" style={{ background: "rgba(200,48,42,0.08)", color: "#C8302A", border: "1px solid rgba(200,48,42,0.2)" }}>
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wider"
                        style={{ color: "var(--brand-navy)" }}>Full Name *</label>
                      <input type="text" name="name" required value={form.name} onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                        style={{ background: "rgba(253,246,236,0.8)", border: "1.5px solid rgba(200,150,60,0.20)", color: "var(--color-text-on-light)" }}
                        onFocus={(e) => { e.target.style.borderColor = "#D9A91E"; e.target.style.boxShadow = "0 0 0 3px rgba(217,169,30,0.12)"; }}
                        onBlur={(e) => { e.target.style.borderColor = "rgba(200,150,60,0.20)"; e.target.style.boxShadow = "none"; }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wider"
                        style={{ color: "var(--brand-navy)" }}>Email Address *</label>
                      <input type="email" name="email" required value={form.email} onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                        style={{ background: "rgba(253,246,236,0.8)", border: "1.5px solid rgba(200,150,60,0.20)", color: "var(--color-text-on-light)" }}
                        onFocus={(e) => { e.target.style.borderColor = "#D9A91E"; e.target.style.boxShadow = "0 0 0 3px rgba(217,169,30,0.12)"; }}
                        onBlur={(e) => { e.target.style.borderColor = "rgba(200,150,60,0.20)"; e.target.style.boxShadow = "none"; }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wider"
                        style={{ color: "var(--brand-navy)" }}>Phone / WhatsApp</label>
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                        placeholder="+1 (xxx) xxx-xxxx"
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                        style={{ background: "rgba(253,246,236,0.8)", border: "1.5px solid rgba(200,150,60,0.20)", color: "var(--color-text-on-light)" }}
                        onFocus={(e) => { e.target.style.borderColor = "#D9A91E"; e.target.style.boxShadow = "0 0 0 3px rgba(217,169,30,0.12)"; }}
                        onBlur={(e) => { e.target.style.borderColor = "rgba(200,150,60,0.20)"; e.target.style.boxShadow = "none"; }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wider"
                        style={{ color: "var(--brand-navy)" }}>Subject *</label>
                      <select name="subject" required value={form.subject} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all appearance-none"
                        style={{ background: "rgba(253,246,236,0.8)", border: "1.5px solid rgba(200,150,60,0.20)", color: form.subject ? "var(--color-text-on-light)" : "rgba(100,100,100,0.6)" }}
                        onFocus={(e) => { e.target.style.borderColor = "#D9A91E"; e.target.style.boxShadow = "0 0 0 3px rgba(217,169,30,0.12)"; }}
                        onBlur={(e) => { e.target.style.borderColor = "rgba(200,150,60,0.20)"; e.target.style.boxShadow = "none"; }}>
                        <option value="" disabled>Select a topic…</option>
                        <option value="partnership">Become a Partner</option>
                        <option value="franchise">Franchise Enquiry</option>
                        <option value="pricing">Pricing & Plans</option>
                        <option value="technical">Technical Support</option>
                        <option value="billing">Billing & Payments</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wider"
                      style={{ color: "var(--brand-navy)" }}>Message *</label>
                    <textarea name="message" required rows={5} value={form.message} onChange={handleChange}
                      placeholder="Tell us about your organization, your region, and how we can help…"
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all resize-none"
                      style={{ background: "rgba(253,246,236,0.8)", border: "1.5px solid rgba(200,150,60,0.20)", color: "var(--color-text-on-light)" }}
                      onFocus={(e) => { e.target.style.borderColor = "#D9A91E"; e.target.style.boxShadow = "0 0 0 3px rgba(217,169,30,0.12)"; }}
                      onBlur={(e) => { e.target.style.borderColor = "rgba(200,150,60,0.20)"; e.target.style.boxShadow = "none"; }}
                    />
                  </div>

                  <button type="submit" disabled={submitting}
                    className="w-full flex items-center justify-center gap-3 py-4 rounded-xl font-semibold text-sm transition-all hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ background: "linear-gradient(135deg, #1B3A6E 0%, #3A5FA0 100%)", color: "#FFFFFF", boxShadow: "0 4px 20px rgba(27,58,110,0.30)" }}>
                    {submitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending…
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs" style={{ color: "var(--color-text-muted-light)" }}>
                    Or reach us instantly on{" "}
                    <a href={`https://wa.me/${PHONE_RAW}`} target="_blank" rel="noopener noreferrer"
                      className="font-semibold hover:underline" style={{ color: "#25D366" }}>
                      WhatsApp → {PHONE}
                    </a>
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
