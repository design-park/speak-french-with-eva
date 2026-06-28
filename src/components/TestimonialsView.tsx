import React, { useState } from "react";
import { motion } from "motion/react";
import { Play, Star, ChevronRight, Video, Target, Award, User, MessageCircle } from "lucide-react";
import { testimonialsData } from "../data";
import { LeafTwig, DelicateDottedDivider } from "./DecorativeAccents";

interface TestimonialsViewProps {
  onCtaClick: () => void;
}

export const TestimonialsView: React.FC<TestimonialsViewProps> = ({ onCtaClick }) => {
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  return (
    <div className="bg-[#FBF8F3] min-h-screen text-left">
      
      {/* 1. HERO - WHAT MY STUDENTS SAY */}
      <section className="pt-16 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FBF8F3] to-[#F5EFE6]/50 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="inline-block px-3 py-1 rounded-full bg-[#E8B9BA]/15 text-[#2D2D2D] font-serif italic text-sm border border-[#E8B9BA]/35">
            Real Proof
          </span>
          <h1 className="font-serif text-3.5xl sm:text-5xl font-bold text-[#2D2D2D] tracking-tight">
            {testimonialsData.hero.title}
          </h1>
          <p className="text-base sm:text-lg text-[#2D2D2D]/85 font-sans max-w-xl mx-auto leading-relaxed">
            {testimonialsData.hero.subtitle}
          </p>
        </div>
      </section>

      {/* 2. HEAR THEIR STORIES (VIDEO TESTIMONIALS) */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#FBF8F3]">
        <div className="max-w-6xl mx-auto space-y-10">
          
          <div className="text-center">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2D2D2D] flex items-center justify-center gap-2">
              <Video className="w-5 h-5 text-[#659287]" />
              <span>Hear their stories</span>
            </h2>
          </div>

          {/* 3 Grid Video Capture Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonialsData.videoReviews.map((video) => {
              const isPlaying = playingVideoId === video.id;
              return (
                <div
                  key={video.id}
                  className="bg-white rounded-3xl overflow-hidden border border-[#bbc4ae]/15 hover:border-[#bbc4ae]/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full"
                >
                  {/* Virtual Video Frame */}
                  <div className="aspect-[4/3] bg-stone-900 relative">
                    <img
                      src={video.imageUrl}
                      alt={video.name}
                      className="w-full h-full object-cover opacity-80 filter saturate-[0.85] brightness-95"
                      referrerPolicy="no-referrer"
                    />

                    {/* Dark/Warm overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-black/10 flex flex-col justify-between p-4">
                      
                      {/* Top banner tag */}
                      <span className="self-start px-2 py-0.5 rounded bg-white/20 backdrop-blur-md text-white text-[10px] uppercase font-bold tracking-wider font-sans">
                        {video.location} • {video.program.split(" Coaching")[0]}
                      </span>

                      {/* Central Interactive Play Trigger */}
                      <div className="self-center">
                        <motion.button
                          whileHover={{ scale: 1.15 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setPlayingVideoId(isPlaying ? null : video.id)}
                          className="w-12 h-12 rounded-full bg-white/95 text-[#2D2D2D] flex items-center justify-center shadow-lg hover:text-[#659287] transition-colors focus:outline-none cursor-pointer"
                          aria-label={`Play story video testimonial of student ${video.name}`}
                        >
                          {isPlaying ? (
                            <span className="text-xs font-bold font-sans">Stop</span>
                          ) : (
                            <Play className="w-5 h-5 fill-current ml-0.5" />
                          )}
                        </motion.button>
                      </div>

                      {/* Display name tag in video */}
                      <span className="text-white font-serif text-sm italic font-bold">
                        {video.name}, {video.location}
                      </span>
                    </div>

                    {/* Overlay playing notice */}
                    {isPlaying && (
                      <div className="absolute inset-0 bg-stone-900 flex flex-col items-center justify-center p-6 text-center space-y-4 text-white z-25">
                        <MessageCircle className="w-8 h-8 text-[#E8B9BA] animate-bounce" />
                        <p className="font-serif italic text-sm">
                          "Eva changed my whole outlook! Connecting over tea let me practice natural street-level sentences cleanly."
                        </p>
                        <button
                          onClick={() => setPlayingVideoId(null)}
                          className="text-xs font-bold uppercase underline tracking-wider text-[#bbc4ae] hover:text-white transition-colors"
                        >
                          Close Player
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Summary copy */}
                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <p className="text-sm text-[#2D2D2D]/80 font-sans leading-relaxed">
                      "{video.summary}"
                    </p>

                    <div className="pt-4 border-t border-[#F5EFE6]">
                      <button
                        onClick={() => {
                          setPlayingVideoId(isPlaying ? null : video.id);
                        }}
                        className="text-xs font-bold uppercase tracking-wider text-[#659287] hover:text-[#527a70] hover:underline flex items-center gap-1 cursor-pointer focus:outline-none"
                      >
                        <span>{video.ctaText}</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. WRITTEN REVIEWS ("The proof is in the progress") */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F5EFE6]/40 relative">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#AC595B] block">TESTIMONY VERSED</span>
            <h2 className="font-serif text-2xl sm:text-3.5xl font-bold text-[#2D2D2D]">
              The proof is in the progress
            </h2>
            <p className="text-xs text-[#2D2D2D]/75 font-sans max-w-sm mx-auto">
              Extracts of verified written reviews from long-distance coaching students.
            </p>
          </div>

          {/* 4 Cards Written reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonialsData.proofs.map((proof) => (
              <div
                key={proof.id}
                className="bg-white p-8 rounded-3xl border border-[#bbc4ae]/15 hover:border-[#bbc4ae]/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full"
              >
                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex gap-1 text-[#bbc4ae]">
                    {[...Array(proof.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-[#bbc4ae]" />
                    ))}
                  </div>

                  {/* Highlight callout text */}
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#659287] italic leading-snug">
                    "{proof.highlight}"
                  </h3>

                  {/* Quote block */}
                  <p className="text-sm text-[#2D2D2D]/80 font-sans leading-relaxed">
                    "{proof.quote}"
                  </p>
                </div>

                {/* Student layout footer */}
                <div className="flex items-center gap-4 mt-8 pt-6 border-t border-[#F5EFE6]">
                  <img
                    src={proof.imageUrl}
                    alt={proof.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-[#E8B9BA]/20 shadow-sm"
                  />
                  <div>
                    <h4 className="font-serif text-sm font-bold text-[#2D2D2D]">
                      {proof.name}
                    </h4>
                    <p className="text-[11px] font-sans text-[#2D2D2D]/65 uppercase tracking-wider font-semibold">
                      {proof.location} • {proof.program}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. SPECIFIC CASE STUDIES (Key Wins list) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
        <div className="max-w-5xl mx-auto space-y-12">
          
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#659287] block">CONCRETE WINS</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2D2D]">
              Real expat situations mastered
            </h2>
          </div>

          {"/* List of Case Studies wins */"}
          <div className="space-y-8 max-w-4xl mx-auto">
            {testimonialsData.caseStudies.map((caseStudy) => (
              <div
                key={caseStudy.id}
                className="bg-[#FBF8F3] p-8 sm:p-10 rounded-3xl border border-[#bbc4ae]/15 hover:border-[#bbc4ae]/45 hover:shadow-sm transition-all"
              >
                
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 border-b border-[#bbc4ae]/15 pb-6">
                  <div className="space-y-1">
                    <div className="flex gap-1 text-[#bbc4ae]">
                      {[...Array(caseStudy.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current text-[#bbc4ae]" />
                      ))}
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2D2D2D]">
                      {caseStudy.title}
                    </h3>
                  </div>

                  <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white border border-[#659287]/20 text-[#659287] text-xs font-semibold">
                    <Award className="w-3.5 h-3.5 text-[#659287]" />
                    <span>Expat Case Study</span>
                  </span>
                </div>

                <div className="space-y-4">
                  <p className="text-sm font-sans text-[#2D2D2D]/75 italic">
                    {caseStudy.intro}
                  </p>

                  <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {caseStudy.wins.map((win, idx) => (
                      <li
                        key={idx}
                        className="bg-white p-4 rounded-xl border border-[#F5EFE6] text-xs sm:text-sm text-[#2D2D2D]/85 leading-relaxed font-sans relative"
                      >
                        {/* Dot indicator */}
                        <div className="w-4 h-4 rounded-full bg-[#AC595B]/20 text-[#AC595B] text-[10px] font-bold flex items-center justify-center mb-2">
                          ✓
                        </div>
                        {win}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-2 pt-4 justify-end text-xs text-[#2D2D2D]/65 font-semibold font-sans uppercase">
                    <User className="w-3.5 h-3.5 text-[#AC595B]" />
                    <span>Accomplished by: {caseStudy.student}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. FINAL BANNER CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#F5EFE6]/50">
        <div className="max-w-4xl mx-auto text-center space-y-8 bg-[#F7E5E6] border border-[#E8B9BA]/35 text-[#2D2D2D] p-10 sm:p-14 rounded-3xl relative overflow-hidden shadow-sm">
          
          {/* Background flourish */}
          <div className="absolute right-0 bottom-0 pointer-events-none opacity-8 text-[#AC595B] transform translate-x-12 translate-y-12">
            <LeafTwig className="w-72 h-72 fill-none stroke-current" />
          </div>

          <div className="space-y-3 relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#659287]">JOIN THE BLOOMING COMMUNITY</span>
            <h2 className="font-serif text-3xl sm:text-4.5xl font-bold max-w-xl mx-auto leading-tight text-[#2D2D2D]">
              Ready to make French your everyday reality?
            </h2>
            <p className="text-[#2D2D2D]/80 max-w-md mx-auto text-sm">
              We begin with a gentle, friendly, zero-pressure 20-minute video conversation.
            </p>
          </div>

          <div className="relative z-10">
            <button
              onClick={onCtaClick}
              className="px-8 py-4 rounded-full bg-[#E8B9BA] hover:bg-[#e1a5a7] text-[#2D2D2D] font-sans text-xs uppercase font-extrabold tracking-widest cursor-pointer transition-all shadow-md shadow-[#E8B9BA]/20"
            >
              Book your Discovery Call
            </button>
            <p className="text-[10px] text-[#2D2D2D]/60 mt-3 font-semibold uppercase tracking-wider">
              No stress, absolutely free.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};
