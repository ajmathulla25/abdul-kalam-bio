import React, { useState } from 'react';
import { ArrowUpRight, Volume2, VolumeX, Sparkles, Flame, Check } from 'lucide-react';

interface HeroProps {
  onExploreClick?: () => void;
  onTributeClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onTributeClick }) => {
  const [imageError, setImageError] = useState(false);
  const [imgSrc, setImgSrc] = useState<string>(
    'https://upload.wikimedia.org/wikipedia/commons/e/ec/A._P._J._Abdul_Kalam_%28cropped%29.jpg'
  );
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [copiedQuote, setCopiedQuote] = useState(false);

  const heroQuote =
    'Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.';

  const handleImageError = () => {
    if (imgSrc.includes('cropped')) {
      // Try secondary Wikimedia photo
      setImgSrc('https://upload.wikimedia.org/wikipedia/commons/b/b0/A._P._J._Abdul_Kalam_in_2008.jpg');
    } else {
      setImageError(true);
    }
  };

  const handleSpeakQuote = () => {
    if (!('speechSynthesis' in window)) return;
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(heroQuote);
    utterance.rate = 0.95;
    utterance.pitch = 0.95;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  const handleCopyQuote = () => {
    navigator.clipboard.writeText(`"${heroQuote}" — Dr. A.P.J. Abdul Kalam`);
    setCopiedQuote(true);
    setTimeout(() => setCopiedQuote(false), 2000);
  };

  return (
    <section id="home" className="relative min-h-[640px] pt-12 pb-20 overflow-hidden">
      {/* Background celestial glow effects */}
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-[#edc47e]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] items-center gap-12 lg:gap-14">
          {/* Left Column: Copy & Actions */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#edc47e]">
              <span className="w-8 h-[1px] bg-[#edc47e]" />
              <span>The People's President · 1931–2015</span>
            </div>

            <h1 className="font-serif-title text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.06] tracking-tight font-medium text-[#f8f4ec]">
              A life that <br className="hidden sm:inline" />
              taught India to <br className="hidden sm:inline" />
              <span className="italic text-[#edc47e] font-serif">dream.</span>
            </h1>

            <p className="text-base sm:text-lg leading-relaxed text-[#bac6d5] max-w-xl font-light">
              Remembering Dr. Avul Pakir Jainulabdeen Abdul Kalam — aerospace scientist, teacher, author, and the eleventh President of India. His supreme mission was to ignite the fire of curiosity in young minds to build a self-reliant nation.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#journey"
                onClick={onExploreClick}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#edc47e] text-[#142033] font-bold text-sm hover:bg-[#f2c985] hover:-translate-y-0.5 active:translate-y-0 transition-all shadow-[0_8px_25px_rgba(237,196,126,0.18)]"
              >
                <span>Explore His Journey</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#tribute"
                onClick={onTributeClick}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-white/15 text-[#f8f4ec] font-semibold text-sm hover:border-[#edc47e] hover:text-[#edc47e] hover:-translate-y-0.5 transition-all bg-white/[0.02]"
              >
                <Flame className="w-4 h-4 text-[#edc47e]" />
                <span>Pay Tribute</span>
              </a>

              <a
                href="#quotes"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg text-xs text-[#bac6d5] hover:text-[#edc47e] transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#edc47e]" />
                <span>Daily Wisdom</span>
              </a>
            </div>

            {/* Quick summary badges */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap gap-4 text-xs text-[#bac6d5]">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#edc47e]" />
                Missile Man of India
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#edc47e]" />
                Bharat Ratna Laureate
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#edc47e]" />
                Lifelong Teacher
              </span>
            </div>
          </div>

          {/* Right Column: Hero Portrait Artwork */}
          <div className="relative max-w-[480px] w-full mx-auto lg:ml-auto lg:mr-0 pt-6 sm:pt-0">
            {/* Outer Orbit Halo */}
            <div className="absolute -inset-4 sm:-inset-5 border border-[#edc47e]/30 rounded-t-[240px] rounded-b-2xl pointer-events-none animate-orbit shadow-[0_0_50px_rgba(237,196,126,0.08)]" />

            {/* Floating Quote Chip */}
            <div className="absolute -left-4 sm:-left-10 top-12 z-20 max-w-[210px] sm:max-w-[230px] bg-[#f7f0e3] text-[#162238] p-4 sm:p-5 rounded-lg shadow-[0_20px_45px_rgba(0,0,0,0.5)] animate-float border border-[#edc47e]/40">
              <p className="font-serif-title text-xs sm:text-sm leading-snug font-medium italic">
                “{heroQuote}”
              </p>
              <div className="mt-3 flex items-center justify-between border-t border-[#7a6443]/20 pt-2 text-[10px] tracking-wider uppercase font-bold text-[#7a6443]">
                <span>A.P.J. Abdul Kalam</span>
                <div className="flex items-center gap-1">
                  <button
                    onClick={handleSpeakQuote}
                    title={isSpeaking ? 'Stop speech' : 'Listen to quote'}
                    aria-label="Listen to quote"
                    className="p-1 rounded hover:bg-[#162238]/10 text-[#162238] transition-colors"
                  >
                    {isSpeaking ? (
                      <VolumeX className="w-3.5 h-3.5 text-amber-700 animate-pulse" />
                    ) : (
                      <Volume2 className="w-3.5 h-3.5" />
                    )}
                  </button>
                  <button
                    onClick={handleCopyQuote}
                    title="Copy quote"
                    aria-label="Copy quote"
                    className="p-1 rounded hover:bg-[#162238]/10 text-[#162238] transition-colors"
                  >
                    {copiedQuote ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : '📋'}
                  </button>
                </div>
              </div>
            </div>

            {/* Main Portrait Arch Frame */}
            <div className="group relative h-[460px] sm:h-[510px] w-full rounded-t-[220px] rounded-b-xl overflow-hidden bg-[#101e32] border border-[#edc47e]/40 shadow-[0_30px_90px_rgba(0,0,0,0.6)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_35px_100px_rgba(0,0,0,0.7),0_0_60px_rgba(237,196,126,0.2)]">
              {!imageError ? (
                <img
                  src={imgSrc}
                  alt="Official Portrait of Dr. A. P. J. Abdul Kalam"
                  referrerPolicy="no-referrer"
                  onError={handleImageError}
                  className="w-full h-full object-cover object-[center_20%] saturate-[0.9] group-hover:saturate-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />
              ) : (
                /* Elegant dignified portrait illustration fallback */
                <div className="w-full h-full bg-gradient-to-b from-[#1a2d48] to-[#0a1424] flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-32 h-32 rounded-full border-2 border-[#edc47e] bg-[#edc47e]/10 grid place-items-center mb-6 shadow-[0_0_30px_rgba(237,196,126,0.3)]">
                    <span className="text-5xl">🇮🇳</span>
                  </div>
                  <h3 className="font-serif-title text-2xl font-bold text-[#f8f4ec]">
                    Dr. A. P. J. Abdul Kalam
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-[#edc47e] mt-2">
                    1931 — 2015 · Missile Man of India
                  </p>
                  <p className="text-xs text-[#bac6d5] mt-4 max-w-xs italic">
                    "Dreams are not those which comes while we are sleeping, but dreams are those when you don't sleep before fulfilling them."
                  </p>
                </div>
              )}

              {/* Bottom gradient overlay */}
              <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#080f1d] via-[#080f1d]/70 to-transparent pointer-events-none" />

              {/* Caption at base */}
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <strong className="block font-serif-title text-xl sm:text-2xl font-medium text-[#f8f4ec]">
                  Dr. A. P. J. Abdul Kalam
                </strong>
                <span className="text-xs tracking-widest uppercase text-[#edc47e] font-semibold flex items-center gap-2 mt-1">
                  <span>Scientist</span> · <span>President</span> · <span>Teacher</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
