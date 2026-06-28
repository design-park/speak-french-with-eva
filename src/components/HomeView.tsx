import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, MessageSquare, Sparkles, ChevronLeft, ChevronRight, HelpCircle } from "lucide-react";
import { homepageData, testimonialsData } from "../data";
import { LeafTwig, SubtleSparkle, DelicateDottedDivider } from "./DecorativeAccents";

// Import generated portrait and lifestyle pics
import evaPortrait from "../assets/images/eva-color.jpg";
import frenchLifestyle from "../assets/images/french_lifestyle_1781645587150.jpg";

interface HomeViewProps {
  setCurrentTab: (tab: string) => void;
  onCtaClick: () => void;
  onMessageClick: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ setCurrentTab, onCtaClick, onMessageClick }) => {
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonialIndex((prev) =>
      prev === testimonialsData.proofs.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setActiveTestimonialIndex((prev) =>
      prev === 0 ? testimonialsData.proofs.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative bg-[#FBF8F3] min-h-screen">

      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#FBF8F3] to-[#F5EFE6]/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-8 z-10 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E8B9BA]/20 border border-[#E8B9BA]/30 text-[#2D2D2D] text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#AC595B]" />
                <span>Expat Support Specialist</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2D2D2D] leading-[1.1] tracking-tight">
                Speak without <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#659287] to-[#3f635a] font-normal">freezing</span> mid-sentence.
                <span className="block mt-2 text-3xl sm:text-4xl lg:text-5xl text-[#AC595B] font-light">Make French a daily habit.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#2D2D2D]/80 font-sans max-w-xl leading-relaxed">
                {homepageData.hero.subtitle}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                <button
                  onClick={onCtaClick}
                  className="px-8 py-4 rounded-full bg-[#E8B9BA] hover:bg-[#e1a5a7] text-[#2D2D2D] font-sans text-sm uppercase font-extrabold tracking-widest cursor-pointer shadow-md shadow-[#E8B9BA]/20 transition-all duration-300 text-center transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  {homepageData.hero.cta}
                </button>
                <button
                  onClick={() => {
                    setCurrentTab("services");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="px-6 py-4 rounded-full border border-[#659287] bg-white/50 text-[#659287] hover:bg-[#85ada3] hover:text-white font-sans text-xs uppercase font-extrabold tracking-widest cursor-pointer transition-all duration-300 text-center flex items-center justify-center gap-1.5 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Explore Program</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Trust Stamp (Fictional micro highlight for confidence) */}
              <div className="pt-6 border-t border-[#bbc4ae]/10 flex items-center gap-4">
                <div className="flex -space-x-2">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=80" alt="Student" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                  <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=80" alt="Student" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                  <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=80" alt="Student" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                </div>
                <div className="text-xs text-[#2D2D2D]/75 font-medium">
                  Loved by over <span className="font-bold text-[#659287]">40+ expat women</span> in Paris, Lyon, and Montpellier.
                </div>
              </div>
            </div>

            {/* Hero Right: Styled Eva Image with frames */}
            <div className="lg:col-span-5 relative flex justify-center">

              {/* Botanical Leaf ornament behind the picture */}
              <div className="absolute -left-12 -top-12 opacity-30 text-[#bbc4ae] pointer-events-none transform -rotate-12">
                <LeafTwig className="w-32 h-32" />
              </div>
              <div className="absolute -right-6 -bottom-6 opacity-30 text-[#E8B9BA] pointer-events-none transform rotate-45">
                <LeafTwig className="w-28 h-28" />
              </div>

              {/* Polaroid-Style Cottagecore Frame */}
              <div className="relative group bg-white p-4 pb-12 rounded-3xl shadow-xl border border-[#bbc4ae]/15 max-w-[340px] sm:max-w-[360px] transform rotate-2 hover:rotate-0 transition-all duration-500">

                {/* Vintage tape overlay */}
                <div className="absolute -top-4 left-1/3 w-32 h-8 bg-gradient-to-r from-[#E8B9BA]/20 to-[#bbc4ae]/20 border border-white/40 drop-shadow-sm rotate-3 backdrop-blur-[1px] pointer-events-none" />

                <div className="w-full aspect-square rounded-2xl overflow-hidden bg-[#F5EFE6]">
                  <img
                    src={evaPortrait}
                    alt="Eva - Professional Expat French Coach"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Hand-written styled caption */}
                <div className="mt-5 text-center">
                  <span className="font-serif text-lg italic text-[#2D2D2D] font-medium block">
                    with love, Eva
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-[#659287] font-semibold mt-0.5 block">
                    Your Personal Coach & Guide
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. PAIN POINT QUOTES ("Does this sound like you?") */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F5EFE6]/60 relative">
        <div className="max-w-4xl mx-auto text-center">

          <span className="text-xs font-bold uppercase tracking-widest text-[#659287] block mb-2">RELATABLE ENCOUNTER</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2D2D] mb-12 italic relative inline-block">
            {homepageData.painPoints.title}
            <span className="absolute -bottom-2 left-1/4 right-1/4 h-[1px] bg-[#E8B9BA]" />
          </h2>

          {/* 4 Speech Bubbles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {homepageData.painPoints.points.map((point, idx) => {
              // Alternate styles for visual rhythm
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`bg-white p-6 rounded-2xl opacity-90 border transition-all duration-300 hover:shadow-md hover:border-[#bbc4ae]/30 relative ${isEven
                    ? "border-[#E8B9BA]/25 bg-gradient-to-br from-white to-[#E8B9BA]/5"
                    : "border-[#bbc4ae]/25 bg-gradient-to-br from-white to-[#bbc4ae]/5"
                    }`}
                >
                  <p className="font-serif text-base italic text-[#2D2D2D] leading-relaxed">
                    "{point}"
                  </p>

                  {/* Bubble Pointer Tail */}
                  <div className={`absolute bottom-0 h-4 w-4 bg-white border-b border-r transform rotate-45 translate-y-2 ${isEven
                    ? "left-12 border-[#E8B9BA]/25"
                    : "right-12 border-[#bbc4ae]/25"
                    }`} />

                  {/* Mini flower icon in bubble */}
                  <div className="absolute -top-2.5 -right-2.5 w-6 h-6 rounded-full bg-white border border-[#F5EFE6] flex items-center justify-center shadow-sm">
                    <SubtleSparkle className="w-2.5 h-2.5" color={isEven ? "fill-[#E8B9BA]" : "fill-[#bbc4ae]"} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. THE PROBLEM STATEMENT */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">

        {/* Subtle decorative ring behind */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#bbc4ae]/10 rounded-full pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center relative z-10 space-y-8">
          <div className="flex justify-center text-[#bbc4ae]">
            <LeafTwig className="w-16 h-16" />
          </div>

          <h2 className="font-serif text-2xl sm:text-3.5xl font-bold text-[#2D2D2D] leading-snug">
            {homepageData.theProblem.title}
          </h2>

          <p className="text-base sm:text-lg text-[#2D2D2D]/80 font-sans leading-relaxed max-w-2xl mx-auto">
            {homepageData.theProblem.description}
          </p>

          <DelicateDottedDivider />

          {/* Heartwarming central callout */}
          <div className="bg-[#FBF8F3] border border-[#AC595B]/30 p-8 rounded-2xl shadow-sm max-w-xl mx-auto transform hover:scale-[1.01] transition-transform">
            <span className="font-serif text-lg sm:text-xl italic text-[#2D2D2D] font-medium leading-relaxed block">
              "Fluency is built on daily, imperfect conversations, <span className="text-[#AC595B] not-italic font-bold underline decoration-[#659287] decoration-2 underline-offset-4">not perfect sentences</span>."
            </span>
            <span className="text-xs uppercase tracking-widest text-[#659287] font-bold mt-2.5 block">
              — Eva's Golden philosophy
            </span>
          </div>
        </div>
      </section>

      {/* 4. MY APPROACH */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FBF8F3] relative">
        <div className="max-w-6xl mx-auto text-center space-y-12">

          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#AC595B] block">
              {homepageData.myApproach.title}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2D2D]">
              {homepageData.myApproach.subtitle}
            </h2>
            <p className="text-sm text-[#2D2D2D]/80 max-w-md mx-auto">
              We skip the rigid grammar books and practice language where it actually comes alive—in the wild.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {homepageData.myApproach.priorities.map((item, idx) => (
              <div
                key={item.id}
                className="group bg-white p-6 rounded-2xl border border-[#bbc4ae]/15 hover:border-[#bbc4ae]/60 hover:shadow-md transition-all duration-300 relative overflow-hidden"
              >
                {/* Decorative side block */}
                <div className="absolute top-0 left-0 w-1.5 h-full bg-[#bbc4ae] group-hover:bg-[#E8B9BA] transition-colors" />

                {/* Styled Badge instead of "icon" text */}
                <div className="w-10 h-10 rounded-xl bg-[#F5EFE6] flex items-center justify-center text-[#659287] font-serif text-base font-bold mb-4 group-hover:bg-[#AC595B]/10 group-hover:text-[#AC595B] transition-colors">
                  0{idx + 1}
                </div>

                <h3 className="font-serif text-lg font-bold text-[#2D2D2D] mb-1.5 group-hover:text-[#659287] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[#2D2D2D]/70 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-6">
            <button
              onClick={() => {
                setCurrentTab("services");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="px-8 py-3.5 rounded-full bg-[#bbc4ae] hover:bg-[#a9b39b] text-white font-sans text-xs uppercase font-extrabold tracking-widest cursor-pointer transition-all duration-300 shadow-md shadow-[#bbc4ae]/10 inline-flex items-center gap-1.5 group"
            >
              <span>See my program</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </section>

      {/* 5. THE TRANSFORMATIONS SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Transformation Left: Narrative / Aesthetic Picture */}
          <div className="lg:col-span-5 relative space-y-6">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-[#F5EFE6]">
              <img
                src={frenchLifestyle}
                alt="Cozy French flatlay with flowers and books representing confidence"
                className="w-full aspect-[4/3] lg:aspect-square object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                <span className="text-white font-serif text-base italic leading-snug">
                  "Finding your voice means finding your freedom to live exactly as you desire."
                </span>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-[#E8B9BA]/10 border border-[#E8B9BA]/20 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#AC595B] shrink-0 mt-0.5" />
              <p className="text-xs text-[#2D2D2D]/80 font-sans leading-normal">
                All transformations are verified results from expat women who practiced with Eva's conversational framework over 3-6 months.
              </p>
            </div>
          </div>

          {/* Transformation Right: Verified list */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#659287] block">THE TRANSFORMS</span>
            <h2 className="font-serif text-3.5xl font-bold text-[#2D2D2D] leading-tight">
              The transformations I've seen
            </h2>
            <p className="text-sm text-[#2D2D2D]/85 max-w-xl">
              Our community of expat women have progressed from feeling isolated and muted to blooming with confidence at work and within their French families:
            </p>

            <div className="space-y-4">
              {homepageData.transformations.items.map((item, index) => {
                // Parse out first bold keywords
                const words = item.split(" ");
                const boldCount = 3; // nail job interviews, make small talk etc
                const boldText = words.slice(0, boldCount).join(" ");
                const normalText = words.slice(boldCount).join(" ");

                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#FBF8F3] border border-transparent hover:border-[#bbc4ae]/10 transition-colors"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#E8B9BA]/20 flex items-center justify-center text-[#AC595B] text-xs font-bold shrink-0 mt-0.5">
                      ✓
                    </div>
                    <p className="text-sm text-[#2D2D2D]/80 leading-relaxed font-sans">
                      <span className="font-bold text-[#2D2D2D] border-b border-[#659287]/30 pb-0.5">
                        {boldText}
                      </span>{" "}
                      {normalText}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* 6. BANNER CARD (What do you want to work on?) */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#F7E5E6] border border-[#E8B9BA]/35 text-[#2D2D2D] p-10 sm:p-14 rounded-3xl relative overflow-hidden text-center space-y-8 shadow-sm">

            {/* Background vector rings */}
            <div className="absolute top-0 right-0 pointer-events-none opacity-8 text-[#AC595B]">
              <LeafTwig className="w-80 h-80 fill-none stroke-current" />
            </div>

            <div className="space-y-3 relative z-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#659287]">LET'S CHAT OVER CAFE</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold max-w-lg mx-auto leading-tight text-[#2D2D2D]">
                {homepageData.ctaSection.title}
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10">
              <button
                onClick={onCtaClick}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#E8B9BA] hover:bg-[#e1a5a7] text-[#2D2D2D] font-sans text-xs uppercase font-extrabold tracking-widest cursor-pointer transition-all"
              >
                {homepageData.ctaSection.ctaPrimary}
              </button>
              <button
                onClick={onMessageClick}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent hover:bg-[#2D2D2D]/5 text-[#2D2D2D] border border-[#2D2D2D]/20 font-sans text-xs uppercase font-extrabold tracking-widest cursor-pointer transition-all flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-4 h-4 text-[#659287]" />
                <span>{homepageData.ctaSection.ctaSecondary}</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 7. TESTIMONIAL TEASER CAROUSEL */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F5EFE6]/45">
        <div className="max-w-5xl mx-auto space-y-12">

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
            <div className="space-y-2 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-[#659287] block">KIND ENCOURAGEMENTS</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2D2D]">
                Don't take my word for it. <span className="block text-[#AC595B] italic font-light">Trust my beautiful clients.</span>
              </h2>
            </div>

            {/* Nav arrows & See All trigger */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => {
                  setCurrentTab("testimonials");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-xs font-bold uppercase tracking-wide text-[#659287] hover:text-[#2D2D2D] transition-colors focus:outline-none hover:underline"
              >
                View All Stories →
              </button>
              <div className="flex gap-2">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full bg-white border border-[#659287]/20 flex items-center justify-center text-[#2D2D2D]/85 hover:text-[#659287] hover:bg-white shadow-sm transition-all focus:outline-none"
                  aria-label="Previous Testimonial Swipe"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full bg-white border border-[#659287]/20 flex items-center justify-center text-[#2D2D2D]/85 hover:text-[#659287] hover:bg-white shadow-sm transition-all focus:outline-none"
                  aria-label="Next Testimonial Swipe"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Testimonial Active Slider Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {[0, 1].map((offset) => {
              const itemIndex = (activeTestimonialIndex + offset) % testimonialsData.proofs.length;
              const item = testimonialsData.proofs[itemIndex];
              return (
                <div
                  key={item.id}
                  className="bg-white p-8 rounded-3xl shadow-sm border border-[#bbc4ae]/15 relative flex flex-col justify-between hover:shadow-md transition-shadow h-full"
                >
                  {/* Quote decoration */}
                  <div className="text-5xl font-serif text-[#E8B9BA]/35 absolute top-4 left-6 pointer-events-none">
                    “
                  </div>

                  <div className="space-y-4 pt-4 relative z-10">
                    {/* Stars */}
                    <div className="flex gap-1 text-[#bbc4ae]">
                      {[...Array(item.rating)].map((_, i) => (
                        <span key={i} className="text-lg">★</span>
                      ))}
                    </div>

                    <h4 className="font-serif text-lg font-bold text-[#659287] italic">
                      "{item.highlight}"
                    </h4>

                    <p className="text-sm text-[#2D2D2D]/80 font-sans leading-relaxed">
                      "{item.quote}"
                    </p>
                  </div>

                  <div className="flex items-center gap-4 border-t border-[#F5EFE6] pt-6 mt-6">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-11 h-11 rounded-full object-cover border-2 border-[#E8B9BA]/20"
                    />
                    <div>
                      <h5 className="font-serif text-sm font-bold text-[#2D2D2D]">
                        {item.name}
                      </h5>
                      <p className="text-[11px] font-sans text-[#2D2D2D]/70">
                        {item.location} • {item.program}
                      </p>
                    </div>
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
