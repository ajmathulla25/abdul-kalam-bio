import React, { useState } from 'react';
import { QUOTES_DATA, QuoteItem } from '../data/kalamData';
import { Volume2, VolumeX, Shuffle, Copy, Check, Sparkles } from 'lucide-react';

export const QuoteSection: React.FC = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(2); // Starts with "Excellence happens not by accident..."
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const currentQuote: QuoteItem = QUOTES_DATA[currentQuoteIndex];

  const handleNextQuote = () => {
    if (isSpeaking && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
    const nextIdx = (currentQuoteIndex + 1) % QUOTES_DATA.length;
    setCurrentQuoteIndex(nextIdx);
  };

  const handleSpeak = () => {
    if (!('speechSynthesis' in window)) return;
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(currentQuote.quote);
    utterance.rate = 0.92;
    utterance.pitch = 0.95;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(`"${currentQuote.quote}" — Dr. A.P.J. Abdul Kalam`);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2200);
  };

  return (
    <section id="quotes" className="relative py-24 bg-[#111f32] border-y border-white/10 text-center overflow-hidden">
      {/* Decorative orbital watermarks from original design */}
      <div className="absolute -left-36 -top-28 w-80 h-80 rounded-full border border-[#edc47e]/10 pointer-events-none shadow-[0_0_0_25px_rgba(237,196,126,0.02),0_0_0_60px_rgba(237,196,126,0.015)]" />
      <div className="absolute -right-36 -bottom-28 w-80 h-80 rounded-full border border-[#edc47e]/10 pointer-events-none shadow-[0_0_0_25px_rgba(237,196,126,0.02),0_0_0_60px_rgba(237,196,126,0.015)]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Quote Mark */}
        <div className="font-serif text-6xl sm:text-7xl leading-none text-[#edc47e] select-none opacity-80 mb-2">
          “
        </div>

        {/* Theme pill */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#edc47e]/15 border border-[#edc47e]/30 text-[#edc47e] text-xs font-semibold mb-6">
          <Sparkles className="w-3 h-3" />
          <span>{currentQuote.theme}</span>
        </div>

        {/* Blockquote matching user's Georgia font styling */}
        <blockquote className="font-serif-title text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-snug sm:leading-tight text-[#f8f4ec] font-normal min-h-[120px] flex items-center justify-center">
          {currentQuote.quote}
        </blockquote>

        {/* Attribution & Context */}
        <div className="mt-6 mb-8">
          <cite className="not-italic block text-[#edc47e] text-xs sm:text-sm tracking-[0.18em] uppercase font-semibold">
            Dr. A. P. J. Abdul Kalam
          </cite>
          {currentQuote.context && (
            <p className="text-xs text-[#bac6d5] mt-1 font-light italic">
              {currentQuote.context}
            </p>
          )}
        </div>

        {/* Interactive Controls */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={handleSpeak}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold border transition-all ${
              isSpeaking
                ? 'bg-[#edc47e] text-[#142033] border-[#edc47e] shadow-[0_0_20px_rgba(237,196,126,0.4)]'
                : 'border-white/15 text-[#f8f4ec] hover:border-[#edc47e] hover:text-[#edc47e] bg-white/5'
            }`}
            title="Listen to this quote read aloud"
          >
            {isSpeaking ? (
              <>
                <VolumeX className="w-3.5 h-3.5" />
                <span>Stop Voice</span>
              </>
            ) : (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#edc47e]" />
                <span>Listen Quote</span>
              </>
            )}
          </button>

          <button
            onClick={handleNextQuote}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#edc47e] text-[#142033] text-xs font-bold hover:bg-[#f2c985] hover:-translate-y-0.5 active:translate-y-0 transition-all shadow-[0_4px_15px_rgba(237,196,126,0.2)]"
          >
            <Shuffle className="w-3.5 h-3.5" />
            <span>Next Inspiration</span>
          </button>

          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold border border-white/15 text-[#f8f4ec] hover:border-[#edc47e] hover:text-[#edc47e] bg-white/5 transition-all"
            title="Copy quote text"
          >
            {isCopied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Quick Quote Dots Indicator */}
        <div className="flex items-center justify-center gap-1.5 mt-8">
          {QUOTES_DATA.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (isSpeaking && 'speechSynthesis' in window) window.speechSynthesis.cancel();
                setIsSpeaking(false);
                setCurrentQuoteIndex(i);
              }}
              aria-label={`Go to quote ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === currentQuoteIndex
                  ? 'w-6 bg-[#edc47e]'
                  : 'w-1.5 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
