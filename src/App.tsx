import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { JourneyTimeline } from './components/JourneyTimeline';
import { BeliefsSection } from './components/BeliefsSection';
import { QuoteSection } from './components/QuoteSection';
import { BooksSection } from './components/BooksSection';
import { PledgeSection } from './components/PledgeSection';
import { TributeWall } from './components/TributeWall';
import { QuizSection } from './components/QuizSection';
import { Footer } from './components/Footer';

export default function App() {
  const handleScrollToTribute = () => {
    const el = document.getElementById('tribute');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToJourney = () => {
    const el = document.getElementById('journey');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080f1d] text-[#f8f4ec] flex flex-col selection:bg-[#edc47e] selection:text-[#101827]">
      <Navbar onLightLampClick={handleScrollToTribute} />

      <main className="flex-1">
        <Hero 
          onExploreClick={handleScrollToJourney} 
          onTributeClick={handleScrollToTribute} 
        />
        <StatsBar />
        <JourneyTimeline />
        <QuoteSection />
        <BeliefsSection />
        <BooksSection />
        <PledgeSection />
        <TributeWall />
        <QuizSection />
      </main>

      <Footer />
    </div>
  );
}
