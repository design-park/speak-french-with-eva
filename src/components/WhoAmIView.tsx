import React, { useState } from "react";
import { motion } from "motion/react";
import { Heart, Play, Pause, Compass, BookOpen, Shirt, Music, Sparkles } from "lucide-react";
import { whoAmIData } from "../data";
import { LilyOfTheValley, DelicateDottedDivider } from "./DecorativeAccents";

// Assets
import evaPortraitUrl from "../assets/images/eva_portrait_1781645570391.jpg";
import lifestyleUrl from "../assets/images/french_lifestyle_1781645587150.jpg";

interface WhoAmIViewProps {
  onCtaClick: () => void;
}

export const WhoAmIView: React.FC<WhoAmIViewProps> = ({ onCtaClick }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Mapped icons for Off-duty interests
  const getInterestIcon = (id: string) => {
    switch (id) {
      case "1":
        return <Compass className="w-5 h-5 text-[#659287]" />;
      case "2":
        return <BookOpen className="w-5 h-5 text-[#AC595B]" />;
      case "3":
        return <Shirt className="w-5 h-5 text-[#659287]" />;
      case "4":
        return <Music className="w-5 h-5 text-[#AC595B]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#659287]" />;
    }
  };

  return (
    <div className="bg-[#FBF8F3] min-h-screen">
      
      {/* 1. HERO - BIOGRAPHY BANNER */}
      <section className="pt-16 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FBF8F3] to-[#F5EFE6]/50">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
            {/* Left intro copy */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block px-3 py-1 rounded-full bg-[#bbc4ae]/15 text-[#2D2D2D] font-serif italic text-sm border border-[#659287]/30">
                {whoAmIData.hero.badge}
              </span>

              <h1 className="font-serif text-3.5xl sm:text-5xl font-bold text-[#2D2D2D] leading-tight">
                {whoAmIData.hero.title}
              </h1>

              {/* Multiline description */}
              <div className="text-sm sm:text-base text-[#2D2D2D]/85 font-sans leading-relaxed space-y-4">
                {whoAmIData.hero.description.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
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
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    isVideoPlaying ? "scale-105 filter brightness-105" : "filter brightness-90 saturate-75"
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
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F5EFE6]/60 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left block: Graphic containing Eva's message */}
            <div className="lg:col-span-5 relative flex justify-center">
              
              <div className="relative max-w-[320px] sm:max-w-[340px] w-full">
                {/* Botanical twig flourish */}
                <div className="absolute -left-10 -bottom-10 pointer-events-none opacity-20 text-[#bbc4ae] transform rotate-180">
                  <LilyOfTheValley className="w-40 h-40" />
                </div>

                {/* Framed card of eva */}
                <div className="bg-white p-4 pb-4 rounded-3xl shadow-md border border-[#bbc4ae]/15 overflow-hidden">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-stone-100 mb-4">
                    <img
                      src={evaPortraitUrl}
                      alt="Eva sharing French advice"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  {/* Overlay Sticker Badge (Pinterest Inspired pink-sage look) */}
                  <div className="bg-[#E8B9BA] text-[#2D2D2D] p-4 rounded-2xl border-2 border-white shadow-md text-center transform -rotate-1 relative z-10">
                    <Heart className="w-5 h-5 text-[#2D2D2D] fill-[#2D2D2D] mx-auto mb-1.5" />
                    <p className="font-serif text-sm italic leading-snug">
                      "{whoAmIData.whyFocus.quoteBadge}"
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right block: High-end copy */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-[#659287] block">THE HEART OF IT</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2D2D]">
                {whoAmIData.whyFocus.title}
              </h2>
              
              <div className="space-y-5 text-sm sm:text-base text-[#2D2D2D]/85 font-sans leading-relaxed">
                <p>
                  {whoAmIData.whyFocus.content1}
                </p>
                <p>
                  {whoAmIData.whyFocus.content2}
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
              {whoAmIData.pillars.title}
            </h2>
          </div>

          {/* 4 Items container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
            {whoAmIData.pillars.items.map((item, index) => (
              <div
                key={index}
                className="bg-[#FBF8F3] p-6 rounded-2xl border border-[#659287]/15 hover:border-[#AC595B]/30 hover:shadow-sm transition-all flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#AC595B] shrink-0 border border-[#AC595B]/20">
                  <Heart className="w-4 h-4 fill-current text-[#AC595B]" />
                </div>
                <div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#2D2D2D] mb-1">
                    0{index + 1}. {item.split(" where ")[0].split(" designed ")[0].split(" you can ")[0]}
                  </h3>
                  <p className="text-sm text-[#2D2D2D]/75 font-sans leading-relaxed">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <DelicateDottedDivider />

          {/* Highlight signature quote styling */}
          <div className="max-w-2xl mx-auto pt-2">
            <p className="font-serif text-xl sm:text-2xl italic text-[#2D2D2D] leading-relaxed">
              "{whoAmIData.pillars.highlight}"
            </p>
          </div>

        </div>
      </section>

      {/* 4. OFF DUTY (Interests) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FBF8F3] relative overflow-hidden">
        
        {/* Background lifestyle decorative illustration */}
        <div className="absolute left-0 bottom-0 pointer-events-none opacity-5">
          <img src={lifestyleUrl} alt="Background illustration" className="w-[300px] h-[300px] object-cover rounded-full" />
        </div>

        <div className="max-w-5xl mx-auto text-center space-y-12">
          
          <div className="space-y-3">
            {/* Elegant Serif script label */}
            <span className="font-serif italic text-2xl sm:text-3.5xl text-[#AC595B] block font-light">
              {whoAmIData.offDuty.title}
            </span>
            <p className="text-sm sm:text-base text-[#2D2D2D]/85 max-w-lg mx-auto">
              {whoAmIData.offDuty.subtitle}
            </p>
          </div>

          {/* Grid of Interests */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left max-w-5xl mx-auto relative z-10">
            {whoAmIData.offDuty.items.map((item) => (
              <div
                key={item.id}
                className="bg-white p-6 rounded-2xl border border-[#bbc4ae]/15 hover:border-[#bbc4ae]/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Icon badge */}
                  <div className="w-10 h-10 rounded-xl bg-[#F5EFE6] flex items-center justify-center">
                    {getInterestIcon(item.id)}
                  </div>
                  <h4 className="font-serif text-base sm:text-lg font-bold text-[#2D2D2D]">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#2D2D2D]/85 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
                
                {/* Visual tiny spacer badge */}
                <div className="mt-4 pt-4 border-t border-[#F5EFE6] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#AC595B]/60" />
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#659287] font-sans">Eva Personal</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};
