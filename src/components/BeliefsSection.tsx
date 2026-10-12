import React from 'react';
import { Compass, Lightbulb, Users, ShieldCheck } from 'lucide-react';

export const BeliefsSection: React.FC = () => {
  const values = [
    {
      num: '01 / DREAM',
      title: 'Think beyond limits',
      desc: 'He encouraged young people to imagine boldly and turn their goals into purposeful action. "Small aim is a crime; have great aim."',
      icon: Compass,
      quote: '“To succeed, you must have single-minded devotion to your goal.”'
    },
    {
      num: '02 / LEARN',
      title: 'Stay perpetually curious',
      desc: 'For Kalam, education was not merely a degree: it was the eternal capacity to inquire, innovate, and uplift fellow humans.',
      icon: Lightbulb,
      quote: '“Creativity is seeing the same thing but thinking differently.”'
    },
    {
      num: '03 / SERVE',
      title: 'Put the nation first',
      desc: 'He believed science, leadership, and personal achievement matter most when they wipe tears from the eyes of the underserved.',
      icon: Users,
      quote: '“Where there is righteousness in the heart, there is beauty in the character.”'
    },
    {
      num: '04 / LEAD',
      title: 'Absorb failure, share glory',
      desc: 'True leaders take the brunt of setbacks to protect their teams, and step aside into the shadows when success arrives.',
      icon: ShieldCheck,
      quote: '“When failure comes, the leader takes it. When success comes, give it to the team.”'
    }
  ];

  return (
    <section id="beliefs" className="py-20 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#edc47e] mb-3">
              <span className="w-6 h-[1px] bg-[#edc47e]" />
              <span>What he stood for</span>
            </div>
            <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#f8f4ec] leading-tight">
              Ideas worth carrying <br className="hidden sm:inline" />
              into every future tomorrow.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#bac6d5] max-w-md font-light leading-relaxed">
            Kalam's life connected scientific ambition with heartfelt humility, ethical leadership, and boundless faith in the youth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val) => {
            const Icon = val.icon;
            return (
              <article
                key={val.num}
                className="group relative p-7 rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent hover:border-[#edc47e]/60 hover:bg-[#edc47e]/5 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[#edc47e] text-xs font-bold tracking-widest">
                      {val.num}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 grid place-items-center text-[#edc47e] group-hover:bg-[#edc47e]/20 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-serif-title text-2xl font-medium text-[#f8f4ec] mb-3">
                    {val.title}
                  </h3>

                  <p className="text-sm text-[#bac6d5] leading-relaxed mb-6">
                    {val.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="font-serif italic text-xs text-[#edc47e]/90 leading-normal">
                    {val.quote}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
