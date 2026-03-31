import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ChatWidget from "./ChatWidget";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AVICAM = "https://base44.app/api/apps/69caab40b61d6ee7c5b75332/files/mp/public/69caab40b61d6ee7c5b75332/129dab6d3_avicam_photo.jpg";
const KITCHEN = "https://media.base44.com/images/public/69caab40b61d6ee7c5b75332/45a3420cd_image.png";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

const TICKER_ITEMS = ["Weddings","Bar & Bat Mitzvahs","Fundraising Galas","Corporate Events","VIP Experiences","Milestone Celebrations","Sailing Journeys","Heritage Journeys","Destination Celebrations","Private Events"];

function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="bg-[#c9a84c] py-3 overflow-hidden whitespace-nowrap select-none">
      <div className="inline-flex" style={{ animation: "ticker 32s linear infinite" }}>
        {items.map((t, i) => (
          <span key={i} className="text-black text-xs tracking-[0.25em] whitespace-nowrap px-7 font-medium">✦ {t.toUpperCase()}</span>
        ))}
      </div>
      <style>{`@keyframes ticker { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }`}</style>
    </div>
  );
}

export { ScrollToTop, Ticker };

export default function Home() {
  return (
    <div className="min-h-screen bg-[#161616] text-white" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
      <ScrollToTop />
      <Navbar active="HOME" />

      {/* ─── HERO ─── */}
      <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: "88vh" }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&q=80')` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/40 to-[#161616]" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-[#c9a84c] tracking-[0.6em] text-xs mb-5 font-light">PRIVATE EVENTS · BESPOKE CELEBRATIONS · WORLDWIDE</p>
          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-6 tracking-wide">
            Your Moment.<br /><span className="text-[#c9a84c] italic">Crafted to Perfection.</span>
          </h1>
          <p className="text-gray-300 text-base font-light leading-relaxed mb-10 max-w-xl mx-auto">
            Weddings, galas, corporate events, and VIP celebrations —
            designed exclusively for those who demand the extraordinary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="px-10 py-4 bg-[#c9a84c] text-black text-xs tracking-[0.3em] hover:bg-[#e0c070] transition-colors font-semibold">PLAN YOUR EVENT</Link>
            <Link to="/events" className="px-10 py-4 border border-white/40 text-white text-xs tracking-[0.3em] hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors">EXPLORE EVENTS</Link>
          </div>
        </div>
      </section>

      {/* ─── TICKER ─── */}
      <Ticker />

      {/* ─── INTRO ─── */}
      <section className="py-20 px-6 bg-[#161616]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#c9a84c] tracking-[0.5em] text-xs mb-5">THE AVICAM GITLIN DIFFERENCE</p>
          <h2 className="text-3xl md:text-4xl font-light leading-relaxed mb-5">
            Every event is once-in-a-lifetime.<br /><span className="text-gray-400">We treat it that way.</span>
          </h2>
          <div className="w-12 h-px bg-[#c9a84c] mx-auto mb-6" />
          <p className="text-gray-400 text-base font-light leading-relaxed max-w-2xl mx-auto">
            Over a decade producing bespoke private events across the world's most spectacular destinations. Unmatched expertise, impeccable discretion, and a deeply personal touch — every single time.
          </p>
        </div>
      </section>

      {/* ─── EVENT TYPES GRID ─── */}
      <section className="px-6 pb-16 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center pt-16 mb-10">
            <p className="text-[#c9a84c] tracking-[0.4em] text-xs mb-3">WHAT WE CREATE</p>
            <h2 className="text-2xl md:text-3xl font-light">Private Events of Every Kind</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mb-6">
            {[
              { title: "Weddings & Celebrations", desc: "Destination weddings in the world's most breathtaking settings — Tuscany, Greek islands, Swiss Alps.", img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80" },
              { title: "Galas & Fundraisers", desc: "High-impact fundraising galas and VIP evenings that inspire, connect, and leave a lasting impression.", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80" },
              { title: "Corporate & VIP", desc: "Executive retreats, product launches, incentive trips — produced at the highest level, anywhere in the world.", img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80" }
            ].map((s,i) => (
              <Link key={i} to="/events" className="group relative overflow-hidden block" style={{ height: "360px" }}>
                <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-lg font-light tracking-wide mb-2">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3 font-light">{s.desc}</p>
                  <span className="text-[#c9a84c] text-xs tracking-[0.3em] border-b border-[#c9a84c]/40 pb-1">EXPLORE →</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link to="/events" className="inline-block px-10 py-3 border border-[#c9a84c]/40 text-[#c9a84c] text-xs tracking-[0.3em] hover:bg-[#c9a84c]/10 transition-colors">VIEW ALL EVENTS</Link>
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="py-14 px-6 border-y border-[#c9a84c]/10 bg-[#161616]">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[{num:"15+",label:"Years of Excellence"},{num:"500+",label:"Events Worldwide"},{num:"30+",label:"Destinations"},{num:"100%",label:"Bespoke"}].map((s,i) => (
            <div key={i}>
              <div className="text-4xl text-[#c9a84c] font-light mb-1">{s.num}</div>
              <div className="text-gray-400 text-xs tracking-[0.2em]">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SIGNATURE EXPERIENCES ─── */}
      <section className="py-20 px-6 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#c9a84c] tracking-[0.4em] text-xs mb-3">SIGNATURE EXPERIENCES</p>
            <h2 className="text-3xl font-light">Extraordinary Events, Every Season</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Destination Weddings",
                sub: "Italy · Greece · Switzerland · Caribbean",
                img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=80",
                desc: "From intimate ceremonies in Tuscan villas to grand celebrations on Greek island estates, every destination wedding we produce is a masterclass in beauty, precision, and emotion. We handle everything — the venue, the florals, the entertainment, the logistics — so you can be fully present for every moment."
              },
              {
                title: "Sailing Journeys",
                sub: "Mediterranean · Adriatic · Caribbean",
                img: "https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=900&q=80",
                desc: "Wake up somewhere extraordinary every day aboard a private charter. We produce exclusive sailing events through the Mediterranean and beyond — combining breathtaking destinations, curated programming, and seamless on-board service for groups seeking something truly unforgettable."
              },
              {
                title: "Heritage & Cultural Journeys",
                sub: "Europe · Israel · North Africa",
                img: "https://images.unsplash.com/photo-1548013146-72479768bada?w=900&q=80",
                desc: "Meaningful group journeys that combine history, culture, and connection. We guide groups through iconic destinations and heritage sites with expert educators and a deeply personal touch — creating shared experiences that go far beyond the ordinary."
              },
              {
                title: "Fundraising Galas",
                sub: "New York · Los Angeles · London · Worldwide",
                img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900&q=80",
                desc: "We produce high-impact fundraising galas that combine compelling storytelling, world-class production, and the kind of atmosphere that inspires generosity. From intimate donor dinners to grand ballroom galas, we help organisations raise more by creating events people genuinely want to attend."
              }
            ].map((exp, i) => (
              <div key={i} className="group bg-[#1d1d1d] border border-[#c9a84c]/10 overflow-hidden hover:border-[#c9a84c]/30 transition-colors">
                <div className="overflow-hidden h-56">
                  <img src={exp.img} alt={exp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-7">
                  <p className="text-[#c9a84c] text-xs tracking-[0.3em] mb-2">{exp.sub}</p>
                  <h3 className="text-xl font-light mb-3">{exp.title}</h3>
                  <div className="w-8 h-px bg-[#c9a84c]/30 mb-4" />
                  <p className="text-gray-400 text-sm font-light leading-relaxed mb-5">{exp.desc}</p>
                  <Link to="/contact" className="text-[#c9a84c] text-xs tracking-[0.3em] border-b border-[#c9a84c]/30 pb-1 hover:border-[#c9a84c] transition-colors">ENQUIRE NOW →</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/events" className="inline-block px-10 py-3 border border-[#c9a84c]/40 text-[#c9a84c] text-xs tracking-[0.3em] hover:bg-[#c9a84c]/10 transition-colors">VIEW ALL EVENTS</Link>
          </div>
        </div>
      </section>

      {/* ─── DESTINATIONS ─── */}
      <section className="py-20 px-6 bg-[#161616]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c9a84c] tracking-[0.4em] text-xs mb-3">DESTINATIONS & INSPIRATIONS</p>
            <h2 className="text-3xl font-light">We Go Anywhere You Dream</h2>
            <p className="text-gray-500 text-sm font-light mt-3 max-w-xl mx-auto">From vineyard hillsides to ancient cities, each destination is chosen for its beauty — then transformed into an exceptional experience.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1">
            {[
              { label: "Europe", sub: "Tuscany · Greek Isles · Swiss Alps", img: "/__generating__/img_4cab8201d182.png" },
              { label: "Mediterranean", sub: "Amalfi · Santorini · Croatia", img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&q=80" },
              { label: "North America", sub: "New York · California · Florida", img: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?w=600&q=80" },
              { label: "Morocco & Africa", sub: "Marrakech · Desert · Kasbahs", img: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=600&q=80" }
            ].map((d,i) => (
              <Link key={i} to="/gallery" className="group relative overflow-hidden block" style={{ height: "260px" }}>
                <img src={d.img} alt={d.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-base font-light tracking-wide mb-1">{d.label}</h3>
                  <p className="text-gray-400 text-xs font-light">{d.sub}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── THE AVICAM DIFFERENCE ─── */}
      <section className="py-20 px-6 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#c9a84c] tracking-[0.4em] text-xs mb-3">WHY AVICAM GITLIN</p>
            <h2 className="text-3xl font-light">The Private Events Difference</h2>
            <p className="text-gray-500 text-sm font-light mt-3 max-w-xl mx-auto">We bring together luxury event production, extraordinary destinations, and deeply personal service — in one seamless experience.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "◆", title: "Luxury Without Compromise", text: "Every event is custom-crafted. Hand-picked venues, bespoke programming, and white-glove logistics from first conversation to final moment." },
              { icon: "✦", title: "Genuinely Personal", text: "Avicam personally reads every inquiry and is involved in every event. You will never be handed to a junior team member." },
              { icon: "🌍", title: "Global Expertise", text: "With 15+ years producing events across 30+ countries, we have the relationships and network to make anything possible, anywhere." }
            ].map((d,i) => (
              <div key={i} className="bg-[#161616] border border-[#c9a84c]/10 p-8 text-center hover:border-[#c9a84c]/30 transition-colors">
                <div className="text-[#c9a84c] text-3xl mb-5">{d.icon}</div>
                <h3 className="text-lg font-light mb-3">{d.title}</h3>
                <div className="w-8 h-px bg-[#c9a84c]/25 mx-auto mb-4" />
                <p className="text-gray-400 text-sm font-light leading-relaxed">{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MEET AVICAM ─── */}
      <section className="py-20 px-6 bg-[#161616]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img src={AVICAM} alt="Avicam Gitlin" className="w-full h-[500px] object-cover object-top"
              onError={e => e.target.src=KITCHEN} />
            <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm border border-[#c9a84c]/30 px-4 py-2">
              <p className="text-[#c9a84c] text-xs tracking-[0.3em]">AVICAM GITLIN</p>
              <p className="text-gray-400 text-xs mt-0.5">Event Producer · Travel Curator</p>
            </div>
          </div>
          <div>
            <p className="text-[#c9a84c] tracking-[0.4em] text-xs mb-4">MEET AVICAM</p>
            <h2 className="text-3xl font-light leading-tight mb-5">The person behind<br />every extraordinary event.</h2>
            <div className="w-10 h-px bg-[#c9a84c]/50 mb-6" />
            <p className="text-gray-400 font-light leading-relaxed mb-4">
              Avicam Gitlin is a private event producer with over 15 years of experience creating bespoke celebrations across the world's most spectacular destinations — from weddings in Tuscany to galas in New York, sailing journeys in the Mediterranean to cultural heritage tours in Europe.
            </p>
            <p className="text-gray-400 font-light leading-relaxed mb-8">
              His philosophy: every event is personal, every detail matters, and the world's most extraordinary places are available to anyone with the right partner to open the door.
            </p>
            <Link to="/about" className="inline-block px-8 py-3 border border-[#c9a84c] text-[#c9a84c] text-xs tracking-[0.2em] hover:bg-[#c9a84c]/10 transition-colors">READ THE FULL STORY</Link>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS — teaser ─── */}
      <section className="py-20 px-6 bg-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c9a84c] tracking-[0.4em] text-xs mb-3">THE PROCESS</p>
            <h2 className="text-3xl font-light">How We Work</h2>
            <p className="text-gray-500 text-sm font-light mt-3">From first conversation to final moment — every step, handled personally.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {[
              { n: "01", title: "The Conversation", text: "It starts with a personal call — no forms, no templates. Avicam listens to your vision and what you want your event to feel like." },
              { n: "02", title: "Vision & Design", text: "We create a bespoke concept tailored to you — venue, aesthetic, programming, and every creative detail that makes it yours." },
              { n: "03", title: "Flawless Execution", text: "On the day, Avicam and his team manage every detail so you're entirely present — living the experience, not managing it." }
            ].map((s,i) => (
              <div key={i} className="bg-[#161616] border border-[#c9a84c]/10 p-6 hover:border-[#c9a84c]/30 transition-colors">
                <span className="text-5xl font-light text-[#c9a84c]/15 leading-none">{s.n}</span>
                <h3 className="text-base font-light mt-3 mb-2">{s.title}</h3>
                <div className="w-6 h-px bg-[#c9a84c]/30 mb-3" />
                <p className="text-gray-400 text-sm font-light leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/process" className="inline-block px-10 py-3 border border-[#c9a84c]/40 text-[#c9a84c] text-xs tracking-[0.3em] hover:bg-[#c9a84c]/10 transition-colors">SEE THE FULL PROCESS</Link>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative py-28 px-6 text-center overflow-hidden"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1510076857177-7470076d4098?w=1920&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-black/72" />
        <div className="relative z-10 max-w-xl mx-auto">
          <p className="text-[#c9a84c] tracking-[0.5em] text-xs mb-4">LET'S CREATE TOGETHER</p>
          <h2 className="text-4xl md:text-5xl font-light mb-5">Ready to Begin?</h2>
          <div className="w-10 h-px bg-[#c9a84c] mx-auto mb-6" />
          <p className="text-gray-300 font-light mb-10 text-base leading-relaxed max-w-md mx-auto">Every extraordinary event starts with a single conversation. Tell us your vision — we'll do the rest.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-block px-12 py-4 bg-[#c9a84c] text-black text-xs tracking-[0.4em] hover:bg-[#e0c070] transition-colors font-semibold">START THE CONVERSATION</Link>
            <Link to="/process" className="inline-block px-12 py-4 border border-white/40 text-white text-xs tracking-[0.4em] hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors">HOW WE WORK</Link>
          </div>
        </div>
      </section>

      <Footer />
      <ChatWidget />
    </div>
  );
}