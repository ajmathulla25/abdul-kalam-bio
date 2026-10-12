import React from 'react';

export const StatsBar: React.FC = () => {
  const stats = [
    {
      value: '1931',
      title: 'Born in Rameswaram',
      desc: 'Humble beginnings on Tamil Nadu coast'
    },
    {
      value: '1980',
      title: 'SLV-III Success',
      desc: 'Project Director for India’s 1st Satellite launch'
    },
    {
      value: '1997',
      title: 'Bharat Ratna',
      desc: 'India’s highest civilian honour conferred'
    },
    {
      value: '2002–2007',
      title: '11th President of India',
      desc: 'Affectionately loved as "The People\'s President"'
    },
    {
      value: '2015',
      title: 'Inspired till the last day',
      desc: 'Passed while lecturing students at IIM Shillong'
    }
  ];

  return (
    <section className="border-y border-white/10 bg-[#0c182b]/50 backdrop-blur-sm" aria-label="Kalam's life in numbers">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {stats.map((stat, idx) => (
            <div 
              key={stat.title} 
              className={`space-y-1.5 ${
                idx < stats.length - 1 ? 'lg:border-r lg:border-white/10 lg:pr-6' : ''
              }`}
            >
              <b className="block font-serif-title text-2xl sm:text-3xl font-medium text-[#edc47e] tracking-tight">
                {stat.value}
              </b>
              <span className="block text-xs uppercase tracking-wider font-semibold text-[#f8f4ec]">
                {stat.title}
              </span>
              <p className="text-[11px] text-[#bac6d5]/80 leading-normal">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
