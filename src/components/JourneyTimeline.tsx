import React, { useState } from 'react';
import { MILESTONES_DATA, Milestone } from '../data/kalamData';
import { Rocket, GraduationCap, Award, HeartHandshake, ChevronDown, ChevronUp } from 'lucide-react';

export const JourneyTimeline: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedId, setExpandedId] = useState<string | null>('m1');

  const categories = ['All', 'Early Years', 'Science & Space', 'Presidency', 'Teaching & Youth'];

  const filteredMilestones = selectedCategory === 'All'
    ? MILESTONES_DATA
    : MILESTONES_DATA.filter((m) => m.category === selectedCategory);

  const getCategoryIcon = (category: Milestone['category']) => {
    switch (category) {
      case 'Early Years':
        return <GraduationCap className="w-4 h-4 text-[#edc47e]" />;
      case 'Science & Space':
        return <Rocket className="w-4 h-4 text-[#edc47e]" />;
      case 'Presidency':
        return <Award className="w-4 h-4 text-[#edc47e]" />;
      case 'Teaching & Youth':
        return <HeartHandshake className="w-4 h-4 text-[#edc47e]" />;
    }
  };

  return (
    <section id="journey" className="py-20 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Head matching user prompt aesthetic */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#edc47e] mb-3">
              <span className="w-6 h-[1px] bg-[#edc47e]" />
              <span>A remarkable journey</span>
            </div>
            <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#f8f4ec] leading-tight">
              From a small coastal town <br className="hidden sm:inline" />
              to a nation's beating heart.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#bac6d5] max-w-md font-light leading-relaxed">
            His story is an everlasting testament that where you begin does not determine how high your dreams can soar.
          </p>
        </div>

        {/* Featured Story Cards (as in the user's original HTML) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {/* Card 1 */}
          <article className="group min-h-[300px] border border-white/10 rounded-xl overflow-hidden grid grid-cols-1 sm:grid-cols-[0.85fr_1.15fr] bg-gradient-to-br from-white/[0.04] to-transparent bg-[#101e32] hover:-translate-y-1.5 hover:border-[#edc47e]/60 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-300">
            <div className="relative h-56 sm:h-auto overflow-hidden bg-[#0c182b]">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/ec/A._P._J._Abdul_Kalam_%28cropped%29.jpg"
                alt="Dr. Kalam in his early life"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover saturate-[0.85] group-hover:saturate-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/60 to-transparent pointer-events-none" />
            </div>
            <div className="p-6 sm:p-7 flex flex-col justify-center">
              <span className="text-[#edc47e] text-xs font-bold tracking-widest uppercase">
                1931 · EARLY YEARS
              </span>
              <h3 className="font-serif-title text-2xl font-medium text-[#f8f4ec] mt-2 mb-3">
                Curiosity took flight
              </h3>
              <p className="text-sm text-[#bac6d5] leading-relaxed">
                Born in Rameswaram, Tamil Nadu, Kalam grew up distributing newspapers to fund his schooling, instilled with deep discipline, spiritual humility, and love for knowledge.
              </p>
            </div>
          </article>

          {/* Card 2 */}
          <article className="group min-h-[300px] border border-white/10 rounded-xl overflow-hidden grid grid-cols-1 sm:grid-cols-[0.85fr_1.15fr] bg-gradient-to-br from-white/[0.04] to-transparent bg-[#101e32] hover:-translate-y-1.5 hover:border-[#edc47e]/60 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-300">
            <div className="relative h-56 sm:h-auto overflow-hidden bg-[#0c182b]">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b0/A._P._J._Abdul_Kalam_in_2008.jpg"
                alt="Dr. Kalam addressing people"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover saturate-[0.85] group-hover:saturate-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/60 to-transparent pointer-events-none" />
            </div>
            <div className="p-6 sm:p-7 flex flex-col justify-center">
              <span className="text-[#edc47e] text-xs font-bold tracking-widest uppercase">
                SCIENCE · SERVICE
              </span>
              <h3 className="font-serif-title text-2xl font-medium text-[#f8f4ec] mt-2 mb-3">
                Building for India
              </h3>
              <p className="text-sm text-[#bac6d5] leading-relaxed">
                His leadership across ISRO's satellite launches and DRDO's guided missile programs gave India strategic autonomy and earned him the eternal title: “Missile Man of India.”
              </p>
            </div>
          </article>
        </div>

        {/* Interactive Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-white/10 pb-4">
          <span className="text-xs uppercase tracking-wider text-[#bac6d5] mr-2">Filter Timeline:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#edc47e] text-[#142033] shadow-[0_0_15px_rgba(237,196,126,0.3)]'
                  : 'bg-white/5 text-[#bac6d5] hover:text-[#f8f4ec] hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Detailed Timeline List */}
        <div className="space-y-4">
          {filteredMilestones.map((milestone) => {
            const isExpanded = expandedId === milestone.id;

            return (
              <div
                key={milestone.id}
                className="border border-white/10 rounded-xl bg-[#101e32]/60 hover:bg-[#101e32] transition-colors overflow-hidden"
              >
                <div
                  onClick={() => setExpandedId(isExpanded ? null : milestone.id)}
                  className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="w-10 h-10 rounded-full border border-[#edc47e]/40 bg-[#edc47e]/10 grid place-items-center shrink-0">
                      {getCategoryIcon(milestone.category)}
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="font-serif-title text-lg font-bold text-[#edc47e]">
                          {milestone.year}
                        </span>
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[#bac6d5]">
                          {milestone.badge}
                        </span>
                      </div>
                      <h4 className="text-base sm:text-lg font-medium text-[#f8f4ec] mt-0.5">
                        {milestone.title}
                      </h4>
                      <p className="text-xs text-[#bac6d5] mt-0.5">
                        {milestone.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-end sm:self-center">
                    <span className="text-xs text-[#edc47e] font-semibold hidden sm:inline">
                      {isExpanded ? 'Less' : 'Read details'}
                    </span>
                    <button
                      aria-label="Expand milestone detail"
                      className="p-1 rounded-full text-[#edc47e] bg-white/5"
                    >
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-white/5 bg-black/20 text-sm text-[#bac6d5] space-y-2 animate-in fade-in duration-200">
                    <p className="text-white/90 font-medium">{milestone.description}</p>
                    <p className="text-xs sm:text-sm text-[#bac6d5] leading-relaxed">
                      {milestone.detail}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
