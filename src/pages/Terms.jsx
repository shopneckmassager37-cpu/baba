import { useState } from "react";
import { Link } from "react-router-dom";
const LOGO = "https://media.base44.com/images/public/69caab40b61d6ee7c5b75332/9d7fead75_generated_image.png";
const NAV = [["HOME","/"],["EVENTS","/events"],["HOW WE WORK","/process"],["ABOUT","/about"],["GALLERY","/gallery"],["CONTACT","/contact"]];

export default function Terms() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{fontFamily:"'Georgia','Times New Roman',serif"}}>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#c9a84c]/20">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3"><img src={LOGO} className="h-12 w-12 object-contain"/><span className="text-xl tracking-[0.25em] text-[#c9a84c] font-light hidden sm:block">AVICAM GITLIN</span></Link>
          <div className="hidden md:flex gap-8 text-xs tracking-[0.2em] text-gray-300">{NAV.map(([l,h])=><Link key={l} to={h} className="hover:text-[#c9a84c] transition-colors">{l}</Link>)}</div>
          <Link to="/contact" className="hidden md:block px-5 py-2 border border-[#c9a84c] text-[#c9a84c] text-xs tracking-[0.2em] hover:bg-[#c9a84c]/10 transition-colors">INQUIRE</Link>
          <button className="md:hidden text-gray-300 hover:text-[#c9a84c]" onClick={()=>setMenuOpen(!menuOpen)}>
            {menuOpen ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-[#0a0a0a] border-t border-[#c9a84c]/10 px-6 py-4 flex flex-col gap-4">
            {NAV.map(([l,h])=><Link key={l} to={h} onClick={()=>setMenuOpen(false)} className="text-gray-300 hover:text-[#c9a84c] transition-colors text-sm tracking-[0.2em]">{l}</Link>)}
            <Link to="/contact" onClick={()=>setMenuOpen(false)} className="mt-2 px-5 py-2 border border-[#c9a84c] text-[#c9a84c] text-xs tracking-[0.2em] text-center hover:bg-[#c9a84c]/10 transition-colors">INQUIRE</Link>
          </div>
        )}
      </nav>
      <section className="pt-36 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#c9a84c] tracking-[0.5em] text-xs mb-6">LEGAL</p>
          <h1 className="text-4xl md:text-5xl font-light mb-6 text-white">Terms & Conditions</h1>
          <div className="w-12 h-px bg-[#c9a84c] mb-12"/>
          <div className="space-y-10 text-gray-400 font-light leading-relaxed">
            {[
              {title:"1. Services",body:"Avicam Gitlin Private Events provides bespoke event planning, production, and management services. All services are subject to a signed service agreement and payment of the applicable deposit as outlined in your personalised proposal."},
              {title:"2. Bookings & Deposits",body:"All bookings require a signed contract and a non-refundable deposit (typically 30–50% of the total event cost). The balance is due according to the payment schedule outlined in your individual service agreement."},
              {title:"3. Cancellation Policy",body:"Cancellations made more than 90 days prior to the event date will forfeit the initial deposit. Cancellations within 60–90 days will forfeit 50% of total fees paid. Cancellations within 60 days will forfeit 100% of fees paid. All cancellations must be submitted in writing."},
              {title:"4. Changes & Amendments",body:"Changes to confirmed bookings are subject to availability and may incur additional charges. Any amendments must be agreed in writing by both parties."},
              {title:"5. Liability",body:"Avicam Gitlin Private Events carries professional liability insurance. We are not liable for events beyond our control including but not limited to force majeure events, natural disasters, government restrictions, or third-party vendor failures."},
              {title:"6. Confidentiality",body:"We treat all client information with the strictest confidentiality. We will never share your personal information or event details with third parties without your explicit written consent."},
              {title:"7. Photography & Media",body:"Unless otherwise agreed in writing, Avicam Gitlin Private Events reserves the right to photograph events for portfolio purposes. Client names and personal details will never be shared without consent."},
              {title:"8. Governing Law",body:"These terms are governed by the laws of the State of New York, USA. Any disputes shall be subject to the exclusive jurisdiction of the courts of New York."},
              {title:"9. Contact",body:"For any questions regarding these terms, please contact us at avicam@kosherculinarytravel.com or call +1 (347) 994-9284."},
            ].map((s,i)=>(
              <div key={i}>
                <h2 className="text-[#e8e8e8] text-lg font-light mb-3 tracking-wide">{s.title}</h2>
                <div className="w-6 h-px bg-[#c9a84c]/30 mb-4"/>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 pt-8 border-t border-[#c9a84c]/15">
            <p className="text-gray-600 text-xs mb-10">Last updated: January 2025 · © 2025 Avicam Gitlin Private Events</p>
          </div>
        </div>
      </section>
      {/* Questions section - CONTACT PAGE only */}
      <section className="py-20 px-6 bg-[#0d0d0d] text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-[#c9a84c] tracking-[0.5em] text-xs mb-4">QUESTIONS?</p>
          <h2 className="text-3xl font-light text-white mb-4">We're Happy to Clarify</h2>
          <p className="text-gray-400 font-light mb-10 text-sm leading-relaxed">If you have any questions about these terms, please don't hesitate to reach out directly.</p>
          <Link to="/contact" className="inline-block px-10 py-4 bg-[#c9a84c] text-black text-xs tracking-[0.3em] hover:bg-[#e0c070] transition-colors font-semibold">CONTACT PAGE</Link>
        </div>
      </section>
      <footer className="bg-[#070707] border-t border-[#c9a84c]/15 py-8 px-6 text-center">
        <p className="text-gray-600 text-xs">© 2025 Avicam Gitlin Private Events. All rights reserved.</p>
      </footer>
    </div>
  );
}
