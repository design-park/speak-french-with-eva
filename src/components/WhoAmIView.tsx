import React from "react";
import { motion } from "motion/react";
import { Compass, BookOpen, Shirt, Music } from "lucide-react";
import { PillarCard, InterestCard } from "./CardComponents";
import { DelicateDottedDivider, Croissant } from "./DecorativeAccents";

// Assets
import evaPortraitUrl from "../assets/images/eva-serious.jpg";

interface WhoAmIViewProps {
  onCtaClick: () => void;
}

export const WhoAmIView: React.FC<WhoAmIViewProps> = ({ onCtaClick }) => {
  return (
    <div className="bg-white min-h-screen text-left">

      {/* 1. HERO - BIOGRAPHY BANNER */}
      <section className="pt-16 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#FBF8F3]/30">
        <div className="max-w-6xl mx-auto space-y-12">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
            {/* Left intro copy */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block px-3 py-1 rounded-full bg-[#bbc4ae]/15 text-[#2D2D2D] font-serif italic text-sm border border-[#659287]/30">
                Hey, I am Eva!
              </span>

              <h1 className="font-serif text-3.5xl sm:text-5xl font-bold text-[#2D2D2D] leading-tight">
                Let's work on your transformation together.
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

            {/* Right: Eva's Warm Portrait */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="relative max-w-[360px] sm:max-w-[390px] w-full group">
                {/* Offset decorative background box */}
                <div className="absolute inset-0 bg-[#E8B9BA]/20 rounded-3xl transform translate-x-3.5 translate-y-3.5 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2 z-0" />

                {/* Croissant ornament flourish */}
                <div className="absolute -left-8 -bottom-8 pointer-events-none opacity-20 text-[#659287] transform -rotate-12 z-0">
                  <Croissant className="w-36 h-36" />
                </div>

                {/* Framed card of Eva */}
                <div className="relative bg-white p-4 pb-5 rounded-3xl shadow-xl border border-[#bbc4ae]/20 overflow-hidden z-10">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-stone-100 mb-4 relative">
                    <img
                      src={evaPortraitUrl}
                      alt="Eva, French language coach for expatriate women"
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                    />
                    {/* Floating badge inside photo */}
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#2D2D2D] text-xs font-serif italic border border-white/60 shadow-sm">
                      Paris, France 🇫🇷
                    </div>
                  </div>

                  <div className="px-2">
                    <span className="font-serif font-bold text-base text-[#2D2D2D] block">Eva</span>
                    <span className="text-xs text-[#659287] font-sans font-medium">Native French Coach</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. WHY I FOCUS ON EXPAT WOMEN (Centered Editorial Manifesto / Letter) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF0ED] relative overflow-hidden">
        <div className="max-w-3xl mx-auto text-center space-y-8 relative z-10">

          {/* Section Header */}
          <div className="space-y-3">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#659287]/15 text-[#659287] text-xs font-bold uppercase tracking-widest border border-[#659287]/25">
              THE HEART OF IT
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2D2D] leading-tight">
              Why I focus on expat women
            </h2>
            <div className="w-12 h-0.5 bg-[#659287]/40 mx-auto mt-4" />
          </div>

          {/* Letter Body / Manifesto Card */}
          <div className="bg-white/85 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-sm border border-[#bbc4ae]/20 text-left space-y-6">
            <p className="text-base sm:text-lg text-[#2D2D2D]/90 font-sans leading-relaxed">
              I naturally started working with a lot of expatriate women, and I realized I really enjoy supporting them. As a woman in France, I completely relate to your daily life, goals, and needs, which allows me to create a highly tailored, strategic coaching experience that directly aligns with your personal and professional ambitions.
            </p>

            {/* Editorial Pull Quote */}
            <blockquote className="my-6 py-4 px-6 border-l-[3px] border-[#659287] bg-[#FAF0ED]/60 rounded-r-2xl">
              <p className="font-serif italic text-lg sm:text-xl text-[#2D2D2D] leading-relaxed">
                "Our sessions blend professional guidance with natural, real-life practice rather than rigid academic drills."
              </p>
            </blockquote>

            <p className="text-base sm:text-lg text-[#2D2D2D]/90 font-sans leading-relaxed">
              To bring these ambitions to life, we get along seamlessly and laugh often, preparing you to navigate any everyday situation and speak with genuine ease wherever you go.
            </p>

            {/* Signature Block */}
            <div className="pt-6 flex flex-col items-end border-t border-[#2D2D2D]/5">
              <div className="flex items-center gap-3">
                <span className="w-12 h-[1px] bg-[#659287]" />
                <span className="font-serif italic text-[#659287] text-lg sm:text-xl font-bold">
                  Eva, your coach
                </span>
              </div>
              <span className="text-xs text-[#2D2D2D]/55 font-serif italic mt-1 pr-1">
                With you, every step of the way
              </span>
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

