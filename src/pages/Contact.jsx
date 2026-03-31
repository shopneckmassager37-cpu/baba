import { useEffect, useState } from "react";
import { sendContactEmail } from "@/functions/sendContactEmail";
import { Link, useLocation } from "react-router-dom";
import ChatWidget from "./ChatWidget";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    await sendContactEmail({ name: form.name, email: form.email, message: form.message });
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0f0e0c] text-[#e8e2d9]" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
      <ScrollToTop />
      <Navbar active="CONTACT" />

      {/* Hero — compact */}
      <section className="relative pt-28 pb-16 px-6 text-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative z-10 max-w-xl mx-auto">
          <p className="text-[#c9a84c] tracking-[0.5em] text-xs mb-4">LET'S TALK</p>
          <h1 className="text-4xl md:text-5xl font-light mb-4 text-white">Begin Your Journey</h1>
          <div className="w-10 h-px bg-[#c9a84c] mx-auto mb-4" />
          <p className="text-white text-base font-light">Every extraordinary event starts with a conversation.</p>
        </div>
      </section>

      {/* Main contact section — styled like the reference image */}
      <section className="py-16 px-6 bg-[#0f0e0c]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          {/* LEFT — Contact options cards */}
          <div className="space-y-4">
            <h2 className="text-xs tracking-[0.4em] text-[#c9a84c] mb-6 font-medium">CONTACT OPTIONS</h2>

            {/* WhatsApp card */}
            <div className="bg-[#141210] border border-[#c9a84c]/20 p-6 hover:border-[#c9a84c] transition-all duration-300 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-[#c9a84c]/40 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-[#c9a84c]"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-[#e8e2d9] font-light text-base mb-1">WhatsApp</h3>
                  <p className="text-[#a09888] text-sm mb-3">Click to message our team directly</p>
                  <a href="https://wa.me/13479949284" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#c9a84c] text-black px-5 py-2 text-xs tracking-[0.2em] hover:bg-[#e0c070] transition-colors font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    +1 (347) 994-9284
                  </a>
                </div>
              </div>
            </div>

            {/* Email card */}
            <div className="bg-[#141210] border border-[#c9a84c]/20 p-6 hover:border-[#c9a84c] transition-all duration-300 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-[#c9a84c]/40 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="text-[#c9a84c]"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/></svg>
                </div>
                <div>
                  <h3 className="text-[#e8e2d9] font-light text-base mb-1">Email</h3>
                  <p className="text-[#a09888] text-sm mb-3">Send us a detailed message</p>
                  <a href="mailto:avicam@kosherculinarytravel.com"
                    className="inline-flex items-center gap-2 border border-[#c9a84c]/30 text-[#c9a84c] px-4 py-2 text-xs hover:bg-[#c9a84c]/10 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/></svg>
                    avicam@kosherculinarytravel.com
                  </a>
                </div>
              </div>
            </div>

            {/* What Happens Next card */}
            <div className="bg-[#141210] border border-[#c9a84c]/20 p-6 rounded-2xl">
              <h3 className="text-[#e8e2d9] font-light text-base mb-5">What Happens Next?</h3>
              {[
                "We'll review your inquiry within 24 hours",
                "Avicam will reach out personally to discuss your vision",
                "We'll craft a bespoke proposal tailored to your event"
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 mb-4 last:mb-0">
                  <div className="w-6 h-6 rounded-full bg-[#c9a84c] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-black text-xs font-semibold">{i+1}</span>
                  </div>
                  <p className="text-[#a09888] text-sm font-light leading-relaxed">{step}</p>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="flex gap-3 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-[#c9a84c]/30 px-4 py-2.5 text-gray-400 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                <span className="text-xs tracking-wide">INSTAGRAM</span>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-[#c9a84c]/30 px-4 py-2.5 text-gray-400 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                <span className="text-xs tracking-wide">FACEBOOK</span>
              </a>
            </div>
          </div>

          {/* RIGHT — Form, same fields as before, cleaner look */}
          <div className="bg-[#141210] border border-[#c9a84c]/20 p-8 rounded-2xl">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-16 gap-4">
                <div className="text-[#c9a84c] text-4xl">✦</div>
                <h2 className="text-2xl font-light text-[#c9a84c]">Thank You</h2>
                <p className="text-gray-400 font-light text-sm">Your message has been received.<br />Avicam will be in touch personally very soon.</p>
              </div>
            ) : (
              <>
                <h2 className="text-xs tracking-[0.4em] text-[#c9a84c] mb-6">SEND A MESSAGE</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs text-[#a09888] mb-1.5 tracking-widest">YOUR NAME *</label>
                    <input type="text" name="name" required value={form.name} onChange={handleChange}
                      className="w-full bg-[#252525] border border-[#333] text-white px-4 py-3.5 focus:outline-none focus:border-[#c9a84c]/60 transition-colors font-light text-sm placeholder-gray-600 rounded-xl"
                      placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-xs text-[#a09888] mb-1.5 tracking-widest">EMAIL ADDRESS *</label>
                    <input type="email" name="email" required value={form.email} onChange={handleChange}
                      className="w-full bg-[#252525] border border-[#333] text-white px-4 py-3.5 focus:outline-none focus:border-[#c9a84c]/60 transition-colors font-light text-sm placeholder-gray-600 rounded-xl"
                      placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-xs text-[#a09888] mb-1.5 tracking-widest">YOUR MESSAGE *</label>
                    <textarea name="message" required rows={7} value={form.message} onChange={handleChange}
                      className="w-full bg-[#252525] border border-[#333] text-white px-4 py-3.5 focus:outline-none focus:border-[#c9a84c]/60 transition-colors font-light resize-none text-sm placeholder-gray-600 rounded-xl"
                      placeholder="Tell us about your event — the occasion, the date, the destination, or simply how you're imagining it..." />
                  </div>
                  <button type="submit" disabled={loading}
                    className="w-full py-4 bg-[#c9a84c] text-black text-xs tracking-[0.3em] hover:bg-[#e0c070] transition-colors font-semibold disabled:opacity-60 rounded-xl">
                    {loading ? "SENDING..." : "SUBMIT"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-[#141210]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c9a84c] tracking-[0.5em] text-xs mb-3">WHAT CLIENTS SAY</p>
            <h2 className="text-3xl font-light text-[#e8e2d9]">Their Words</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { quote: "Avicam turned our wedding in Tuscany into something beyond our wildest dreams. Every single detail was perfect.", name: "Sarah & Daniel", location: "Tuscany, Italy" },
              { quote: "Our gala raised more than ever before. The atmosphere, the production, the experience — guests are still talking about it.", name: "Rebecca Cohen", location: "New York, USA" },
              { quote: "From the first call to the final dance, Avicam was present, attentive, and flawless. An experience we'll cherish forever.", name: "James & Miriam", location: "Santorini, Greece" }
            ].map((t, i) => (
              <div key={i} className="bg-[#0f0e0c] border border-[#c9a84c]/15 p-7 rounded-2xl flex flex-col">
                <p className="text-[#a09888] font-light text-sm leading-relaxed italic flex-1 mb-6">{t.quote}</p>
                <div className="border-t border-[#c9a84c]/15 pt-4">
                  <p className="text-[#e8e2d9] text-sm font-light">{t.name}</p>
                  <p className="text-[#c9a84c] text-xs tracking-widest mt-1">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact info strip */}
      <section className="py-16 px-6 bg-[#0f0e0c]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#c9a84c] tracking-[0.4em] text-xs mb-4">WHERE WE ARE</p>
            <h2 className="text-3xl font-light text-[#e8e2d9] mb-6">Based in New York.<br />Working Worldwide.</h2>
            <div className="w-10 h-px bg-[#c9a84c]/40 mb-6" />
            <p className="text-[#a09888] font-light text-sm leading-relaxed mb-8">Our team is based in New York City, but our events span the globe — from the hills of Tuscany to the shores of the Aegean.</p>
            <div className="space-y-4">
              {[
                { icon: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.9 12.4 19.79 19.79 0 0 1 1.85 3.82 2 2 0 0 1 3.82 1.64h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l.97-.97a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z", label: "+1 (347) 994-9284", sub: "Available by appointment" },
                { icon: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6", label: "avicam@kosherculinarytravel.com", sub: "Response within 24 hours" },
                { icon: "M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z", label: "New York, USA", sub: "Events in 30+ countries" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-8 h-8 border border-[#c9a84c]/30 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="#c9a84c" strokeWidth="1.5" viewBox="0 0 24 24"><path d={item.icon}/></svg>
                  </div>
                  <div>
                    <p className="text-[#e8e2d9] text-sm font-light">{item.label}</p>
                    <p className="text-[#a09888] text-xs">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl">
            <img src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80" alt="New York" className="w-full h-[400px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="text-[#c9a84c] text-xs tracking-[0.3em]">NEW YORK CITY</p>
              <p className="text-white text-sm font-light mt-1">Our home base</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="relative py-20 px-6 text-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-black/82" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="w-8 h-px bg-[#c9a84c] mx-auto mb-6" />
          <p className="text-xl md:text-2xl font-light text-white leading-relaxed italic mb-6">The finest events are not stumbled upon — they are crafted, with care, by someone who truly cares.</p>
          <div className="w-8 h-px bg-[#c9a84c] mx-auto mb-4" />
          <p className="text-[#c9a84c] tracking-[0.4em] text-xs">— AVICAM GITLIN</p>
        </div>
      </section>

      <Footer />
      <ChatWidget />
    </div>
  );
}