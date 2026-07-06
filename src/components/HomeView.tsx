import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Mail, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { PainPointCard, PriorityCard, TransformationItem, ReviewCard } from "./CardComponents";
import { TESTIMONIALS_PROOFS } from "./TestimonialsView";
import { LilyOfTheValley, DelicateDottedDivider, FleurDeLisOrnament, FrenchRose, EiffelTower, Croissant } from "./DecorativeAccents";

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
      prev === TESTIMONIALS_PROOFS.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setActiveTestimonialIndex((prev) =>
      prev === 0 ? TESTIMONIALS_PROOFS.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative bg-white min-h-screen text-left">

      {/* 1. HERO SECTION */}
      <section className="relative pt-20 sm:pt-28 pb-28 sm:pb-36 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-white to-[#FBF8F3]/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 xl:gap-24 items-center">

            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-10 z-10 text-left">

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] xl:text-6xl font-bold text-[#2D2D2D] leading-[1.15] tracking-tight">
                Speak without <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#659287] to-[#3f635a] font-normal">freezing</span> mid-sentence.
                <span className="block mt-4 text-3xl sm:text-4xl lg:text-[42px] xl:text-5xl text-[#2D2D2D] font-light">
                  Make French <span className="text-[#AC595B] font-medium">a daily habit.</span>
                </span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-[#2D2D2D]/80 font-sans max-w-2xl leading-relaxed">
                I help expat women master everyday French so they can feel confident, independent, and finally at home in France.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-5 items-stretch sm:items-center">
                <button
                  onClick={onCtaClick}
                  className="px-8 py-4 rounded-full bg-[#E8B9BA] hover:bg-[#e1a5a7] text-[#2D2D2D] font-sans text-sm uppercase font-extrabold tracking-widest cursor-pointer shadow-md shadow-[#E8B9BA]/20 transition-all duration-300 text-center transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  Get a free discovery call
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
            </div>

            {/* Hero Right: Styled Eva Image with frames */}
            <div className="lg:col-span-5 relative flex justify-center w-full">

              {/* Botanical Leaf ornament behind the picture */}
              <div className="absolute -left-12 -top-12 opacity-30 text-[#bbc4ae] pointer-events-none transform -rotate-12">
                <EiffelTower className="w-32 h-32" />
              </div>
              <div className="absolute -right-6 -bottom-6 opacity-30 text-[#E8B9BA] pointer-events-none transform rotate-45">
                <Croissant className="w-28 h-28" />
              </div>

              {/* Polaroid-Style Cottagecore Frame */}
              <div className="relative group bg-white p-5 pb-16 rounded-[32px] shadow-xl border border-[#bbc4ae]/15 w-full max-w-[380px] sm:max-w-[400px] lg:max-w-[440px] transform rotate-2 hover:rotate-0 transition-all duration-500">

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
                <div className="mt-6 text-center">
                  <span className="font-serif text-xl italic text-[#2D2D2D] font-medium block">
                    Eva
                  </span>
                  <span className="text-xs uppercase tracking-widest text-[#659287] font-semibold mt-1 block">
                    Your Personal Coach
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. PAIN POINT QUOTES ("Does this sound like you?") */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF0ED] relative">
        <div className="max-w-4xl mx-auto text-center">

          <span className="text-xs font-bold uppercase tracking-widest text-[#AC595B] block mb-2">SOUND FAMILIAR?</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2D2D] mb-12 italic relative inline-block">
            Does this sound like you?
            <span className="absolute -bottom-2 left-1/4 right-1/4 h-[1.5px] bg-[#AC595B]/40" />
          </h2>

          {/* 4 Speech Bubbles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <PainPointCard
              quote="I understand a lot, but I freeze when I have to respond."
              variant="pink"
            />
            <PainPointCard
              quote="People speak so fast. I get lost after two sentences."
              variant="sage"
            />
            <PainPointCard
              quote="I can't express my personality the way I can in my native language."
              variant="pink"
            />
            <PainPointCard
              quote="I feel less confident than I usually am."
              variant="sage"
            />
          </div>
        </div>
      </section>

      {/* 3. THE PROBLEM STATEMENT */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">

        {/* Subtle decorative ring behind */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#bbc4ae]/10 rounded-full pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center relative z-10 space-y-8">
          <div className="flex justify-center text-[#bbc4ae]">
            <FleurDeLisOrnament className="w-16 h-16" />
          </div>

          <h2 className="font-serif text-2xl sm:text-3.5xl font-bold text-[#2D2D2D] leading-snug">
            The problem is not you—and it's not a lack of grammar rules or vocabulary.
          </h2>

          <p className="text-base sm:text-lg text-[#2D2D2D]/80 font-sans leading-relaxed max-w-2xl mx-auto">
            The problem is the lack of communication from waiting to be perfect before trying to speak, and the difference between the French you learned versus the one actually spoken.
          </p>

          <DelicateDottedDivider />

          {/* Heartwarming central callout */}
          <div className="bg-[#FBF8F3] border border-[#AC595B]/30 p-8 rounded-2xl shadow-sm max-w-xl mx-auto transform hover:scale-[1.01] transition-transform">
            <span className="font-serif text-lg sm:text-xl italic text-[#2D2D2D] font-medium leading-relaxed block">
              "Fluency is built on daily, imperfect conversations, <span className="text-[#AC595B] not-italic font-bold">not perfect sentences</span>."
            </span>
            <span className="text-xs uppercase tracking-widest text-[#659287] font-bold mt-2.5 block">
              — Eva's philosophy
            </span>
          </div>
        </div>
      </section>

      {/* 4. MY APPROACH */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F5EFE6]/60 relative">
        <div className="max-w-6xl mx-auto text-center space-y-12">

          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#AC595B] block">
              MY APPROACH
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2D2D]">
              Here are my main priorities:
            </h2>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <PriorityCard
              number="01"
              title="Real-life situations"
              description="for natural social interactions"
            />
            <PriorityCard
              number="02"
              title="Daily spoken French"
              description="that actually gets used"
            />
            <PriorityCard
              number="03"
              title="Your personal goals"
              description="not a generic curriculum"
            />
            <PriorityCard
              number="04"
              title="Building confidence"
              description="through practice, not perfection"
            />
          </div>

          <div className="pt-6">
            <button
              onClick={() => {
                setCurrentTab("services");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="px-8 py-3.5 rounded-full bg-[#659287] hover:bg-[#527a70] text-white font-sans text-xs uppercase font-extrabold tracking-widest cursor-pointer transition-all duration-300 shadow-md shadow-[#659287]/20 inline-flex items-center gap-1.5 group"
            >
              <span>See my program</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </section>

      {/* 5. THE TRANSFORMATIONS SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        {/* Background botanical decorations */}
        <div className="absolute right-12 bottom-12 opacity-15 text-[#bbc4ae] pointer-events-none transform rotate-12 hidden md:block">
          <EiffelTower className="w-48 h-48" />
        </div>
        <div className="absolute left-6 top-16 opacity-15 text-[#E8B9BA] pointer-events-none transform -rotate-12 hidden md:block">
          <Croissant className="w-40 h-40" />
        </div>

        <div className="max-w-3xl mx-auto space-y-8 relative z-10 text-left">

          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#659287] block">THE TRANSFORMS</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#2D2D2D] leading-tight">
              The transformations I've seen
            </h2>

            <div className="space-y-4 pt-4">
              <TransformationItem
                boldText="nailed job interviews"
                normalText="for their dream roles in France"
              />
              <TransformationItem
                boldText="made small talk"
                normalText="with colleagues without overthinking every word"
              />
              <TransformationItem
                boldText="delivered professional presentations"
                normalText="with confidence"
              />
              <TransformationItem
                boldText="made appointments over"
                normalText="the phone without stress"
              />
              <TransformationItem
                boldText="expressed their true"
                normalText="personality—no more hiding behind safe, simple sentences"
              />
              <TransformationItem
                boldText="bonded with their"
                normalText="in-laws and finally felt like a true part of the family"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 6. BANNER CARD (What do you want to work on?) */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#F7E5E6] border border-[#E8B9BA]/35 text-[#2D2D2D] p-10 sm:p-14 rounded-3xl relative overflow-hidden text-center space-y-8 shadow-sm">

            {/* Background French ornaments inside the banner card */}
            <div className="absolute right-[-30px] bottom-[-35px] opacity-20 pointer-events-none transform rotate-12">
              <EiffelTower className="w-48 h-48" color="stroke-[#659287]" />
            </div>
            <div className="absolute left-[-15px] top-[-15px] opacity-20 pointer-events-none transform -rotate-12">
              <Croissant className="w-36 h-36" color="stroke-[#AC595B]" />
            </div>

            <div className="space-y-3 relative z-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#659287]">LET'S GET IN TOUCH</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold max-w-lg mx-auto leading-tight text-[#2D2D2D]">
                What do you want to work on? Let's discuss your goals!
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10">
              <button
                onClick={onCtaClick}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#E8B9BA] hover:bg-[#e1a5a7] text-[#2D2D2D] font-sans text-xs uppercase font-extrabold tracking-widest cursor-pointer transition-all"
              >
                Get a free discovery call
              </button>
              <button
                onClick={onMessageClick}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent hover:bg-[#2D2D2D]/5 text-[#2D2D2D] border border-[#2D2D2D]/20 font-sans text-xs uppercase font-extrabold tracking-widest cursor-pointer transition-all flex items-center justify-center gap-1.5"
              >
                <Mail className="w-4 h-4 text-[#659287]" />
                <span>Send me an email</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 7. TESTIMONIAL TEASER CAROUSEL */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#EEF4F1]">
        <div className="max-w-5xl mx-auto space-y-12">

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
            <div className="space-y-2 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-[#659287] block">KIND WORDS</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2D2D]">
                Don't take my word for it. <span className="block text-[#AC595B] italic font-light">Trust my clients.</span>
              </h2>
            </div>

            {/* Nav arrows & See All trigger */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => {
                  setCurrentTab("testimonials");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-xs font-bold uppercase tracking-wide text-[#659287] hover:text-[#2D2D2D] transition-colors focus:outline-none hover:underline cursor-pointer"
              >
                View All Stories →
              </button>
              <div className="flex gap-2">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full bg-white border border-[#659287]/20 flex items-center justify-center text-[#2D2D2D]/85 hover:text-[#659287] hover:bg-white shadow-sm transition-all focus:outline-none cursor-pointer"
                  aria-label="Previous Testimonial Swipe"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full bg-white border border-[#659287]/20 flex items-center justify-center text-[#2D2D2D]/85 hover:text-[#659287] hover:bg-white shadow-sm transition-all focus:outline-none cursor-pointer"
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
              const itemIndex = (activeTestimonialIndex + offset) % TESTIMONIALS_PROOFS.length;
              const item = TESTIMONIALS_PROOFS[itemIndex];
              return (
                <ReviewCard
                  key={item.id}
                  name={item.name}
                  program={item.program}
                  rating={item.rating}
                  highlight={item.highlight}
                  quote={item.quote}
                  quoteEn={item.quoteEn}
                  showQuoteDecorator={true}
                />
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
};

