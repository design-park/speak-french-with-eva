import React, { useState } from "react";
import { motion } from "motion/react";
import { Heart, Check, Play, Pause, ChevronRight, Video, Target, Award, User, MessageCircle, Star, Users } from "lucide-react";
import { SubtleSparkle, FleurDeLisOrnament } from "./DecorativeAccents";

// 1. ExpandableQuote helper component
export const ExpandableQuote: React.FC<{ quote: string; quoteEn?: string; limit?: number }> = ({ quote, quoteEn, limit = 160 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showEnglish, setShowEnglish] = useState(false);

  const activeQuote = showEnglish && quoteEn ? quoteEn : quote;

  // Handle truncation
  const needsTruncation = activeQuote.length > limit;
  const displayedText = needsTruncation && !isExpanded 
    ? `${activeQuote.substring(0, limit)}...` 
    : activeQuote;

  return (
    <div className="space-y-1.5 text-left">
      <div>
        <p className="text-sm text-[#2D2D2D]/80 font-sans leading-relaxed inline">
          "{displayedText}"
        </p>
        {needsTruncation && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-xs font-bold text-[#659287] hover:text-[#527a70] cursor-pointer hover:underline focus:outline-none ml-1 inline"
          >
            {isExpanded ? "Collapse [-]" : "Read More [+]"}
          </button>
        )}
      </div>

      {quoteEn && (
        <button
          onClick={() => setShowEnglish(!showEnglish)}
          className="text-[11px] font-bold text-[#AC595B] hover:text-[#8d4244] cursor-pointer hover:underline focus:outline-none flex items-center gap-1 mt-1 opacity-80"
        >
          <span>🌐</span>
          <span>{showEnglish ? "Show original (Français)" : "Translate to English"}</span>
        </button>
      )}
    </div>
  );
};

// 2. PillarCard (WhoAmIView)
interface PillarCardProps {
  number: string;
  title: string;
  description: string;
}

export const PillarCard: React.FC<PillarCardProps> = ({ number, title, description }) => {
  return (
    <div className="bg-[#FBF8F3] p-6 rounded-2xl border border-[#659287]/15 hover:border-[#AC595B]/30 hover:shadow-sm transition-all flex items-start gap-4">
      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#AC595B] shrink-0 border border-[#AC595B]/20">
        <Heart className="w-4 h-4 fill-current text-[#AC595B]" />
      </div>
      <div>
        <h3 className="font-serif text-base sm:text-lg font-bold text-[#2D2D2D] mb-1">
          {number}. {title}
        </h3>
        <p className="text-sm text-[#2D2D2D]/75 font-sans leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

// 3. InterestCard (WhoAmIView)
interface InterestCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const InterestCard: React.FC<InterestCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-[#bbc4ae]/15 hover:border-[#bbc4ae]/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
      <div className="space-y-4">
        <div className="w-10 h-10 rounded-xl bg-[#F5EFE6] flex items-center justify-center">
          {icon}
        </div>
        <h4 className="font-serif text-base sm:text-lg font-bold text-[#2D2D2D]">
          {title}
        </h4>
        <p className="text-xs sm:text-sm text-[#2D2D2D]/85 leading-relaxed font-sans">
          {description}
        </p>
      </div>

      <div className="mt-4 pt-4 border-t border-[#F5EFE6] flex items-center gap-1">
        <span className="w-1.5 h-1.5 rounded-full bg-[#AC595B]/60" />
        <span className="text-[10px] uppercase tracking-wider font-semibold text-[#659287] font-sans">Eva Personal</span>
      </div>
    </div>
  );
};

// 4. PainPointCard (HomeView)
interface PainPointCardProps {
  quote: string;
  variant: "sage" | "pink";
}

export const PainPointCard: React.FC<PainPointCardProps> = ({ quote, variant }) => {
  const isPink = variant === "pink";
  return (
    <div
      className={`bg-white p-6 rounded-2xl opacity-90 border transition-all duration-300 hover:shadow-md hover:border-[#bbc4ae]/30 relative ${
        isPink
          ? "border-[#E8B9BA]/25 bg-gradient-to-br from-white to-[#E8B9BA]/5"
          : "border-[#bbc4ae]/25 bg-gradient-to-br from-white to-[#bbc4ae]/5"
      }`}
    >
      <p className="font-serif text-base italic text-[#2D2D2D] leading-relaxed">
        "{quote}"
      </p>

      {/* Bubble Pointer Tail */}
      <div
        className={`absolute bottom-0 h-4 w-4 bg-white border-b border-r transform rotate-45 translate-y-2 ${
          isPink ? "left-12 border-[#E8B9BA]/25" : "right-12 border-[#bbc4ae]/25"
        }`}
      />

      {/* Mini flower icon in bubble */}
      <div className="absolute -top-2.5 -right-2.5 w-6 h-6 rounded-full bg-white border border-[#F5EFE6] flex items-center justify-center shadow-sm">
        <SubtleSparkle className="w-2.5 h-2.5" color={isPink ? "fill-[#E8B9BA]" : "fill-[#bbc4ae]"} />
      </div>
    </div>
  );
};

// 5. PriorityCard (HomeView)
interface PriorityCardProps {
  number: string;
  title: string;
  description: string;
}

export const PriorityCard: React.FC<PriorityCardProps> = ({ number, title, description }) => {
  return (
    <div className="group bg-white p-6 rounded-2xl border border-[#bbc4ae]/15 hover:border-[#bbc4ae]/60 hover:shadow-md transition-all duration-300 relative overflow-hidden">
      {/* Decorative side block */}
      <div className="absolute top-0 left-0 w-1.5 h-full bg-[#bbc4ae] group-hover:bg-[#E8B9BA] transition-colors" />

      {/* Styled Badge instead of "icon" text */}
      <div className="w-10 h-10 rounded-xl bg-[#F5EFE6] flex items-center justify-center text-[#659287] font-serif text-base font-bold mb-4 group-hover:bg-[#AC595B]/10 group-hover:text-[#AC595B] transition-colors">
        {number}
      </div>

      <h3 className="font-serif text-lg font-bold text-[#2D2D2D] mb-1.5 group-hover:text-[#659287] transition-colors">
        {title}
      </h3>
      <p className="text-sm text-[#2D2D2D]/70 leading-relaxed font-sans">
        {description}
      </p>
    </div>
  );
};

// 6. TransformationItem (HomeView)
interface TransformationItemProps {
  boldText: string;
  normalText: string;
}

export const TransformationItem: React.FC<TransformationItemProps> = ({ boldText, normalText }) => {
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#FBF8F3] border border-transparent hover:border-[#bbc4ae]/10 transition-colors">
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
};

// 7. ReviewCard (HomeView & TestimonialsView)
interface ReviewCardProps {
  name: string;
  program: string;
  rating: number;
  highlight: string;
  quote: string;
  quoteEn?: string;
  showQuoteDecorator?: boolean;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  program,
  rating,
  highlight,
  quote,
  quoteEn,
  showQuoteDecorator = true,
}) => {
  return (
    <div className="bg-white p-8 rounded-3xl border border-[#bbc4ae]/15 hover:border-[#bbc4ae]/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full relative">
      {showQuoteDecorator && (
        <div className="text-5xl font-serif text-[#E8B9BA]/35 absolute top-4 left-6 pointer-events-none font-bold">
          “
        </div>
      )}

      <div className={`space-y-4 ${showQuoteDecorator ? "pt-4 relative z-10" : ""}`}>
        {/* Rating Stars */}
        <div className="flex gap-1 text-[#bbc4ae]">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current text-[#bbc4ae]" />
          ))}
        </div>

        {/* Highlight callout text */}
        <h3 className="font-serif text-lg sm:text-xl font-bold text-[#659287] italic leading-snug">
          "{highlight}"
        </h3>

        {/* Quote block */}
        <ExpandableQuote quote={quote} quoteEn={quoteEn} />
      </div>

      {/* Student layout footer */}
      <div className="flex items-center gap-4 mt-8 pt-6 border-t border-[#F5EFE6]">
        <div className="w-11 h-11 rounded-full bg-[#E8B9BA]/20 flex items-center justify-center border-2 border-[#E8B9BA]/20 shadow-sm text-[#AC595B] font-serif text-sm font-bold shrink-0">
          {name.charAt(0).toUpperCase()}
        </div>
        <div>
          <h4 className="font-serif text-sm font-bold text-[#2D2D2D]">
            {name}
          </h4>
          <p className="text-[11px] font-sans text-[#2D2D2D]/65 uppercase tracking-wider font-semibold">
            {program}
          </p>
        </div>
      </div>
    </div>
  );
};

// 8. ProgramCard (ServicesView)
interface ProgramCardProps {
  id: string;
  title: string;
  subtitle: string;
  forWho: string[];
  whatYouGet: string[];
  ctaText: string;
  onCtaClick: () => void;
}

export const ProgramCard: React.FC<ProgramCardProps> = ({
  id,
  title,
  subtitle,
  forWho,
  whatYouGet,
  ctaText,
  onCtaClick,
}) => {
  const isCoaching = id === "coaching";
  return (
    <div
      className={`bg-white p-8 sm:p-10 rounded-3xl border shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md relative ${
        isCoaching
          ? "border-[#E8B9BA]/40 bg-gradient-to-b from-white to-[#E8B9BA]/5"
          : "border-[#bbc4ae]/40 bg-gradient-to-b from-white to-[#bbc4ae]/5"
      }`}
    >
      {/* Chic top stamp badge */}
      <div className="absolute top-6 right-6 text-[#bbc4ae] opacity-20 pointer-events-none">
        <FleurDeLisOrnament className="w-12 h-12" />
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
              <div className="w-8 h-8 rounded-full bg-[#bbc4ae]/20 flex items-center justify-center text-[#659287]">
                <Users className="w-4 h-4" />
              </div>
            )}
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#659287]">
              {isCoaching ? "1-on-1 Customized" : "Group Practice"}
            </span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2D2D2D]">
            {title}
          </h2>
          <p className="text-sm italic font-serif text-[#2D2D2D]/80 font-medium">
            {subtitle}
          </p>
        </div>

        {/* "This is for you if" block */}
        <div className="space-y-4">
          <h3 className="text-xs uppercase tracking-wider font-extrabold text-[#2D2D2D] flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#AC595B]" />
            <span>This is for you if:</span>
          </h3>
          <ul className="space-y-3">
            {forWho.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-[#2D2D2D]/80 leading-relaxed font-sans">
                <Check className="w-4 h-4 text-[#659287] shrink-0 mt-0.5 stroke-[2.5]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* "What you get" list wrapped in stylish bordered frame */}
        <div className="bg-[#FBF8F3] p-6 rounded-2xl border border-[#bbc4ae]/15 space-y-4">
          <h3 className="text-xs uppercase tracking-wider font-extrabold text-[#2D2D2D] flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#659287]" />
            <span>What you get in the program:</span>
          </h3>
          <ul className="space-y-2.5">
            {whatYouGet.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#2D2D2D]/75 leading-relaxed font-sans">
                <span className="w-1 h-1 rounded-full bg-[#659287]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Program CTA Button */}
      <div className="pt-8">
        <button
          onClick={onCtaClick}
          className={`w-full py-4 rounded-xl font-sans text-xs uppercase font-extrabold tracking-widest cursor-pointer transition-all ${
            isCoaching
              ? "bg-[#E8B9BA] hover:bg-[#e1a5a7] text-[#2D2D2D] shadow-md shadow-[#E8B9BA]/20"
              : "bg-[#659287] hover:bg-[#527a70] text-white shadow-md shadow-[#659287]/20"
          }`}
        >
          {ctaText}
        </button>
        {isCoaching && (
          <p className="text-[10px] text-center text-[#2D2D2D]/70 font-semibold mt-2">
            ★ Spots are strictly limited to 6 clients at a time.
          </p>
        )}
      </div>
    </div>
  );
};

// 9. VideoTestimonialCard (TestimonialsView)
interface VideoTestimonialCardProps {
  id: string;
  name: string;
  location: string;
  program: string;
  summary: string;
  ctaText: string;
  imageUrl: string;
  isPlaying: boolean;
  onPlayToggle: () => void;
  onClosePlayer: () => void;
}

export const VideoTestimonialCard: React.FC<VideoTestimonialCardProps> = ({
  id,
  name,
  location,
  program,
  summary,
  ctaText,
  imageUrl,
  isPlaying,
  onPlayToggle,
  onClosePlayer,
}) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-[#bbc4ae]/15 hover:border-[#bbc4ae]/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full text-left">
      {/* Virtual Video Frame */}
      <div className="aspect-[4/3] bg-stone-900 relative">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover opacity-80 filter saturate-[0.85] brightness-95"
          referrerPolicy="no-referrer"
        />

        {/* Dark/Warm overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-black/10 flex flex-col justify-between p-4">
          {/* Top banner tag */}
          <span className="self-start px-2 py-0.5 rounded bg-white/20 backdrop-blur-md text-white text-[10px] uppercase font-bold tracking-wider font-sans">
            {location} • {program.split(" Coaching")[0]}
          </span>

          {/* Central Interactive Play Trigger */}
          <div className="self-center">
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              onClick={onPlayToggle}
              className="w-12 h-12 rounded-full bg-white/95 text-[#2D2D2D] flex items-center justify-center shadow-lg hover:text-[#659287] transition-colors focus:outline-none cursor-pointer"
              aria-label={`Play story video testimonial of student ${name}`}
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
            {name}, {location}
          </span>
        </div>

        {/* Overlay playing notice */}
        {isPlaying && (
          <div className="absolute inset-0 bg-stone-900 flex flex-col items-center justify-center p-6 text-center space-y-4 text-white z-20">
            <MessageCircle className="w-8 h-8 text-[#E8B9BA] animate-bounce" />
            <p className="font-serif italic text-sm">
              "Eva changed my whole outlook! Connecting over tea let me practice natural street-level sentences cleanly."
            </p>
            <button
              onClick={onClosePlayer}
              className="text-xs font-bold uppercase underline tracking-wider text-[#bbc4ae] hover:text-white transition-colors cursor-pointer"
            >
              Close Player
            </button>
          </div>
        )}
      </div>

      {/* Summary copy */}
      <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
        <p className="text-sm text-[#2D2D2D]/80 font-sans leading-relaxed">
          "{summary}"
        </p>

        <div className="pt-4 border-t border-[#F5EFE6]">
          <button
            onClick={onPlayToggle}
            className="text-xs font-bold uppercase tracking-wider text-[#659287] hover:text-[#527a70] hover:underline flex items-center gap-1 cursor-pointer focus:outline-none"
          >
            <span>{ctaText}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

// 10. CaseStudyCard (TestimonialsView)
interface CaseStudyCardProps {
  title: string;
  intro: string;
  wins: string[];
  student: string;
  rating: number;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  title,
  intro,
  wins,
  student,
  rating,
}) => {
  return (
    <div className="bg-[#FBF8F3] p-8 sm:p-10 rounded-3xl border border-[#bbc4ae]/15 hover:border-[#bbc4ae]/45 hover:shadow-sm transition-all text-left">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 border-b border-[#bbc4ae]/15 pb-6">
        <div className="space-y-1">
          <div className="flex gap-1 text-[#bbc4ae]">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current text-[#bbc4ae]" />
            ))}
          </div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2D2D2D]">
            {title}
          </h3>
        </div>

        <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white border border-[#659287]/20 text-[#659287] text-xs font-semibold">
          <Award className="w-3.5 h-3.5 text-[#659287]" />
          <span>Expat Case Study</span>
        </span>
      </div>

      <div className="space-y-4">
        <p className="text-sm font-sans text-[#2D2D2D]/75 italic">
          {intro}
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {wins.map((win, idx) => (
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
          <span>Accomplished by: {student}</span>
        </div>
      </div>
    </div>
  );
};
