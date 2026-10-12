import React, { useState } from 'react';
import { QUIZ_QUESTIONS, QuizQuestion } from '../data/kalamData';
import { HelpCircle, CheckCircle, XCircle, RotateCcw, Trophy, Sparkles } from 'lucide-react';

export const QuizSection: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answeredState, setAnsweredState] = useState<boolean[]>([]);

  const currentQ: QuizQuestion = QUIZ_QUESTIONS[currentIdx];

  const handleSelectOption = (index: number) => {
    if (selectedAnswer !== null) return; // prevent re-answering
    setSelectedAnswer(index);

    const isCorrect = index === currentQ.correctIndex;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < QUIZ_QUESTIONS.length) {
      setCurrentIdx(currentIdx + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
  };

  return (
    <section id="quiz" className="py-20 border-b border-white/10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#edc47e] mb-3">
            <span className="w-6 h-[1px] bg-[#edc47e]" />
            <span>Interactive Trivia</span>
            <span className="w-6 h-[1px] bg-[#edc47e]" />
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl font-medium tracking-tight text-[#f8f4ec] leading-tight mb-2">
            How Well Do You Know Dr. Kalam?
          </h2>
          <p className="text-xs sm:text-sm text-[#bac6d5] font-light">
            Test your knowledge about the scientist, educator, and visionary president.
          </p>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-[#101e32] shadow-2xl relative overflow-hidden">
          {!showResult ? (
            <div>
              {/* Question Header & Counter */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6 text-xs text-[#bac6d5]">
                <span className="font-mono text-[#edc47e] font-bold">
                  QUESTION {currentIdx + 1} OF {QUIZ_QUESTIONS.length}
                </span>
                <span>
                  Current Score: <strong className="text-white">{score}</strong>
                </span>
              </div>

              {/* Question Text */}
              <h3 className="font-serif-title text-xl sm:text-2xl font-medium text-[#f8f4ec] mb-6 leading-snug">
                {currentQ.question}
              </h3>

              {/* Options */}
              <div className="space-y-3 mb-6">
                {currentQ.options.map((opt, i) => {
                  const isSelected = selectedAnswer === i;
                  const isCorrect = i === currentQ.correctIndex;
                  const isAnswered = selectedAnswer !== null;

                  let buttonStyle = 'border-white/10 bg-white/5 hover:bg-white/10 text-[#f8f4ec]';

                  if (isAnswered) {
                    if (isCorrect) {
                      buttonStyle = 'border-emerald-500 bg-emerald-500/20 text-emerald-200';
                    } else if (isSelected) {
                      buttonStyle = 'border-rose-500 bg-rose-500/20 text-rose-200';
                    } else {
                      buttonStyle = 'border-white/5 bg-black/20 text-white/40';
                    }
                  }

                  return (
                    <button
                      key={i}
                      disabled={isAnswered}
                      onClick={() => handleSelectOption(i)}
                      className={`w-full text-left p-4 rounded-xl border text-sm font-medium transition-all flex items-center justify-between ${buttonStyle}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full border border-current text-xs grid place-items-center shrink-0">
                          {String.fromCharCode(65 + i)}
                        </span>
                        <span>{opt}</span>
                      </div>

                      {isAnswered && (
                        <div>
                          {isCorrect && <CheckCircle className="w-5 h-5 text-emerald-400" />}
                          {!isCorrect && isSelected && <XCircle className="w-5 h-5 text-rose-400" />}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation upon answer */}
              {selectedAnswer !== null && (
                <div className="p-4 rounded-xl border border-[#edc47e]/30 bg-[#edc47e]/10 text-xs sm:text-sm text-[#f8f4ec] mb-6 animate-in fade-in duration-200 space-y-1">
                  <span className="font-bold text-[#edc47e] block">Did You Know?</span>
                  <p className="text-[#bac6d5] leading-relaxed">{currentQ.explanation}</p>
                </div>
              )}

              {/* Next Button */}
              {selectedAnswer !== null && (
                <div className="flex justify-end">
                  <button
                    onClick={handleNext}
                    className="px-6 py-2.5 rounded-lg bg-[#edc47e] text-[#142033] text-xs font-bold hover:bg-[#f2c985] transition-all"
                  >
                    {currentIdx + 1 === QUIZ_QUESTIONS.length ? 'View Final Results' : 'Next Question →'}
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Results Screen */
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-[#edc47e]/20 border border-[#edc47e] mx-auto grid place-items-center text-[#edc47e]">
                <Trophy className="w-8 h-8" />
              </div>

              <div>
                <h3 className="font-serif-title text-2xl sm:text-3xl font-medium text-[#f8f4ec] mb-2">
                  Quiz Completed!
                </h3>
                <p className="text-sm text-[#bac6d5]">
                  You scored <strong className="text-[#edc47e] text-lg font-mono">{score}</strong> out of{' '}
                  <span className="font-mono">{QUIZ_QUESTIONS.length}</span> questions correctly.
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#f8f4ec]/80 italic max-w-md mx-auto">
                {score >= 4
                  ? '“Excellence is not an accident.” You know Dr. Kalam’s historic legacy exceptionally well!'
                  : '“Learning gives creativity, creativity leads to thinking, thinking provides knowledge.” Thank you for exploring Dr. Kalam’s life!'}
              </p>

              <button
                onClick={handleRestart}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#edc47e] text-[#142033] text-xs font-bold hover:bg-[#f2c985] transition-all"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Try Quiz Again</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
