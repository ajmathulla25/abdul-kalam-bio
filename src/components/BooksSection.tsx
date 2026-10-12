import React, { useState } from 'react';
import { BOOKS_DATA, Book } from '../data/kalamData';
import { BookOpen, Sparkles, Feather } from 'lucide-react';

export const BooksSection: React.FC = () => {
  const [activeBook, setActiveBook] = useState<Book>(BOOKS_DATA[0]);

  return (
    <section id="books" className="py-20 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#edc47e] mb-3">
              <span className="w-6 h-[1px] bg-[#edc47e]" />
              <span>Literary Legacy</span>
            </div>
            <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#f8f4ec] leading-tight">
              Words that ignited <br className="hidden sm:inline" />
              a generation's spirit.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#bac6d5] max-w-md font-light leading-relaxed">
            Dr. Kalam penned over 30 inspiring books, urging the world to replace despair with scientific optimism and ethical resolve.
          </p>
        </div>

        {/* Books Grid & Detailed Focus Card */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 items-start">
          {/* Books List / Selectors */}
          <div className="space-y-3">
            {BOOKS_DATA.map((book) => {
              const isSelected = activeBook.id === book.id;

              return (
                <button
                  key={book.id}
                  onClick={() => setActiveBook(book)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-4 ${
                    isSelected
                      ? 'border-[#edc47e] bg-[#edc47e]/10 shadow-[0_0_25px_rgba(237,196,126,0.15)] translate-x-1'
                      : 'border-white/10 bg-[#101e32]/40 hover:bg-[#101e32] hover:border-white/20'
                  }`}
                >
                  <div className="w-10 h-10 rounded-lg bg-black/40 border border-white/10 flex items-center justify-center shrink-0 text-[#edc47e]">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className={`text-base font-medium truncate ${isSelected ? 'text-[#edc47e]' : 'text-[#f8f4ec]'}`}>
                        {book.title}
                      </h4>
                      <span className="text-xs font-mono text-[#edc47e]/80 shrink-0">
                        {book.year}
                      </span>
                    </div>
                    {book.coAuthor && (
                      <p className="text-xs text-[#bac6d5]/70 italic mt-0.5">
                        {book.coAuthor}
                      </p>
                    )}
                    <p className="text-xs text-[#bac6d5] line-clamp-1 mt-1">
                      {book.keyTheme}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Book Detail Card */}
          <div className="border border-[#edc47e]/30 rounded-2xl bg-gradient-to-b from-[#132238] to-[#0a1424] p-6 sm:p-8 relative overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#edc47e]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5 mb-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#edc47e]">
                  Published {activeBook.year}
                </span>
                <h3 className="font-serif-title text-2xl sm:text-3xl font-medium text-[#f8f4ec] mt-1">
                  {activeBook.title}
                </h3>
                {activeBook.coAuthor && (
                  <p className="text-xs text-[#bac6d5] mt-0.5">
                    Co-authored {activeBook.coAuthor}
                  </p>
                )}
              </div>
              <div className="w-12 h-12 rounded-xl border border-[#edc47e]/40 bg-[#edc47e]/15 grid place-items-center text-[#edc47e]">
                <Feather className="w-6 h-6" />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-[#bac6d5] mb-2">
                  Synopsis & Purpose
                </h5>
                <p className="text-sm sm:text-base text-[#f8f4ec]/90 leading-relaxed font-light">
                  {activeBook.description}
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <span className="text-xs uppercase font-bold tracking-wider text-[#edc47e] block mb-1">
                  Core Message:
                </span>
                <p className="text-sm text-[#bac6d5]">
                  {activeBook.keyTheme}
                </p>
              </div>

              <div className="border-l-2 border-[#edc47e] pl-4 py-1">
                <span className="text-[11px] uppercase tracking-widest text-[#bac6d5] block mb-1">
                  Enduring Excerpt:
                </span>
                <p className="font-serif italic text-base sm:text-lg text-[#edc47e] leading-snug">
                  “{activeBook.famousQuote}”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
