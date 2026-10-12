import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Closing section matching user prompt */}
      <section id="legacy" className="py-24 text-center border-b border-white/10 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#edc47e] mb-4">
            <span className="w-6 h-[1px] bg-[#edc47e]" />
            <span>His legacy lives on</span>
            <span className="w-6 h-[1px] bg-[#edc47e]" />
          </div>

          <h2 className="font-serif-title text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#f8f4ec] leading-[1.12] max-w-3xl mx-auto mb-6">
            He left us more than memories. <br />
            <span className="text-[#edc47e] italic font-serif">He left us a mission.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#bac6d5] max-w-xl mx-auto font-light leading-relaxed mb-8">
            To dream with courage. To learn with humility. To serve with unwavering integrity. And to help build an enlightened future in which every child has wings to fly.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#edc47e] text-[#142033] font-bold text-sm hover:bg-[#f2c985] hover:-translate-y-0.5 active:translate-y-0 transition-all shadow-[0_8px_25px_rgba(237,196,126,0.2)]"
          >
            <span>Back to the beginning</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Footer bar */}
      <footer className="py-8 bg-[#060b14] text-xs text-[#bac6d5]/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span>In respectful memory of</span>
            <span className="font-serif text-[#f8f4ec] font-semibold">Dr. A. P. J. Abdul Kalam</span>
            <span>(1931–2015)</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-center sm:text-right">
            <span>
              Portraits courtesy of{' '}
              <a
                href="https://commons.wikimedia.org/wiki/Category:Portraits_of_A._P._J._Abdul_Kalam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#edc47e] hover:underline"
              >
                Wikimedia Commons
              </a>
            </span>
            <span>·</span>
            <span className="text-[#bac6d5]/50">
              National tribute and educational archival resource
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};
