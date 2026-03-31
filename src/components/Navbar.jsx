import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const LOGO = "https://media.base44.com/images/public/69caab40b61d6ee7c5b75332/9d7fead75_generated_image.png";
const NAV = [["HOME","/"],["EVENTS","/events"],["HOW WE WORK","/process"],["ABOUT","/about"],["CONTACT","/contact"]];

export default function Navbar({ active }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [active]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#111]/95 backdrop-blur-md border-b border-[#c9a84c]/20">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <img src={LOGO} alt="logo" className="h-11 w-11 object-contain" />
            <span className="text-lg tracking-[0.3em] text-[#c9a84c] font-light hidden sm:block">AVICAM GITLIN</span>
          </Link>
          <div className="hidden md:flex gap-8 text-xs tracking-[0.2em] text-gray-300">
            {NAV.map(([l,h]) => (
              <Link key={l} to={h} className={`hover:text-[#c9a84c] transition-colors ${active===l?"text-[#c9a84c]":""}`}>{l}</Link>
            ))}
          </div>
          <Link to="/contact" className="hidden md:block px-5 py-2 border border-[#c9a84c] text-[#c9a84c] text-xs tracking-[0.2em] hover:bg-[#c9a84c]/10 transition-colors">INQUIRE</Link>
          
          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-[#c9a84c] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#c9a84c] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#c9a84c] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile side menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/60 md:hidden" onClick={() => setMenuOpen(false)} />
      )}

      {/* Mobile side menu */}
      <div className={`fixed top-0 right-0 h-full w-72 z-50 bg-[#111] border-l border-[#c9a84c]/20 transform transition-transform duration-300 ease-in-out md:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#c9a84c]/15">
          <span className="text-[#c9a84c] text-sm tracking-[0.3em] font-light">MENU</span>
          <button onClick={() => setMenuOpen(false)} className="w-10 h-10 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
        <div className="flex flex-col px-6 py-8 gap-6">
          {NAV.map(([l,h]) => (
            <Link
              key={l}
              to={h}
              onClick={() => setMenuOpen(false)}
              className={`text-sm tracking-[0.25em] font-light transition-colors ${active===l ? "text-[#c9a84c]" : "text-gray-300 hover:text-[#c9a84c]"}`}
            >
              {l}
            </Link>
          ))}
          <div className="border-t border-[#c9a84c]/15 pt-6 mt-2">
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="block text-center px-6 py-3 bg-[#c9a84c] text-black text-xs tracking-[0.3em] font-semibold hover:bg-[#e0c070] transition-colors"
            >
              INQUIRE NOW
            </Link>
          </div>
          <div className="mt-auto pt-8">
            <p className="text-gray-500 text-xs font-light">+1 (347) 994-9284</p>
            <p className="text-gray-500 text-xs font-light mt-1 break-all">avicam@kosherculinarytravel.com</p>
          </div>
        </div>
      </div>
    </>
  );
}