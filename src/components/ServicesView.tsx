import React from "react";
import { Check, Heart, Users, Sparkles } from "lucide-react";
import { servicesData } from "../data";
import { LeafTwig } from "./DecorativeAccents";

interface ServicesViewProps {
  onCtaClick: () => void;
  onJoinClubClick: () => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onCtaClick, onJoinClubClick }) => {

  return (
    <div className="bg-[#FBF8F3] min-h-screen">
      
      {/* 1. APP HERO SECTION */}
      <section className="pt-16 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FBF8F3] to-[#F5EFE6]/50">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8B9BA]/20 border border-[#E8B9BA]/35 text-[#2D2D2D] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#AC595B]" />
            <span>Coaching Services</span>
          </div>

          <h1 className="font-serif text-3.5xl sm:text-5xl font-bold text-[#2D2D2D] tracking-tight">
            {servicesData.hero.title}
          </h1>

          <p className="text-base sm:text-lg text-[#2D2D2D]/85 font-sans max-w-xl mx-auto leading-relaxed">
            {servicesData.hero.subtitle}
          </p>
        </div>
      </section>

      {/* 2. PROGRAM OPTIONS SIDE-BY-SIDE */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 relative z-10 -mt-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {servicesData.programs.map((program) => {
              const isCoaching = program.id === "coaching";
              return (
                <div
                  key={program.id}
                  className={`bg-white p-8 sm:p-10 rounded-3xl border shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md relative ${
                    isCoaching 
                      ? "border-[#E8B9BA]/40 bg-gradient-to-b from-white to-[#E8B9BA]/5" 
                      : "border-[#bbc4ae]/40 bg-gradient-to-b from-white to-[#bbc4ae]/5"
                  }`}
                >
                  {/* Chic top stamp badge */}
                  <div className="absolute top-6 right-6 text-[#bbc4ae] opacity-20 pointer-events-none">
                    <LeafTwig className="w-12 h-12" />
                  </div>

                  <div className="space-y-8">
                    
                    {/* Header */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        {isCoaching ? (
                          <div className="w-8 h-8 rounded-full bg-[#E8B9BA]/20 flex items-center justify-center text-[#AC595B]">
                            <Heart className="w-4 h-4 fill-[#AC595B]" />
                          </div>
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-[#bbc4ae]/20 flex items-center justify-center text-[#5E6C4D]">
                            <Users className="w-4 h-4" />
                          </div>
                        )}
                        <span className="text-[10px] uppercase font-bold tracking-widest text-[#5E6C4D]">
                          {isCoaching ? "1-on-1 Customized" : "Group Practice"}
                        </span>
                      </div>

                      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2D2D2D]">
                        {program.title}
                      </h2>
                      <p className="text-sm italic font-serif text-[#2D2D2D]/80 font-medium">
                        {program.subtitle}
                      </p>
                    </div>

                    {/* "This is for you if" block */}
                    <div className="space-y-4">
                      <h3 className="text-xs uppercase tracking-wider font-extrabold text-[#2D2D2D] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#AC595B]" />
                        <span>This is for you if:</span>
                      </h3>
                      <ul className="space-y-3">
                        {program.forWho.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-sm text-[#2D2D2D]/80 leading-relaxed font-sans">
                            <Check className="w-4 h-4 text-[#5E6C4D] shrink-0 mt-0.5 stroke-[2.5]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* "What you get" list wrapped in stylish bordered frame */}
                    <div className="bg-[#FBF8F3] p-6 rounded-2xl border border-[#bbc4ae]/15 space-y-4">
                      <h3 className="text-xs uppercase tracking-wider font-extrabold text-[#2D2D2D] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5E6C4D]" />
                        <span>What you get in the program:</span>
                      </h3>
                      <ul className="space-y-2.5">
                        {program.whatYouGet.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#2D2D2D]/75 leading-relaxed font-sans">
                            <span className="w-1 h-1 rounded-full bg-[#5E6C4D]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  {/* Program CTA Button */}
                  <div className="pt-8">
                    <button
                      onClick={isCoaching ? onCtaClick : onJoinClubClick}
                      className={`w-full py-4 rounded-xl text-white font-sans text-xs uppercase font-extrabold tracking-widest cursor-pointer transition-all ${
                        isCoaching 
                          ? "bg-[#E8B9BA] hover:bg-[#dfa2a3] shadow-md shadow-[#E8B9BA]/20" 
                          : "bg-[#5E6C4D] hover:bg-[#4E5B3E] shadow-md shadow-[#5E6C4D]/20"
                      }`}
                    >
                      {program.ctaText}
                    </button>
                    {isCoaching && (
                      <p className="text-[10px] text-center text-[#2D2D2D]/70 font-semibold mt-2">
                        ★ Spots are strictly limited to 6 clients at a time.
                      </p>
                    )}
                  </div>

                </div>
              );
            })}

          </div>
        </div>
      </section>

    </div>
  );
};
