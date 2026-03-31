import { useState } from "react";
import { Link } from "react-router-dom";
import { ContactInquiry } from "@/api/entities";

const LOGO = "https://media.base44.com/images/public/69caab40b61d6ee7c5b75332/9d7fead75_generated_image.png";

const eventTypes = [
  "Destination Celebration",
  "Private Dining Experience",
  "Milestone Event",
  "Corporate / VIP Event",
  "Villa Program",
  "Chef-Led Culinary Retreat",
  "Sailing Journey",
  "Heritage Journey",
  "Other"
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", eventType: "", destination: "", date: "", guests: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await ContactInquiry.create({
        name: form.name,
        email: form.email,
        phone: form.phone,
        event_type: form.eventType,
        destination: form.destination,
        date: form.date,
        guests: form.guests,
        message: form.message,
        status: "New"
      });
      setSubmitted(true);
    } catch (err) {
      setError("Something went wrong. Please try again or contact us directly.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#c9a84c]/20">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <img src={LOGO} alt="Avicam Gitlin" className="h-12 w-12 object-contain" />
            <span className="text-xl tracking-[0.25em] text-[#c9a84c] font-light hidden sm:block">AVICAM GITLIN</span>
          </Link>
          <div className="hidden md:flex gap-8 text-xs tracking-[0.2em] text-gray-300">
            <Link to="/" className="hover:text-[#c9a84c] transition-colors">HOME</Link>
            <Link to="/process" className="hover:text-[#c9a84c] transition-colors">HOW WE WORK</Link>
            <Link to="/events" className="hover:text-[#c9a84c] transition-colors">EVENTS</Link>
            <Link to="/about" className="hover:text-[#c9a84c] transition-colors">ABOUT</Link>
            <Link to="/gallery" className="hover:text-[#c9a84c] transition-colors">GALLERY</Link>
            <Link to="/contact" className="text-[#c9a84c]">CONTACT</Link>
          </div>
          <Link to="/contact" className="hidden md:block px-5 py-2 border border-[#c9a84c] text-[#c9a84c] text-xs tracking-[0.2em] hover:bg-[#c9a84c]/10 transition-colors">INQUIRE</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 text-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="text-[#c9a84c] tracking-[0.5em] text-xs mb-6">LET'S TALK</p>
          <h1 className="text-5xl md:text-6xl font-light mb-6">Begin Your Journey</h1>
          <div className="w-12 h-px bg-[#c9a84c] mx-auto mb-8" />
          <p className="text-gray-400 text-lg font-light leading-relaxed">
            Every extraordinary event starts with a conversation.
            Share your vision and we'll respond personally within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">

          {/* Info column */}
          <div className="md:col-span-1 space-y-10">
            <div>
              <p className="text-[#c9a84c] tracking-[0.4em] text-xs mb-8">REACH US</p>
              <div className="space-y-7">
                <div>
                  <p className="text-xs tracking-[0.3em] text-gray-600 mb-1">PHONE / WHATSAPP</p>
                  <a href="tel:+13479949284" className="text-white font-light hover:text-[#c9a84c] transition-colors text-lg">+1 (347) 994-9284</a>
                </div>
                <div>
                  <p className="text-xs tracking-[0.3em] text-gray-600 mb-1">EMAIL</p>
                  <a href="mailto:avicam@kosherculinarytravel.com" className="text-white font-light hover:text-[#c9a84c] transition-colors text-sm break-all">avicam@kosherculinarytravel.com</a>
                </div>
                <div>
                  <p className="text-xs tracking-[0.3em] text-gray-600 mb-1">BASED IN</p>
                  <p className="text-white font-light">New York · Available Worldwide</p>
                </div>
                <div>
                  <p className="text-xs tracking-[0.3em] text-gray-600 mb-1">RESPONSE TIME</p>
                  <p className="text-white font-light">Within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#c9a84c]/15">
              <p className="text-[#c9a84c] tracking-[0.3em] text-xs mb-5">FOLLOW THE JOURNEY</p>
              <div className="flex gap-3">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="border border-[#c9a84c]/30 px-4 py-2 text-xs text-gray-400 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors tracking-wide">INSTAGRAM</a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="border border-[#c9a84c]/30 px-4 py-2 text-xs text-gray-400 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors tracking-wide">FACEBOOK</a>
              </div>
            </div>

            <div className="p-6 border border-[#c9a84c]/20 bg-[#0d0d0d]">
              <p className="text-[#c9a84c] text-xs tracking-[0.3em] mb-3">A NOTE FROM AVICAM</p>
              <p className="text-gray-400 font-light text-sm leading-relaxed italic">
                "Every event I create is personal to me. I read every inquiry myself
                and respond personally. Tell me your dream — I'd love to help bring it to life."
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-2">
            {submitted ? (
              <div className="flex items-center justify-center text-center py-32">
                <div>
                  <div className="text-[#c9a84c] text-6xl mb-8 font-light">✦</div>
                  <h2 className="text-3xl font-light text-[#c9a84c] mb-4">Thank You</h2>
                  <p className="text-gray-400 font-light text-lg mb-2">Your inquiry has been received.</p>
                  <p className="text-gray-500 font-light text-sm mb-8">Avicam will be in touch personally within 24 hours.</p>
                  <Link to="/" className="inline-block px-8 py-3 border border-[#c9a84c]/40 text-[#c9a84c] text-xs tracking-[0.3em] hover:bg-[#c9a84c]/10 transition-colors">BACK TO HOME</Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs tracking-[0.3em] text-gray-600 mb-2">FULL NAME *</label>
                    <input type="text" name="name" required value={form.name} onChange={handleChange}
                      className="w-full bg-[#0d0d0d] border border-[#c9a84c]/20 text-white px-4 py-3 focus:outline-none focus:border-[#c9a84c] transition-colors font-light placeholder-gray-700"
                      placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-xs tracking-[0.3em] text-gray-600 mb-2">EMAIL ADDRESS *</label>
                    <input type="email" name="email" required value={form.email} onChange={handleChange}
                      className="w-full bg-[#0d0d0d] border border-[#c9a84c]/20 text-white px-4 py-3 focus:outline-none focus:border-[#c9a84c] transition-colors font-light placeholder-gray-700"
                      placeholder="your@email.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs tracking-[0.3em] text-gray-600 mb-2">PHONE / WHATSAPP</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                      className="w-full bg-[#0d0d0d] border border-[#c9a84c]/20 text-white px-4 py-3 focus:outline-none focus:border-[#c9a84c] transition-colors font-light placeholder-gray-700"
                      placeholder="+1 (000) 000-0000" />
                  </div>
                  <div>
                    <label className="block text-xs tracking-[0.3em] text-gray-600 mb-2">TYPE OF EVENT *</label>
                    <select name="eventType" required value={form.eventType} onChange={handleChange}
                      className="w-full bg-[#0d0d0d] border border-[#c9a84c]/20 text-white px-4 py-3 focus:outline-none focus:border-[#c9a84c] transition-colors font-light">
                      <option value="">Select event type</option>
                      {eventTypes.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-xs tracking-[0.3em] text-gray-600 mb-2">DESTINATION</label>
                    <input type="text" name="destination" value={form.destination} onChange={handleChange}
                      className="w-full bg-[#0d0d0d] border border-[#c9a84c]/20 text-white px-4 py-3 focus:outline-none focus:border-[#c9a84c] transition-colors font-light placeholder-gray-700"
                      placeholder="e.g. Tuscany, Greece" />
                  </div>
                  <div>
                    <label className="block text-xs tracking-[0.3em] text-gray-600 mb-2">EVENT DATE</label>
                    <input type="text" name="date" value={form.date} onChange={handleChange}
                      className="w-full bg-[#0d0d0d] border border-[#c9a84c]/20 text-white px-4 py-3 focus:outline-none focus:border-[#c9a84c] transition-colors font-light placeholder-gray-700"
                      placeholder="e.g. June 2026" />
                  </div>
                  <div>
                    <label className="block text-xs tracking-[0.3em] text-gray-600 mb-2">NUMBER OF GUESTS</label>
                    <input type="text" name="guests" value={form.guests} onChange={handleChange}
                      className="w-full bg-[#0d0d0d] border border-[#c9a84c]/20 text-white px-4 py-3 focus:outline-none focus:border-[#c9a84c] transition-colors font-light placeholder-gray-700"
                      placeholder="e.g. 50" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs tracking-[0.3em] text-gray-600 mb-2">YOUR MESSAGE *</label>
                  <textarea name="message" required rows={6} value={form.message} onChange={handleChange}
                    className="w-full bg-[#0d0d0d] border border-[#c9a84c]/20 text-white px-4 py-3 focus:outline-none focus:border-[#c9a84c] transition-colors font-light resize-none placeholder-gray-700"
                    placeholder="Tell us about your vision — the occasion, the atmosphere, the experience you're imagining..." />
                </div>

                {error && (
                  <div className="border border-red-500/30 bg-red-500/10 px-4 py-3 text-red-400 text-sm font-light">
                    {error}
                  </div>
                )}

                <div className="flex items-center justify-between pt-2">
                  <p className="text-gray-600 text-xs font-light">* Required fields</p>
                  <button type="submit" disabled={loading}
                    className="px-12 py-4 bg-[#c9a84c] text-black text-xs tracking-[0.3em] hover:bg-[#e0c070] transition-colors font-semibold disabled:opacity-50 flex items-center gap-3">
                    {loading ? (
                      <>
                        <span className="w-3 h-3 border border-black/40 border-t-black rounded-full animate-spin" />
                        SENDING...
                      </>
                    ) : "SEND INQUIRY"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#070707] border-t border-[#c9a84c]/15 pt-14 pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="border-t border-[#c9a84c]/10 pt-6 text-center">
            <p className="text-gray-600 text-xs tracking-wide">© 2025 Avicam Gitlin Private Events. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
