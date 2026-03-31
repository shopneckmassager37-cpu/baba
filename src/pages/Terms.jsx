import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ChatWidget from "./ChatWidget";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

const LOGO = "https://media.base44.com/images/public/69caab40b61d6ee7c5b75332/9d7fead75_generated_image.png";
const NAV = [["HOME","/"],["EVENTS","/events"],["HOW WE WORK","/process"],["ABOUT","/about"],["CONTACT","/contact"]];

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#161616]/95 backdrop-blur-md border-b border-[#c9a84c]/20">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <img src={LOGO} alt="logo" className="h-11 w-11 object-contain" />
          <span className="text-lg tracking-[0.3em] text-[#c9a84c] font-light hidden sm:block">AVICAM GITLIN</span>
        </Link>
        <div className="hidden md:flex gap-8 text-xs tracking-[0.2em] text-gray-300">
          {NAV.map(([l,h]) => <Link key={l} to={h} className="hover:text-[#c9a84c] transition-colors">{l}</Link>)}
        </div>
        <Link to="/contact" className="hidden md:block px-5 py-2 border border-[#c9a84c] text-[#c9a84c] text-xs tracking-[0.2em] hover:bg-[#c9a84c]/10 transition-colors">INQUIRE</Link>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-[#111] border-t border-[#c9a84c]/15 pt-14 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={LOGO} alt="logo" className="h-10 w-10 object-contain" />
              <span className="text-[#c9a84c] text-base tracking-[0.3em] font-light">AVICAM GITLIN</span>
            </div>
            <p className="text-gray-400 text-sm font-light leading-relaxed">Bespoke private events and extraordinary celebrations, crafted for discerning individuals worldwide.</p>
          </div>
          <div>
            <p className="text-gray-500 text-xs tracking-[0.3em] mb-4">NAVIGATION</p>
            <div className="flex flex-col gap-2">
              {NAV.map(([l,h]) => <Link key={l} to={h} className="text-gray-400 text-sm font-light hover:text-[#c9a84c] transition-colors">{l}</Link>)}
              <Link to="/terms" className="text-[#c9a84c] text-sm font-light">Terms & Policies</Link>
            </div>
          </div>
          <div>
            <p className="text-gray-500 text-xs tracking-[0.3em] mb-4">CONNECT</p>
            <div className="space-y-2 text-gray-400 text-sm font-light mb-5">
              <p>+1 (347) 994-9284</p>
              <p className="text-xs break-all">avicam@kosherculinarytravel.com</p>
            </div>
          </div>
        </div>
        <div className="border-t border-[#c9a84c]/10 pt-6 text-center">
          <p className="text-gray-600 text-xs">© 2025 Avicam Gitlin Private Events. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

const sections = [
  {
    title: "Booking & Confirmation",
    icon: "01",
    content: [
      "All events are confirmed upon receipt of a signed agreement and the required deposit payment.",
      "A non-refundable deposit of 30% of the total event fee is required to secure your date and begin the planning process.",
      "The remaining balance is due no later than 60 days prior to the event date, unless otherwise agreed in writing.",
      "Avicam Gitlin Private Events reserves the right to decline any booking at its sole discretion."
    ]
  },
  {
    title: "Cancellation Policy",
    icon: "02",
    content: [
      "**More than 120 days before the event:** Cancellation fee of 30% of total event value (deposit forfeited).",
      "**60–120 days before the event:** Cancellation fee of 50% of total event value.",
      "**30–59 days before the event:** Cancellation fee of 75% of total event value.",
      "**Fewer than 30 days before the event:** Cancellation fee of 100% of total event value.",
      "All cancellation requests must be submitted in writing to avicam@kosherculinarytravel.com.",
      "Third-party vendor cancellation fees (venues, entertainment, transportation, etc.) are separate and may apply in addition to the above."
    ]
  },
  {
    title: "Changes & Modifications",
    icon: "03",
    content: [
      "Minor changes to event details (guest count adjustments of up to 10%, timing changes) may be accommodated at no additional charge if made more than 60 days in advance.",
      "Significant changes to scope, destination, or guest count may result in revised pricing.",
      "All modifications must be agreed upon in writing and reflected in a revised contract addendum.",
      "Changes requested within 30 days of the event are subject to availability and may incur additional fees."
    ]
  },
  {
    title: "Travel & Destination Events",
    icon: "04",
    content: [
      "For destination events, clients are responsible for arranging their own international travel and travel insurance unless a full travel management package has been agreed.",
      "Avicam Gitlin Private Events strongly recommends comprehensive travel insurance covering trip cancellation, medical emergencies, and evacuation.",
      "Force majeure events (natural disasters, governmental travel restrictions, pandemics, etc.) will be handled on a case-by-case basis. We will make every effort to reschedule rather than cancel.",
      "In the event of government-imposed travel restrictions that prevent the event from taking place, a credit toward a future event will be offered in lieu of a refund.",
      "Clients are responsible for ensuring valid travel documentation (passports, visas, health certificates) for all guests."
    ]
  },
  {
    title: "Vendor & Third-Party Services",
    icon: "05",
    content: [
      "Avicam Gitlin Private Events works with a curated network of premium third-party vendors. While we carefully vet all partners, we cannot be held liable for the independent actions of third-party service providers.",
      "All vendor contracts are subject to their individual terms and conditions.",
      "In the rare event that a confirmed vendor becomes unavailable, we will make every effort to arrange a suitable replacement of equivalent quality.",
      "Clients wishing to use their own vendors must receive prior written approval. Additional coordination fees may apply."
    ]
  },
  {
    title: "Privacy & Confidentiality",
    icon: "06",
    content: [
      "Avicam Gitlin Private Events operates with complete confidentiality. Client information, event details, and personal data are never shared with third parties without explicit written consent.",
      "Event photography and footage will not be used for promotional purposes without prior written approval from the client.",
      "All team members and vendors are bound by confidentiality agreements.",
      "Client data is stored securely and used solely for the purposes of event planning and delivery."
    ]
  },
  {
    title: "Limitation of Liability",
    icon: "07",
    content: [
      "Avicam Gitlin Private Events' total liability for any claim arising from our services shall not exceed the total fees paid for the specific event in question.",
      "We are not liable for indirect, consequential, or incidental damages.",
      "These terms are governed by the laws of the State of New York, USA.",
      "Any disputes shall first be addressed through good-faith negotiation. If unresolved, disputes shall be submitted to binding arbitration in New York."
    ]
  }
];

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#161616] text-white" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
      <ScrollToTop />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center border-b border-[#c9a84c]/10">
        <div className="max-w-2xl mx-auto">
          <p className="text-[#c9a84c] tracking-[0.5em] text-xs mb-6">LEGAL & POLICIES</p>
          <h1 className="text-4xl md:text-5xl font-light mb-6">Terms, Policies &<br />Cancellation Conditions</h1>
          <div className="w-12 h-px bg-[#c9a84c] mx-auto mb-8" />
          <p className="text-gray-500 font-light text-sm leading-relaxed">
            Last updated: January 2025. These terms govern all events planned and produced by Avicam Gitlin Private Events. Please read carefully before confirming your booking.
          </p>
        </div>
      </section>

      {/* Quick nav */}
      <section className="py-10 px-6 bg-[#1a1a1a] border-b border-[#c9a84c]/10">
        <div className="max-w-4xl mx-auto flex flex-wrap gap-3 justify-center">
          {sections.map((s,i) => (
            <a key={i} href={`#section-${i}`} className="text-xs text-gray-400 border border-[#c9a84c]/20 px-4 py-2 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors tracking-wide">
              {s.title}
            </a>
          ))}
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          {sections.map((s,i) => (
            <div key={i} id={`section-${i}`} className="grid grid-cols-[60px_1fr] gap-8">
              <div className="text-4xl font-light text-[#c9a84c]/20 leading-none pt-1">{s.icon}</div>
              <div>
                <h2 className="text-2xl font-light mb-4 text-white">{s.title}</h2>
                <div className="w-8 h-px bg-[#c9a84c]/40 mb-6" />
                <ul className="space-y-4">
                  {s.content.map((item,j) => (
                    <li key={j} className="flex gap-3 text-gray-400 font-light leading-relaxed text-sm">
                      <span className="text-[#c9a84c] mt-1.5 flex-shrink-0">·</span>
                      <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-300">$1</strong>') }} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact for questions */}
      <section className="py-20 px-6 bg-[#1a1a1a] text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-[#c9a84c] tracking-[0.4em] text-xs mb-4">QUESTIONS?</p>
          <h2 className="text-2xl font-light mb-6">We're Happy to Clarify</h2>
          <p className="text-gray-500 font-light text-sm mb-8">If you have any questions about these terms, please don't hesitate to reach out directly.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:avicam@kosherculinarytravel.com" className="px-8 py-3 border border-[#c9a84c] text-[#c9a84c] text-xs tracking-[0.2em] hover:bg-[#c9a84c]/10 transition-colors">EMAIL US</a>
            <Link to="/contact" className="px-8 py-3 bg-[#c9a84c] text-black text-xs tracking-[0.3em] hover:bg-[#e0c070] transition-colors font-semibold">CONTACT PAGE</Link>
          </div>
        </div>
      </section>

      <Footer />
      <ChatWidget />
    </div>
  );
}
