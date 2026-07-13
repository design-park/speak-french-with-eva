import React, { useState } from "react";
import { motion } from "motion/react";
import { Heart, Play, Pause, Compass, BookOpen, Shirt, Music, Sparkles } from "lucide-react";
import { PillarCard, InterestCard } from "./CardComponents";
import { LilyOfTheValley, DelicateDottedDivider, Croissant } from "./DecorativeAccents";

// Assets
import evaPortraitUrl from "../assets/images/eva-serious.jpg";
import lifestyleUrl from "../assets/images/french_lifestyle_1781645587150.jpg";

interface WhoAmIViewProps {
  onCtaClick: () => void;
}

export const WhoAmIView: React.FC<WhoAmIViewProps> = ({ onCtaClick }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <div className="bg-white min-h-screen text-left">

      {/* 1. HERO - BIOGRAPHY BANNER */}
      <section className="pt-16 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#FBF8F3]/30">
        <div className="max-w-6xl mx-auto space-y-12">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
            {/* Left intro copy */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block px-3 py-1 rounded-full bg-[#bbc4ae]/15 text-[#2D2D2D] font-serif italic text-sm border border-[#659287]/30">
                Hey, I am Eva!
              </span>

              <h1 className="font-serif text-3.5xl sm:text-5xl font-bold text-[#2D2D2D] leading-tight">
                My mission is to help you dare to speak French.
              </h1>

              {/* Multiline description */}
              <div className="text-sm sm:text-base text-[#2D2D2D]/85 font-sans leading-relaxed space-y-4">
                <p>
                  With a degree in French as a foreign language and several years of experience, I've had the pleasure to support women from different backgrounds in improving their conversational French and feeling more confident speaking.
                </p>
                <p>
                  Today they feel confident speaking everyday French and they feel at home in their new life in France.
                </p>
              </div>

              <div className="pt-4">
                <button
                  onClick={onCtaClick}
                  className="px-6 py-3 rounded-full bg-[#659287] hover:bg-[#527a70] text-white font-sans text-xs uppercase font-extrabold tracking-widest cursor-pointer transition-colors"
                >
                  Book a free call
                </button>
              </div>
            </div>

            {/* Right: Beautiful Video Mockup */}
            <div className="lg:col-span-6">
              <div className="relative group rounded-3xl overflow-hidden shadow-lg border border-[#bbc4ae]/10 aspect-video bg-stone-900">

                {/* Simulated webcam video capture feed */}
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                  alt="Eva welcoming you on video"
                  className={`w-full h-full object-cover transition-all duration-700 ${isVideoPlaying ? "scale-105 filter brightness-105" : "filter brightness-90 saturate-75"
                    }`}
                  referrerPolicy="no-referrer"
                />

                {/* Video controls overlay */}
                <div className="absolute inset-0 bg-black/25 flex flex-col justify-between p-6">
                  {/* Video Top badge */}
                  <div className="flex justify-between items-center">
                    <span className="px-2.5 py-1 rounded-md bg-white/20 backdrop-blur-md text-white text-[11px] uppercase tracking-wider font-sans font-semibold">
                      Welcome Video • 1:45
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                  </div>

                  {/* Play Button Trigger */}
                  <div className="self-center">
                    <motion.button
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                      className="w-14 h-14 rounded-full bg-white text-[#2D2D2D] flex items-center justify-center shadow-lg hover:text-[#659287] transition-colors focus:outline-none cursor-pointer"
                      aria-label="Play welcome coaching video introduction"
                    >
                      {isVideoPlaying ? (
                        <Pause className="w-6 h-6 fill-current ml-0" />
                      ) : (
                        <Play className="w-6 h-6 fill-current ml-1" />
                      )}
                    </motion.button>
                  </div>

                  {/* Video Bottom subtitles or quote */}
                  <p className="text-white font-serif text-sm italic text-center drop-shadow-md">
                    {isVideoPlaying
                      ? '"Bonjour ! I am so excited to welcome you into this program..."'
                      : '"Hear my accent and see how we focus on real active spoken French."'}
                  </p>
                </div>

                {/* Subtitle feed below video if playing */}
                {isVideoPlaying && (
                  <div className="absolute top-2 left-2 bg-black/60 text-white rounded text-xs px-2 py-1">
                    Playing preview video...
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. WHY I FOCUS ON EXPAT WOMEN */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF0ED] relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left block: Graphic containing Eva's message */}
            <div className="lg:col-span-5 relative flex justify-center">

              <div className="relative max-w-[320px] sm:max-w-[340px] w-full group">
                {/* Offset decorative background box */}
                <div className="absolute inset-0 bg-[#E8B9BA]/20 rounded-3xl transform translate-x-3.5 translate-y-3.5 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2 z-0" />

                {/* Croissant ornament flourish */}
                <div className="absolute -left-10 -bottom-10 pointer-events-none opacity-20 text-[#bbc4ae] transform rotate-12 z-0">
                  <Croissant className="w-40 h-40" />
                </div>

                {/* Framed card of eva */}
                <div className="relative bg-white p-4 pb-5 rounded-3xl shadow-md border border-[#bbc4ae]/15 overflow-hidden z-10">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-stone-100 mb-3.5">
                    <img
                      src={evaPortraitUrl}
                      alt="Eva sharing French advice"
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="text-center">
                    <span className="font-serif text-sm italic text-[#2D2D2D]/75 block">"With you every step."</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right block: High-end copy */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-[#659287] block">THE HEART OF IT</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2D2D]">
                Why I focus on expat women
              </h2>

              <div className="space-y-5 text-sm sm:text-base text-[#2D2D2D]/85 font-sans leading-relaxed">
                <p>
                  I naturally started working with a lot of expatriate women, and I realized I really enjoy supporting them. As a woman in France, I completely relate to your daily life, goals, and needs, which allows me to create a highly tailored, strategic coaching experience that directly aligns with your personal and professional ambitions.
                </p>
                <p>
                  To bring these ambitions to life, our sessions blend professional guidance with natural, real-life practice rather than rigid academic drills. We get along seamlessly and laugh often, preparing you to navigate any everyday situation and speak with genuine ease wherever you go.
                </p>
              </div>

              {/* Heart signature layout */}
              <div className="flex items-center gap-3 pt-4">
                <span className="w-8 h-[1px] bg-[#659287]" />
                <span className="font-serif italic text-[#659287] text-base font-bold">Eva, your coach</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. FOUR PILLARS ("How I support you") */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
        <div className="max-w-5xl mx-auto text-center space-y-12">

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#AC595B] block">COACHING PRINCIPLES</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2D2D]">
              How I support you
            </h2>
          </div>

          {/* 4 Items container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
            <PillarCard
              number="01"
              title="A Safe Space to Speak"
              description="A safe space where mistakes are welcome"
            />
            <PillarCard
              number="02"
              title="Zero Judgment, Pure Support"
              description="No judgement, no pressure, no stress"
            />
            <PillarCard
              number="03"
              title="Real-Life Talk"
              description="Conversations designed around your real life"
            />
            <PillarCard
              number="04"
              title="Tangible Growth"
              description="Progress you can feel, not just measure"
            />
          </div>

          <DelicateDottedDivider />

          {/* Highlight signature quote styling */}
          <div className="max-w-2xl mx-auto pt-2">
            <p className="font-serif text-xl sm:text-2xl italic text-[#2D2D2D] leading-relaxed">
              "You just need someone who gets it—and a method that actually works."
            </p>
          </div>

        </div>
      </section>

      {/* 4. OFF DUTY (Interests) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#EEF4F1] relative overflow-hidden">

        {/* Background Eiffel Tower decorative line art */}
        <div className="absolute left-4 bottom-0 w-[240px] h-[288px] opacity-10 text-[#659287] pointer-events-none transform -rotate-6 translate-y-6">
          <svg viewBox="0 0 100 120" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
            <line x1="50" y1="2" x2="50" y2="15" />
            <path d="M50 15 C47 40 43 75 35 110" />
            <path d="M50 15 C53 40 57 75 65 110" />
            <path d="M50 15 C49 45 47 75 42 110" />
            <path d="M50 15 C51 45 53 75 58 110" />
            <rect x="36" y="85" width="28" height="3" rx="1" fill="currentColor" stroke="none" />
            <line x1="37" y1="85" x2="63" y2="85" />
            <line x1="35" y1="88" x2="65" y2="88" />
            <rect x="43" y="60" width="14" height="2" rx="0.5" fill="currentColor" stroke="none" />
            <line x1="44" y1="60" x2="56" y2="60" />
            <line x1="43" y1="62" x2="57" y2="62" />
            <path d="M38 110 C42 93 58 93 62 110" />
            <line x1="48" y1="30" x2="52" y2="40" strokeWidth="0.8" />
            <line x1="52" y1="30" x2="48" y2="40" strokeWidth="0.8" />
            <line x1="46" y1="45" x2="54" y2="55" strokeWidth="0.8" />
            <line x1="54" y1="45" x2="46" y2="55" strokeWidth="0.8" />
            <line x1="41" y1="68" x2="59" y2="80" strokeWidth="0.8" />
            <line x1="59" y1="68" x2="41" y2="80" strokeWidth="0.8" />
          </svg>
        </div>

        <div className="max-w-5xl mx-auto text-center space-y-12">

          <div className="space-y-3">
            {/* Elegant Serif script label */}
            <span className="font-serif italic text-2xl sm:text-3.5xl text-[#AC595B] block font-light">
              Off Duty
            </span>
            <p className="text-sm sm:text-base text-[#2D2D2D]/85 max-w-lg mx-auto">
              When I'm not teaching, I'm probably just like you—following my curiosity and enjoying the little things in life.
            </p>
          </div>

          {/* Grid of Interests */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left max-w-5xl mx-auto relative z-10">
            <InterestCard
              icon={<Compass className="w-5 h-5 text-[#659287]" />}
              title="Learning foreign languages"
              description="Embracing the beautiful mess of being a student myself."
            />
            <InterestCard
              icon={<BookOpen className="w-5 h-5 text-[#AC595B]" />}
              title="Reading"
              description="Usually paired with a warm cup of tea."
            />
            <InterestCard
              icon={<Shirt className="w-5 h-5 text-[#659287]" />}
              title="Exploring fashion"
              description="Style is just another beautiful form of self-expression."
            />
            <InterestCard
              icon={<Music className="w-5 h-5 text-[#AC595B]" />}
              title="Listening to music"
              description="From weekly favorites to new underground finds."
            />
          </div>

        </div>
      </section>

    </div>
  );
};

