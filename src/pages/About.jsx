import { Link } from "react-router-dom";

export default function About() {
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
            <Link to="/about" className="text-[#c9a84c]">ABOUT</Link>
            <Link to="/gallery" className="hover:text-[#c9a84c] transition-colors">GALLERY</Link>
            <Link to="/contact" className="hover:text-[#c9a84c] transition-colors">CONTACT</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-0 overflow-hidden" style={{ minHeight: "75vh" }}>
        <img
          src="https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?w=1920&q=80"
          alt="Chef Avicam"
          className="w-full h-full object-cover absolute inset-0"
          style={{ minHeight: "75vh" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0a0a0a]" />
        <div className="relative z-10 flex items-end min-h-[75vh] pb-16 px-6">
          <div className="max-w-3xl">
            <p className="text-[#c9a84c] tracking-[0.5em] text-sm mb-4">THE PERSON BEHIND THE EXPERIENCE</p>
            <h1 className="text-5xl md:text-7xl font-light leading-tight">
              Avicam Gitlin
            </h1>
            <p className="text-gray-300 text-xl font-light mt-4 tracking-wide">
              Travel Curator · Private Chef · Event Architect
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          <div>
            <p className="text-[#c9a84c] tracking-[0.4em] text-sm mb-6">THE BEGINNING</p>
            <h2 className="text-3xl md:text-4xl font-light mb-8 leading-relaxed">
              It started around a table on a Friday night.
            </h2>
            <p className="text-gray-400 font-light leading-relaxed mb-6">
              It was springtime, and a group of friends sat together sharing a Shabbat meal — 
              full of laughter, good wine, and the kind of conversation that stays with you. 
              The talk turned to travel: Tuscany, the rolling hills, the scent of cypress trees 
              in the Mediterranean warmth. Everyone shared the same dream.
            </p>
            <p className="text-gray-400 font-light leading-relaxed mb-6">
              That evening was the seed of everything that followed. Avicam realized he could build 
              something that didn't exist — a way for people to experience the world's most 
              extraordinary places through food, culture, and genuine hospitality, without compromise.
            </p>
            <p className="text-gray-400 font-light leading-relaxed">
              "Great ideas are born when good friends and great wine come together." 
              That philosophy has guided every event, every journey, and every table he's set since.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80"
              alt="Chef at work"
              className="w-full h-[550px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 px-6 bg-[#111111]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#c9a84c] tracking-[0.4em] text-sm mb-4">THE PHILOSOPHY</p>
            <h2 className="text-3xl md:text-4xl font-light">What Drives Every Decision</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: "🍽️",
                title: "Food as Connection",
                text: "Avicam believes food is the most powerful way to experience a place and connect with the people around you. Every menu is crafted to tell a story — of the land, the season, and the people gathered."
              },
              {
                icon: "✦",
                title: "Bespoke by Nature",
                text: "No two events are the same, because no two clients are the same. Avicam's approach is deeply personal: he wants to understand how you live, what you love, and what will make your event feel unmistakably yours."
              },
              {
                icon: "🌍",
                title: "The World as Your Venue",
                text: "A dining room can be a Tuscan hillside at sunset, a deck on a private yacht, or a lantern-lit courtyard in Marrakech. The world's most beautiful places are available — you just need the right person to open the door."
              }
            ].map((p, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl mb-6">{p.icon}</div>
                <h3 className="text-xl font-light mb-4 text-[#c9a84c]">{p.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed text-sm">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="text-[#c9a84c] text-5xl mb-6">"</div>
          <p className="text-2xl md:text-3xl font-light leading-relaxed text-gray-300 italic mb-8">
            I am excited to provide people with the opportunity to experience cuisine and culture 
            without restrictions. Each event is a new and exciting opportunity to explore, 
            to create, and to share something extraordinary.
          </p>
          <p className="text-[#c9a84c] tracking-[0.3em] text-sm">— AVICAM GITLIN</p>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-24 px-6 bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#c9a84c] tracking-[0.4em] text-sm mb-4">EXPERTISE & REACH</p>
            <h2 className="text-3xl font-light">Built Over a Decade, Refined Through Every Event</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-light mb-6 text-[#c9a84c]">Culinary Expertise</h3>
              <ul className="space-y-4">
                {[
                  "Private chef with deep knowledge of international cuisine",
                  "Specialist in using fresh, local, seasonal ingredients",
                  "Custom menu design for every event and occasion",
                  "Experience in intimate dinners to large-scale celebrations",
                  "Deep knowledge of dietary requirements & food culture"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-400 text-sm font-light">
                    <span className="text-[#c9a84c] mt-1">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-light mb-6 text-[#c9a84c]">Event & Travel Curation</h3>
              <ul className="space-y-4">
                {[
                  "Over 15 years curating private events worldwide",
                  "Destination weddings, Bar Mitzvahs & family milestones",
                  "Private villa programs & multi-week travel experiences",
                  "Global network of venues, vendors & local partners",
                  "Personalized, hands-on approach from concept to execution"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-400 text-sm font-light">
                    <span className="text-[#c9a84c] mt-1">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-[#c9a84c] tracking-[0.4em] text-sm mb-6">WORK WITH AVICAM</p>
          <h2 className="text-4xl font-light mb-8">Let's Create Something Together</h2>
          <p className="text-gray-400 font-light mb-10">
            Whether you have a clear vision or just a feeling, Avicam would love to hear from you.
          </p>
          <Link to="/contact" className="inline-block px-12 py-5 bg-[#c9a84c] text-black text-sm tracking-[0.3em] hover:bg-[#e0c070] transition-colors font-medium">
            GET IN TOUCH
          </Link>
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
