import React, { useState, useEffect } from 'react';
import { TEN_POINT_PLEDGE } from '../data/kalamData';
import { CheckCircle2, Circle, Award, Share2, Copy, Check, Sparkles } from 'lucide-react';

export const PledgeSection: React.FC = () => {
  const [pledges, setPledges] = useState<boolean[]>(() => {
    try {
      const saved = localStorage.getItem('kalam_pledge_state');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return new Array(TEN_POINT_PLEDGE.length).fill(false);
  });
  const [copiedPledge, setCopiedPledge] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('kalam_pledge_state', JSON.stringify(pledges));
    } catch {
      // ignore
    }
  }, [pledges]);

  const togglePledge = (idx: number) => {
    const updated = [...pledges];
    updated[idx] = !updated[idx];
    setPledges(updated);
  };

  const commitAll = () => {
    const all = new Array(TEN_POINT_PLEDGE.length).fill(true);
    setPledges(all);
  };

  const resetAll = () => {
    const none = new Array(TEN_POINT_PLEDGE.length).fill(false);
    setPledges(none);
  };

  const completedCount = pledges.filter(Boolean).length;
  const isAllCompleted = completedCount === TEN_POINT_PLEDGE.length;

  const handleCopyCommitment = () => {
    const text = `I have taken Dr. A.P.J. Abdul Kalam's 10-Point Youth Pledge (${completedCount}/10 points accepted) to dedicate my knowledge, service, and integrity to a better tomorrow.\n\n"Excellence is a continuous process and not an accident." — Dr. A.P.J. Abdul Kalam`;
    navigator.clipboard.writeText(text);
    setCopiedPledge(true);
    setTimeout(() => setCopiedPledge(false), 2200);
  };

  return (
    <section id="pledge" className="py-20 border-b border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#edc47e] mb-3">
            <span className="w-6 h-[1px] bg-[#edc47e]" />
            <span>Solemn Oath for the Youth</span>
            <span className="w-6 h-[1px] bg-[#edc47e]" />
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#f8f4ec] leading-tight mb-4">
            Dr. Kalam's 10-Point Oath
          </h2>
          <p className="text-sm sm:text-base text-[#bac6d5] font-light leading-relaxed">
            Administered by Dr. Kalam to millions of students across schools and universities. Check the points you personally commit to upholding in daily life.
          </p>
        </div>

        {/* Progress Card */}
        <div className="mb-8 p-6 rounded-2xl border border-white/10 bg-[#101e32] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-xl grid place-items-center transition-all ${
              isAllCompleted 
                ? 'bg-[#edc47e] text-[#142033] shadow-[0_0_25px_rgba(237,196,126,0.4)]' 
                : 'bg-white/5 border border-white/10 text-[#edc47e]'
            }`}>
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-base font-semibold text-[#f8f4ec]">
                  My Pledge Commitment
                </h4>
                {isAllCompleted && (
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Certified
                  </span>
                )}
              </div>
              <p className="text-xs text-[#bac6d5]">
                {completedCount} of {TEN_POINT_PLEDGE.length} commitments accepted
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {!isAllCompleted ? (
              <button
                onClick={commitAll}
                className="px-4 py-2 rounded-lg bg-[#edc47e] text-[#142033] text-xs font-bold hover:bg-[#f2c985] transition-all"
              >
                Pledge All 10 Points
              </button>
            ) : (
              <button
                onClick={resetAll}
                className="px-3 py-2 rounded-lg border border-white/10 text-xs text-[#bac6d5] hover:text-white"
              >
                Reset
              </button>
            )}

            <button
              onClick={handleCopyCommitment}
              className="px-3.5 py-2 rounded-lg border border-white/15 text-xs text-[#f8f4ec] hover:border-[#edc47e] hover:text-[#edc47e] flex items-center gap-1.5 transition-all"
            >
              {copiedPledge ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedPledge ? 'Copied' : 'Share Oath'}</span>
            </button>
          </div>
        </div>

        {/* Pledge items list */}
        <div className="space-y-3">
          {TEN_POINT_PLEDGE.map((point, index) => {
            const isChecked = pledges[index];

            return (
              <div
                key={index}
                onClick={() => togglePledge(index)}
                className={`p-4 sm:p-5 rounded-xl border transition-all cursor-pointer flex items-start gap-4 select-none ${
                  isChecked
                    ? 'border-[#edc47e]/60 bg-[#edc47e]/10 shadow-[0_0_20px_rgba(237,196,126,0.08)]'
                    : 'border-white/10 bg-[#101e32]/40 hover:bg-[#101e32] hover:border-white/20'
                }`}
              >
                <div className="mt-0.5 shrink-0">
                  {isChecked ? (
                    <CheckCircle2 className="w-5 h-5 text-[#edc47e]" />
                  ) : (
                    <Circle className="w-5 h-5 text-white/30" />
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-mono font-bold text-[#edc47e]/80">
                      POINT {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <p className={`text-sm sm:text-base leading-relaxed ${isChecked ? 'text-[#f8f4ec] font-medium' : 'text-[#bac6d5]'}`}>
                    {point}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {isAllCompleted && (
          <div className="mt-8 p-6 rounded-xl border border-[#edc47e]/40 bg-gradient-to-r from-[#edc47e]/15 to-transparent text-center space-y-2 animate-in fade-in duration-300">
            <Sparkles className="w-6 h-6 text-[#edc47e] mx-auto animate-bounce" />
            <h4 className="font-serif-title text-xl font-bold text-[#edc47e]">
              Torchbearer of Dr. Kalam's Vision
            </h4>
            <p className="text-xs sm:text-sm text-[#f8f4ec] max-w-lg mx-auto">
              You have dedicated yourself to all 10 pillars of enlightenment, service, and environmental stewardship. Continue carrying this fire forward into your daily actions!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
