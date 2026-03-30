import { useState } from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    destination: "",
    date: "",
    guests: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const eventTypes = [
    "Destination Wedding",
    "Bar / Bat Mitzvah",
    "Private Dining Experience",
    "Villa Program",
    "Corporate / VIP Event",
    "Chef-Led Culinary Retreat",
    "Sailing Journey",
    "Heritage Journey",
    "Other"
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-['Georgia',serif]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#c9a84c]/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl tracking-[0.3em] text-[#c9a84c] font-light">AVICAM GITLIN</Link>
          <div className="hidden md:flex gap-8 text-sm tracking-[0.2em] text-gray-300">
            <Link to="/" className="hover:text-[#c9a84c] transition-colors">HOME</Link>
            <Link to="/services" className="hover:text-[#c9a84c] transition-colors">SERVICES</Link>
            <Link to="/experiences" className="hover:text-[#c9a84c] transition-colors">EXPERIENCES</Link>
            <Link to="/about" className="hover:text-[#c9a84c] transition-colors">ABOUT</Link>
            <Link to="/gallery" className="hover:text-[#c9a84c] transition-colors">GALLERY</Link>
            <Link to="/contact" className="text-[#c9a84c]">CONTACT</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 text-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="text-[#c9a84c] tracking-[0.5em] text-sm mb-6">LET'S TALK</p>
          <h1 className="text-5xl md:text-6xl font-light mb-8">Begin Your Journey</h1>
          <p className="text-gray-400 text-lg font-light leading-relaxed">
            Every extraordinary event starts with a conversation. 
            Share your vision and we'll be in touch personally within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          
          {/* Left: Info */}
          <div className="md:col-span-1">
            <p className="text-[#c9a84c] tracking-[0.4em] text-sm mb-8">REACH US</p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-sm tracking-[0.3em] text-gray-500 mb-2">PHONE / WHATSAPP</h3>
                <a href="tel:+13479949284" className="text-white font-light hover:text-[#c9a84c] transition-colors text-lg">
                  +1 (347) 994-9284
                </a>
              </div>
              <div>
                <h3 className="text-sm tracking-[0.3em] text-gray-500 mb-2">EMAIL</h3>
                <a href="mailto:avicam@kosherculinarytravel.com" className="text-white font-light hover:text-[#c9a84c] transition-colors">
                  avicam@kosherculinarytravel.com
                </a>
              </div>
              <div>
                <h3 className="text-sm tracking-[0.3em] text-gray-500 mb-2">BASED IN</h3>
                <p className="text-white font-light">New York · Available Worldwide</p>
              </div>
              <div>
                <h3 className="text-sm tracking-[0.3em] text-gray-500 mb-2">RESPONSE TIME</h3>
                <p className="text-white font-light">Within 24 hours</p>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-[#c9a84c]/20">
              <p className="text-[#c9a84c] tracking-[0.3em] text-xs mb-6">FOLLOW THE JOURNEY</p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="border border-[#c9a84c]/30 px-4 py-2 text-xs text-gray-400 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors tracking-wide">
                  INSTAGRAM
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="border border-[#c9a84c]/30 px-4 py-2 text-xs text-gray-400 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors tracking-wide">
                  FACEBOOK
                </a>
              </div>
            </div>

            <div className="mt-12 p-6 border border-[#c9a84c]/20 bg-[#111111]">
              <p className="text-[#c9a84c] text-xs tracking-[0.3em] mb-3">A NOTE FROM AVICAM</p>
              <p className="text-gray-400 font-light text-sm leading-relaxed italic">
                "Every event I create is personal to me. I read every inquiry myself, 
                and I respond personally. Tell me your dream — I'd love to help you bring it to life."
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="md:col-span-2">
            {submitted ? (
              <div className="h-full flex items-center justify-center text-center py-20">
                <div>
                  <div className="text-6xl mb-8">✦</div>
                  <h2 className="text-3xl font-light text-[#c9a84c] mb-4">Thank You</h2>
                  <p className="text-gray-400 font-light text-lg mb-2">Your inquiry has been received.</p>
                  <p className="text-gray-500 font-light">Avicam will be in touch personally within 24 hours.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs tracking-[0.3em] text-gray-500 mb-2">FULL NAME *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full bg-[#111111] border border-[#c9a84c]/20 text-white px-4 py-3 focus:outline-none focus:border-[#c9a84c] transition-colors font-light"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-[0.3em] text-gray-500 mb-2">EMAIL ADDRESS *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full bg-[#111111] border border-[#c9a84c]/20 text-white px-4 py-3 focus:outline-none focus:border-[#c9a84c] transition-colors font-light"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs tracking-[0.3em] text-gray-500 mb-2">PHONE / WHATSAPP</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full bg-[#111111] border border-[#c9a84c]/20 text-white px-4 py-3 focus:outline-none focus:border-[#c9a84c] transition-colors font-light"
                      placeholder="+1 (000) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-[0.3em] text-gray-500 mb-2">TYPE OF EVENT *</label>
                    <select
                      name="eventType"
                      required
                      value={form.eventType}
                      onChange={handleChange}
                      className="w-full bg-[#111111] border border-[#c9a84c]/20 text-white px-4 py-3 focus:outline-none focus:border-[#c9a84c] transition-colors font-light"
                    >
                      <option value="">Select event type</option>
                      {eventTypes.map(t => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-xs tracking-[0.3em] text-gray-500 mb-2">DESTINATION</label>
                    <input
                      type="text"
                      name="destination"
                      value={form.destination}
                      onChange={handleChange}
                      className="w-full bg-[#111111] border border-[#c9a84c]/20 text-white px-4 py-3 focus:outline-none focus:border-[#c9a84c] transition-colors font-light"
                      placeholder="e.g. Tuscany, Greece"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-[0.3em] text-gray-500 mb-2">EVENT DATE</label>
                    <input
                      type="text"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      className="w-full bg-[#111111] border border-[#c9a84c]/20 text-white px-4 py-3 focus:outline-none focus:border-[#c9a84c] transition-colors font-light"
                      placeholder="Month & Year"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-[0.3em] text-gray-500 mb-2">NUMBER OF GUESTS</label>
                    <input
                      type="text"
                      name="guests"
                      value={form.guests}
                      onChange={handleChange}
                      className="w-full bg-[#111111] border border-[#c9a84c]/20 text-white px-4 py-3 focus:outline-none focus:border-[#c9a84c] transition-colors font-light"
                      placeholder="Approx. guests"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs tracking-[0.3em] text-gray-500 mb-2">TELL US YOUR VISION *</label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-[#111111] border border-[#c9a84c]/20 text-white px-4 py-3 focus:outline-none focus:border-[#c9a84c] transition-colors font-light resize-none"
                    placeholder="Share your vision, ideas, or any questions you have. The more you tell us, the better we can serve you."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-5 bg-[#c9a84c] text-black text-sm tracking-[0.3em] hover:bg-[#e0c070] transition-colors font-medium disabled:opacity-60"
                >
                  {loading ? "SENDING..." : "SEND YOUR INQUIRY"}
                </button>

                <p className="text-gray-600 text-xs text-center tracking-wide">
                  Your inquiry is handled with complete discretion. We respond personally within 24 hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] border-t border-[#c9a84c]/20 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[#c9a84c] text-xl tracking-[0.3em] font-light">AVICAM GITLIN</div>
          <div className="flex gap-8 text-sm text-gray-500 tracking-[0.2em]">
            <Link to="/services" className="hover:text-[#c9a84c] transition-colors">SERVICES</Link>
            <Link to="/experiences" className="hover:text-[#c9a84c] transition-colors">EXPERIENCES</Link>
            <Link to="/about" className="hover:text-[#c9a84c] transition-colors">ABOUT</Link>
            <Link to="/contact" className="hover:text-[#c9a84c] transition-colors">CONTACT</Link>
          </div>
          <div className="text-gray-600 text-xs tracking-wide">© 2025 Avicam Gitlin Private Events</div>
        </div>
      </footer>
    </div>
  );
}
