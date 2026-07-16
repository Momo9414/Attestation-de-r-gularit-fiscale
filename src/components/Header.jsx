import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const navButtons = [
    {
      label: "Immat. entreprises non résidentes",
      color: "border-[#a855f7] text-[#7c3aed] hover:bg-purple-50/50",
      textColor: "text-[#7c3aed]",
      icon: (
        <svg className="w-4 h-4 text-[#a855f7] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94-3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      )
    },
    {
      label: "Entreprises",
      color: "border-[#10b981] text-[#059669] hover:bg-emerald-50/50",
      textColor: "text-[#059669]",
      icon: (
        <svg className="w-4 h-4 text-[#10b981] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75H21m-3 3.75H21m-3 3.75H21" />
        </svg>
      )
    },
    {
      label: "Experts-comptables",
      color: "border-[#3b82f6] text-[#2563eb] hover:bg-blue-50/50",
      textColor: "text-[#2563eb]",
      icon: (
        <svg className="w-4 h-4 text-[#3b82f6] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      )
    },
    {
      label: "CGA",
      color: "border-[#ef4444] text-[#dc2626] hover:bg-rose-50/50",
      textColor: "text-[#dc2626]",
      icon: (
        <svg className="w-4 h-4 text-[#ef4444] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      )
    },
    {
      label: "Particuliers",
      color: "border-[#f97316] text-[#ea580c] hover:bg-orange-50/50",
      textColor: "text-[#ea580c]",
      icon: (
        <svg className="w-4 h-4 text-[#f97316] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      )
    },
    {
      label: "FNE",
      color: "border-[#7f1d1d] text-[#7f1d1d] hover:bg-red-50/50",
      textColor: "text-[#7f1d1d]",
      icon: (
        <svg className="w-4 h-4 text-[#7f1d1d] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.03 0 1.9.693 2.166 1.638m-7.377 2.24A9.019 9.019 0 019 12.001c0 1.637-.443 3.17-1.217 4.492m1.217-4.492A9.02 9.02 0 019 6.002C9 4.364 8.557 2.83 7.783 1.508M15.623 21h-6.246a2.25 2.25 0 01-2.23-1.94L5.624 6.397a2.25 2.25 0 011.75-2.507A48.11 48.11 0 0112 3.375c1.554 0 3.086.073 4.603.215a2.25 2.25 0 011.772 2.518l-1.522 12.664a2.25 2.25 0 01-2.23 1.94z" />
        </svg>
      )
    }
  ];

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm w-full">
      {/* Top flag bar (Orange, White, Green bands) */}
      <div className="h-1.5 w-full flex">
        <div className="h-full w-1/3 bg-[#f97316]"></div> {/* Orange */}
        <div className="h-full w-1/3 bg-white"></div>     {/* White */}
        <div className="h-full w-1/3 bg-[#059669]"></div> {/* Green */}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Header Container */}
        <div className="flex flex-col lg:flex-row justify-between items-center py-4 lg:h-24 gap-4 lg:gap-8">
          
          {/* Logo & Coat of Arms Section */}
          <div className="flex items-center gap-3 select-none flex-shrink-0 w-full lg:w-auto justify-between lg:justify-start">
            <a href="/" className="flex items-center gap-3">
              {/* Côte d'Ivoire Coat of Arms SVG */}
              <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center bg-[#fef3c7] rounded-xl border border-amber-200 p-0.5 shadow-sm">
                <svg viewBox="0 0 100 100" className="w-full h-full text-amber-700" fill="currentColor">
                  {/* Sun rays top */}
                  <path d="M50,5 L50,15 M35,8 L40,17 M65,8 L60,17 M22,14 L30,20 M78,14 L70,20 M14,24 L24,28 M86,24 L76,28" stroke="#b45309" strokeWidth="3" strokeLinecap="round" />
                  {/* Left Palm Tree */}
                  <path d="M22,35 C18,40 18,60 26,75" fill="none" stroke="#d97706" strokeWidth="4.5" strokeLinecap="round" />
                  <path d="M15,35 Q22,38 28,36" fill="none" stroke="#d97706" strokeWidth="2.5" />
                  <path d="M17,45 Q24,47 28,43" fill="none" stroke="#d97706" strokeWidth="2.5" />
                  <path d="M19,55 Q26,57 28,51" fill="none" stroke="#d97706" strokeWidth="2.5" />
                  {/* Right Palm Tree */}
                  <path d="M78,35 C82,40 82,60 74,75" fill="none" stroke="#d97706" strokeWidth="4.5" strokeLinecap="round" />
                  <path d="M85,35 Q78,38 72,36" fill="none" stroke="#d97706" strokeWidth="2.5" />
                  <path d="M83,45 Q76,47 72,43" fill="none" stroke="#d97706" strokeWidth="2.5" />
                  <path d="M81,55 Q74,57 72,51" fill="none" stroke="#d97706" strokeWidth="2.5" />
                  {/* Shield shape */}
                  <path d="M32,25 C32,25 32,65 50,85 C68,65 68,25 68,25 Z" fill="#059669" stroke="#b45309" strokeWidth="2" />
                  {/* Elephant head inside */}
                  <circle cx="50" cy="50" r="13" fill="#fff" />
                  {/* Ears */}
                  <path d="M38,48 C34,42 42,38 46,45" fill="#fff" />
                  <path d="M62,48 C66,42 58,38 54,45" fill="#fff" />
                  {/* Trunk */}
                  <path d="M47,56 Q50,72 52,72 Q54,72 53,56" fill="#fff" stroke="#94a3b8" strokeWidth="1" />
                  {/* Tusks */}
                  <path d="M43,58 Q46,65 47,60" fill="none" stroke="#d97706" strokeWidth="2" />
                  <path d="M57,58 Q54,65 53,60" fill="none" stroke="#d97706" strokeWidth="2" />
                  {/* Gold banner ribbon bottom */}
                  <path d="M20,85 L80,85 L75,93 L25,93 Z" fill="#d97706" />
                  <text x="50" y="91" fontSize="6" fontWeight="bold" fill="#fff" textAnchor="middle">UNION - DISCIPLINE - TRAVAIL</text>
                </svg>
              </div>

              {/* Logo text & colored underlines */}
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-xl sm:text-2xl tracking-tight text-slate-800 flex items-baseline">
                  <span>e-impots</span>
                  <span className="text-[#059669]">.gouv.ci</span>
                </span>
                
                {/* Horizontal Underlines */}
                <div className="h-[2px] w-full flex mt-0.5">
                  <div className="bg-[#f97316] w-3/4"></div>
                  <div className="bg-[#059669] w-1/4"></div>
                </div>

                <span className="text-[#f97316] font-sans font-bold text-[8px] sm:text-[9.5px] tracking-wide mt-1">
                  Portail fiscal officiel de Côte d'Ivoire
                </span>
              </div>
            </a>

            {/* Language toggle shown on mobile header right */}
            <div className="flex lg:hidden items-center gap-1.5 text-[10px] font-bold text-slate-400">
              <span className="text-[#059669]">FR</span>
              <span className="text-slate-300">|</span>
              <span className="hover:text-slate-800 cursor-pointer">EN</span>
            </div>
          </div>

          {/* Desktop Right Navigation buttons */}
          <div className="hidden lg:flex items-center gap-2 flex-wrap max-w-4xl justify-end">
            {navButtons.map((btn, index) => (
              <button
                key={index}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md border ${btn.color} font-sans font-bold text-xs transition-all duration-200 hover:scale-[1.02] shadow-sm bg-white cursor-pointer`}
              >
                {btn.icon}
                <span className={btn.textColor}>{btn.label}</span>
              </button>
            ))}

            <div className="flex items-center gap-1 text-xs font-bold text-slate-400 ml-4 pl-4 border-l border-slate-200">
              <span className="text-[#059669] cursor-pointer">FR</span>
              <span className="text-slate-300">|</span>
              <span className="hover:text-slate-800 cursor-pointer">EN</span>
            </div>
          </div>

        </div>

        {/* Mobile Horizontal Scrollable Buttons Container */}
        <div className="lg:hidden w-full overflow-x-auto py-2.5 border-t border-slate-100 flex gap-2 no-scrollbar scroll-smooth">
          {navButtons.map((btn, index) => (
            <button
              key={index}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-md border ${btn.color} font-sans font-bold text-[11px] whitespace-nowrap bg-white flex-shrink-0 shadow-sm`}
            >
              {btn.icon}
              <span className={btn.textColor}>{btn.label}</span>
            </button>
          ))}
        </div>

      </div>
    </header>
  );
}
