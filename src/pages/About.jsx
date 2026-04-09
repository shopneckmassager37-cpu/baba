import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ChatWidget from "./ChatWidget";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

const AVICAM = "https://base44.app/api/apps/69caab40b61d6ee7c5b75332/files/mp/public/69caab40b61d6ee7c5b75332/129dab6d3_avicam_photo.jpg";
const KITCHEN_IMG = "https://media.base44.com/images/public/69caab40b61d6ee7c5b75332/45a3420cd_image.png";

export default function About() {
  return (
    <div className="min-h-screen bg-[#0f0e0c] text-[#e8e2d9]" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
      <ScrollToTop />
      <Navbar active="ABOUT" />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: "80vh" }}>
        <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&q=80" alt="Private event" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-[#161616]/95" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6" style={{ minHeight: "80vh" }}>
          <p className="text-[#c9a84c] tracking-[0.6em] text-xs mb-6">THE STORY</p>
          <h1 className="text-5xl md:text-7xl font-light leading-none mb-6">Behind Every<br /><span className="italic text-[#c9a84c]">Extraordinary Event</span></h1>
          <div className="w-16 h-px bg-[#c9a84c] mb-8" />
          <p className="text-gray-300 text-lg font-light max-w-xl leading-relaxed">The person, the philosophy, and the passion that make it all possible.</p>
        </div>
      </section>

      <div style={{ height: "60px", background: "linear-gradient(to bottom, #161616, #f5f0e8)" }} />

      {/* Story */}
      <section className="py-16 md:py-28 px-6 bg-[#f5f0e8]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
          <div>
            <p className="text-[#c9a84c] tracking-[0.4em] text-xs mb-6">THE BEGINNING</p>
            <h2 className="text-3xl md:text-4xl font-light mb-8 leading-relaxed text-[#1a1813]">It started around a table<br />on a Friday night.</h2>
            <div className="w-10 h-px bg-[#c9a84c]/40 mb-8" />
            <p className="text-[#6b5f50] font-light leading-relaxed mb-5">
              It was springtime, and a group of friends sat together sharing a meal — full of laughter, good wine, and the kind of conversation that stays with you. The talk turned to travel: Tuscany, the rolling hills, the scent of cypress trees in the Mediterranean warmth. Everyone shared the same dream.
            </p>
            <p className="text-[#6b5f50] font-light leading-relaxed mb-5">
              That evening was the seed of everything that followed. Avicam realised he could build something that didn't yet exist — a way for people to gather, celebrate, and experience the world's most extraordinary places with total care and without compromise.
            </p>
            <p className="text-[#6b5f50] font-light leading-relaxed italic border-l-2 border-[#c9a84c]/60 pl-4">
              "Great ideas are born when good friends and great wine come together."
            </p>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80" alt="Event celebration" className="w-full h-[580px] object-cover" />
            <div className="absolute -bottom-4 -left-4 w-28 h-28 border border-[#c9a84c]/40 pointer-events-none" />
          </div>
        </div>
      </section>

      <div style={{ height: "60px", background: "linear-gradient(to bottom, #f5f0e8, #141210)" }} />

      {/* Kitchen photo — the new image */}
      <section className="py-0 px-6 pb-16 md:pb-28 bg-[#141210]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="relative overflow-hidden">
              <img
                src={KITCHEN_IMG}
                alt="Avicam in the kitchen"
                className="w-full h-[480px] object-cover object-center hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-6 py-5">
                <p className="text-[#c9a84c] text-xs tracking-[0.3em]">IN THE HEART OF IT ALL</p>
              </div>
            </div>
            <div>
              <p className="text-[#c9a84c] tracking-[0.4em] text-xs mb-6">WHERE IT ALL COMES TOGETHER</p>
              <h2 className="text-3xl font-light mb-6 leading-relaxed text-[#e8e2d9]">More than events.<br />Experiences lived from the inside out.</h2>
              <div className="w-10 h-px bg-[#c9a84c]/40 mb-6" />
              <p className="text-[#a09888] font-light leading-relaxed mb-5">
                Every extraordinary event begins long before the guests arrive. It starts in conversations, in creative sessions, in the quiet hours of preparation where every detail is considered and every decision is made with purpose.
              </p>
              <p className="text-[#a09888] font-light leading-relaxed">
                Avicam and his team bring the same passion and precision to every element of the experience — from the broadest vision to the smallest detail. This is the standard we hold ourselves to, every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: "50px", background: "linear-gradient(to bottom, #141210, #0f0e0c)" }} />

      {/* Philosophy */}
      <section className="py-24 px-6 bg-[#0f0e0c]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#c9a84c] tracking-[0.4em] text-xs mb-4">THE PHILOSOPHY</p>
            <h2 className="text-3xl md:text-4xl font-light text-[#e8e2d9]">What Drives Every Decision</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#c9a84c]/15">
            {[
              { icon: "✦", title: "Every Event is Personal", text: "Avicam's approach starts from who you are, not a template. He wants to understand how you live, what you love, and what this event means to you — then build something unmistakably yours." },
              { icon: "◆", title: "Bespoke by Nature", text: "No two events are the same, because no two clients are the same. Every venue, every design direction, every piece of programming is chosen specifically for you." },
              { icon: "✦", title: "The World is Your Venue", text: "The finest venues in the world are available — a Tuscan hillside, a grand estate, a lantern-lit courtyard in Marrakech. You just need the right person to open the door." }
            ].map((p,i) => (
              <div key={i} className="text-center px-8 py-12 bg-[#141210] hover:bg-[#1a1813] transition-colors">
                <div className="text-3xl mb-6 text-[#c9a84c]">{p.icon}</div>
                <h3 className="text-lg font-light mb-4 text-[#e8e2d9] tracking-wide">{p.title}</h3>
                <div className="w-8 h-px bg-[#c9a84c]/40 mx-auto mb-4" />
                <p className="text-[#a09888] font-light leading-relaxed text-sm">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: "60px", background: "linear-gradient(to bottom, #0f0e0c, #f5f0e8)" }} />

      {/* Meet Avicam */}
      <section className="py-16 md:py-28 px-6 bg-[#f5f0e8]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
          <div className="relative">
            <img src={AVICAM} alt="Avicam Gitlin" className="w-full h-[650px] object-cover object-top"
              onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?w=800&q=80"; }} />
            <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-sm border border-[#c9a84c]/40 px-5 py-3">
              <p className="text-[#c9a84c] text-xs tracking-[0.3em]">AVICAM GITLIN</p>
              <p className="text-gray-400 text-xs mt-1">Private Event Producer</p>
            </div>
          </div>
          <div>
            <p className="text-[#c9a84c] tracking-[0.4em] text-xs mb-6">THE MAN BEHIND IT ALL</p>
            <h2 className="text-3xl md:text-4xl font-light leading-tight mb-8 text-[#1a1813]">Avicam Gitlin</h2>
            <div className="w-10 h-px bg-[#c9a84c]/50 mb-8" />
            <p className="text-[#6b5f50] font-light leading-relaxed mb-6">
              Avicam Gitlin is a private event producer with over 15 years of experience creating bespoke celebrations across the world's most spectacular destinations.
            </p>
            <p className="text-[#6b5f50] font-light leading-relaxed mb-10">
              He has produced weddings, fundraising galas, corporate events, and milestone celebrations — from New York ballrooms to Greek island estates, from Moroccan riads to Alpine chalets.
            </p>
            <div className="space-y-0">
              {["15+ years producing private events worldwide","Weddings, galas & corporate events","Trusted network in 30+ countries","Personally involved in every event","Complete discretion, always"].map((item,i) => (
                <div key={i} className="flex items-center gap-4 py-3 border-b border-[#c9a84c]/20">
                  <span className="text-[#c9a84c] text-xs">→</span>
                  <span className="text-[#6b5f50] text-sm font-light">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: "60px", background: "linear-gradient(to bottom, #f5f0e8, #0f0e0c)" }} />

      {/* Quote */}
      <section className="py-24 px-6 text-center bg-[#0f0e0c]">
        <div className="max-w-3xl mx-auto">
          <div className="text-[#c9a84c] text-5xl font-light mb-6">"</div>
          <p className="text-2xl md:text-3xl font-light leading-relaxed text-[#e8e2d9] italic mb-8">
            Each event is a new and exciting opportunity to create something extraordinary — and a privilege I never take for granted.
          </p>
          <div className="w-10 h-px bg-[#c9a84c] mx-auto mb-6" />
          <p className="text-[#c9a84c] tracking-[0.4em] text-xs">— AVICAM GITLIN</p>
        </div>
      </section>

      <div style={{ height: "60px", background: "linear-gradient(to bottom, #0f0e0c, #f5f0e8)" }} />

      {/* CTA */}
      <section className="py-16 md:py-28 px-6 text-center bg-[#f5f0e8]">
        <div className="max-w-xl mx-auto">
          <p className="text-[#c9a84c] tracking-[0.4em] text-xs mb-6">WORK WITH AVICAM</p>
          <h2 className="text-4xl font-light mb-8 text-[#1a1813]">Let's Create Something Together</h2>
          <div className="w-10 h-px bg-[#c9a84c] mx-auto mb-8" />
          <p className="text-[#6b5f50] font-light mb-10">Whether you have a clear vision or just a feeling, Avicam would love to hear from you.</p>
          <Link to="/contact" className="inline-block px-12 py-5 bg-[#c9a84c] text-black text-xs tracking-[0.3em] hover:bg-[#e0c070] transition-colors font-semibold">GET IN TOUCH</Link>
        </div>
      </section>

      <Footer />
      <ChatWidget />
    </div>
  );
}