import React, { useState, useEffect } from 'react';
import { Flame, Heart, Send, Sparkles, MessageSquare } from 'lucide-react';

interface TributeMessage {
  id: string;
  name: string;
  location?: string;
  message: string;
  timestamp: string;
  type: 'lamp' | 'flower';
}

const INITIAL_MESSAGES: TributeMessage[] = [
  {
    id: 't1',
    name: 'A Young Engineer',
    location: 'Bengaluru',
    message: 'Thank you Sir for teaching us that our origins never define our destiny. Wings of Fire changed my entire worldview.',
    timestamp: 'Just now',
    type: 'lamp'
  },
  {
    id: 't2',
    name: 'School Teacher',
    location: 'Rameswaram',
    message: 'To the greatest teacher who ever lived. Every student who enters my classroom learns your words: "Excellence is a continuous process."',
    timestamp: 'Earlier today',
    type: 'flower'
  },
  {
    id: 't3',
    name: 'Research Scholar',
    location: 'New Delhi',
    message: 'Salute to the Missile Man of India. Your selflessness and dedication to indigenous science will forever guide our nation.',
    timestamp: 'Yesterday',
    type: 'lamp'
  }
];

export const TributeWall: React.FC = () => {
  const [lampLit, setLampLit] = useState(false);
  const [flowerOffered, setFlowerOffered] = useState(false);
  const [tributeCount, setTributeCount] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('kalam_tribute_count');
      if (saved) return parseInt(saved, 10);
    } catch {
      // fallback
    }
    return 894520; // Millions of citizen tributes
  });

  const [messages, setMessages] = useState<TributeMessage[]>(() => {
    try {
      const saved = localStorage.getItem('kalam_user_tributes');
      if (saved) {
        const parsed = JSON.parse(saved);
        return [...parsed, ...INITIAL_MESSAGES];
      }
    } catch {
      // fallback
    }
    return INITIAL_MESSAGES;
  });

  const [inputName, setInputName] = useState('');
  const [inputLocation, setInputLocation] = useState('');
  const [inputMessage, setInputMessage] = useState('');
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const handleLightLamp = () => {
    if (!lampLit) {
      const nextCount = tributeCount + 1;
      setTributeCount(nextCount);
      setLampLit(true);
      try {
        localStorage.setItem('kalam_tribute_count', nextCount.toString());
        localStorage.setItem('kalam_lamp_lit', 'true');
      } catch {
        // ignore
      }
    }
  };

  const handleOfferFlower = () => {
    if (!flowerOffered) {
      const nextCount = tributeCount + 1;
      setTributeCount(nextCount);
      setFlowerOffered(true);
      try {
        localStorage.setItem('kalam_tribute_count', nextCount.toString());
      } catch {
        // ignore
      }
    }
  };

  const handleAddTribute = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const newMsg: TributeMessage = {
      id: 'custom-' + Date.now(),
      name: inputName.trim() || 'A Grateful Citizen',
      location: inputLocation.trim() || 'India',
      message: inputMessage.trim(),
      timestamp: 'Just now',
      type: lampLit ? 'lamp' : 'flower'
    };

    const updated = [newMsg, ...messages];
    setMessages(updated);
    setInputMessage('');
    setInputName('');
    setInputLocation('');
    setSubmittedMessage(true);

    try {
      const userCustomOnly = updated.filter((m) => m.id.startsWith('custom-'));
      localStorage.setItem('kalam_user_tributes', JSON.stringify(userCustomOnly));
    } catch {
      // ignore
    }

    setTimeout(() => setSubmittedMessage(false), 3000);
  };

  const quickQuotes = [
    'Salute to the Missile Man of India! 🇮🇳',
    'Thank you Sir for teaching me to dream big.',
    'A teacher who lives forever in millions of hearts.'
  ];

  return (
    <section id="tribute" className="py-20 border-b border-white/10 bg-[#091322]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#edc47e] mb-3">
            <span className="w-6 h-[1px] bg-[#edc47e]" />
            <span>Living Memorial</span>
            <span className="w-6 h-[1px] bg-[#edc47e]" />
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#f8f4ec] leading-tight mb-4">
            Offer Your Homage to Dr. Kalam
          </h2>
          <p className="text-sm sm:text-base text-[#bac6d5] font-light leading-relaxed">
            Light a sacred lamp, offer flowers, and leave your personal words of gratitude for the beloved People’s President.
          </p>
        </div>

        {/* Tribute Interactive Hearth */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
          {/* Diya / Lamp Altar */}
          <div className="p-8 sm:p-10 rounded-3xl border border-[#edc47e]/30 bg-gradient-to-b from-[#13243a] to-[#091324] text-center relative overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.6)]">
            <div className="relative z-10">
              {/* Flame / Diya Icon */}
              <div className="relative inline-block mb-6">
                <div
                  className={`w-28 h-28 rounded-full mx-auto grid place-items-center transition-all duration-700 cursor-pointer ${
                    lampLit
                      ? 'bg-amber-500/20 shadow-[0_0_80px_rgba(245,158,11,0.6)] border-2 border-[#edc47e]'
                      : 'bg-white/5 border border-white/10 hover:border-[#edc47e]/50'
                  }`}
                  onClick={handleLightLamp}
                  role="button"
                  tabIndex={0}
                  aria-label="Light the memorial lamp"
                >
                  <span className={`text-5xl transition-transform duration-500 ${lampLit ? 'scale-125 animate-pulse' : 'grayscale opacity-60'}`}>
                    🪔
                  </span>
                </div>

                {lampLit && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold text-[#edc47e] animate-bounce">
                    ✦ Lit with Reverence ✦
                  </div>
                )}
              </div>

              <h3 className="font-serif-title text-2xl font-medium text-[#f8f4ec] mb-2">
                {lampLit ? 'The Eternal Flame of Knowledge' : 'Light a Memorial Lamp'}
              </h3>
              <p className="text-xs sm:text-sm text-[#bac6d5] max-w-sm mx-auto mb-6">
                {lampLit
                  ? 'Your light has been added to millions of citizens honoring Dr. Kalam.'
                  : 'Click the Diya to light a lamp of peace, curiosity, and national service.'}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={handleLightLamp}
                  disabled={lampLit}
                  className={`px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all ${
                    lampLit
                      ? 'bg-[#edc47e]/20 text-[#edc47e] border border-[#edc47e]/40 cursor-default'
                      : 'bg-[#edc47e] text-[#142033] hover:bg-[#f2c985] shadow-[0_4px_20px_rgba(237,196,126,0.3)]'
                  }`}
                >
                  <Flame className="w-4 h-4" />
                  <span>{lampLit ? 'Lamp Lit in Homage' : 'Light the Diya'}</span>
                </button>

                <button
                  onClick={handleOfferFlower}
                  disabled={flowerOffered}
                  className={`px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all ${
                    flowerOffered
                      ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 cursor-default'
                      : 'border border-white/15 text-[#f8f4ec] hover:border-rose-400 hover:text-rose-300 bg-white/5'
                  }`}
                >
                  <Heart className="w-4 h-4 text-rose-400" />
                  <span>{flowerOffered ? 'Rose Offered' : 'Offer a Rose'}</span>
                </button>
              </div>

              {/* Total Homage Counter */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-center gap-3">
                <span className="text-xs uppercase tracking-wider text-[#bac6d5]">
                  Total Homages Offered:
                </span>
                <span className="font-mono text-base font-bold text-[#edc47e] bg-black/40 px-3 py-1 rounded-md border border-[#edc47e]/30">
                  {tributeCount.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* Form to leave a message */}
          <div className="p-7 sm:p-8 rounded-3xl border border-white/10 bg-[#101e32]/70 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="w-5 h-5 text-[#edc47e]" />
                <h4 className="font-serif-title text-xl font-semibold text-[#f8f4ec]">
                  Leave Your Message on the Memorial Wall
                </h4>
              </div>

              {/* Quick suggestion pills */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {quickQuotes.map((q, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setInputMessage(q)}
                    className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/10 text-[#bac6d5] hover:text-[#edc47e] border border-white/10 transition-colors text-left"
                  >
                    + {q}
                  </button>
                ))}
              </div>

              <form onSubmit={handleAddTribute} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Your Name (or Student / Citizen)"
                    value={inputName}
                    onChange={(e) => setInputName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/30 border border-white/15 text-xs text-[#f8f4ec] placeholder-[#bac6d5]/50 focus:outline-none focus:border-[#edc47e]"
                  />
                  <input
                    type="text"
                    placeholder="City or School / College"
                    value={inputLocation}
                    onChange={(e) => setInputLocation(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/30 border border-white/15 text-xs text-[#f8f4ec] placeholder-[#bac6d5]/50 focus:outline-none focus:border-[#edc47e]"
                  />
                </div>

                <textarea
                  rows={3}
                  required
                  placeholder="Share how Dr. Kalam inspired you..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-black/30 border border-white/15 text-xs text-[#f8f4ec] placeholder-[#bac6d5]/50 focus:outline-none focus:border-[#edc47e] resize-none"
                />

                <div className="flex items-center justify-between pt-1">
                  {submittedMessage ? (
                    <span className="text-xs text-emerald-400 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" /> Your tribute is recorded!
                    </span>
                  ) : (
                    <span className="text-[11px] text-[#bac6d5]">
                      Recorded in your tribute book
                    </span>
                  )}

                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg bg-[#edc47e] text-[#142033] text-xs font-bold hover:bg-[#f2c985] flex items-center gap-1.5 transition-all shadow-[0_2px_10px_rgba(237,196,126,0.2)]"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Inscribe Tribute</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Live Tribute Wall Display */}
        <div>
          <h4 className="text-xs uppercase font-bold tracking-[0.2em] text-[#bac6d5] mb-4 flex items-center gap-2">
            <span>Recent Citizen Tributes</span>
            <span className="w-12 h-[1px] bg-white/10" />
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {messages.slice(0, 6).map((msg) => (
              <div
                key={msg.id}
                className="p-4 rounded-xl border border-white/10 bg-[#101e32]/50 flex flex-col justify-between hover:border-[#edc47e]/40 transition-colors"
              >
                <p className="text-xs sm:text-sm text-[#f8f4ec]/90 leading-relaxed italic mb-4">
                  “{msg.message}”
                </p>

                <div className="flex items-center justify-between text-[11px] text-[#bac6d5] pt-2 border-t border-white/5">
                  <div className="flex items-center gap-1.5">
                    <span>{msg.type === 'lamp' ? '🪔' : '🌹'}</span>
                    <span className="font-semibold text-white/90">{msg.name}</span>
                    {msg.location && (
                      <span className="text-[#bac6d5]/60">· {msg.location}</span>
                    )}
                  </div>
                  <span className="text-[10px] text-[#bac6d5]/50">{msg.timestamp}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
