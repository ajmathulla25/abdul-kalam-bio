import React, { useState } from 'react';
import { Menu, X, Sparkles, BookOpen, Compass, Award, Heart, HelpCircle } from 'lucide-react';

interface NavbarProps {
  onLightLampClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onLightLampClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'His Journey', href: '#journey', icon: Compass },
    { label: 'His Beliefs', href: '#beliefs', icon: Sparkles },
    { label: 'Literary Works', href: '#books', icon: BookOpen },
    { label: 'Inspiring Quotes', href: '#quotes', icon: Sparkles },
    { label: 'Youth Pledge', href: '#pledge', icon: Award },
    { label: 'Memorial Tribute', href: '#tribute', icon: Heart },
    { label: 'Knowledge Quiz', href: '#quiz', icon: HelpCircle },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#080f1d]/90 backdrop-blur-md transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Brand */}
        <a 
          href="#home" 
          className="group flex items-center gap-3 font-semibold tracking-wider text-sm sm:text-base text-[#f8f4ec]"
        >
          <div className="w-9 h-9 rounded-full border border-[#edc47e] grid place-items-center text-[#edc47e] text-lg shadow-[0_0_20px_rgba(237,196,126,0.2)] group-hover:rotate-45 group-hover:bg-[#edc47e]/10 transition-all duration-300">
            ✦
          </div>
          <span className="font-heading font-bold text-xs sm:text-sm tracking-widest text-[#f8f4ec]">
            TRIBUTE TO <span className="text-[#edc47e] font-extrabold">DR. KALAM</span>
          </span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm text-[#bac6d5]">
          {navLinks.slice(0, 5).map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative py-1 hover:text-[#edc47e] transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-[#edc47e] after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#tribute"
            className="px-3.5 py-1.5 rounded-full border border-[#edc47e]/40 text-[#edc47e] text-xs font-semibold hover:bg-[#edc47e] hover:text-[#080f1d] transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(237,196,126,0.15)]"
          >
            <span>🪔</span> Pay Tribute
          </a>
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onLightLampClick}
            aria-label="Light a tribute lamp"
            className="p-2 text-xs rounded-lg border border-[#edc47e]/40 text-[#edc47e] hover:bg-[#edc47e]/10 flex items-center gap-1"
          >
            <span>🪔</span> <span className="hidden sm:inline">Tribute</span>
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-[#f8f4ec] border border-white/10 rounded-lg hover:border-[#edc47e]/50 focus:outline-none focus:ring-2 focus:ring-[#edc47e]"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5 text-[#edc47e]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden border-b border-white/10 bg-[#101e32] px-6 py-5 space-y-3 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="flex items-center gap-3 p-2.5 rounded-lg text-sm text-[#bac6d5] hover:text-[#edc47e] hover:bg-white/5 transition-colors"
                >
                  <Icon className="w-4 h-4 text-[#edc47e]" />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>
          <div className="pt-2 border-t border-white/10 flex justify-between items-center text-xs text-[#bac6d5]">
            <span>1931 — 2015</span>
            <span className="text-[#edc47e]">The People's President</span>
          </div>
        </div>
      )}
    </header>
  );
};
