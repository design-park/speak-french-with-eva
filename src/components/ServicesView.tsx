import React from "react";
import { Sparkles } from "lucide-react";
import { ProgramCard } from "./CardComponents";

interface ServicesViewProps {
  onCtaClick: () => void;
  onB1ProgramClick: () => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onCtaClick, onB1ProgramClick }) => {

  return (
    <div className="bg-white min-h-screen text-left">
      
      {/* 1. APP HERO SECTION */}
      <section className="pt-16 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#FBF8F3]/30 text-center">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#E8B9BA]/20 border border-[#E8B9BA]/35 text-[#2D2D2D] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#AC595B]" />
            <span>Services with Eva</span>
          </div>

          <h1 className="font-serif text-3.5xl sm:text-5xl font-bold text-[#2D2D2D] tracking-tight">
            How I Support Your French Journey
          </h1>

          <p className="text-base sm:text-lg text-[#2D2D2D]/85 font-sans max-w-xl mx-auto leading-relaxed">
            I offer two paths, depending on what you need right now:
          </p>
        </div>
      </section>

      {/* 2. PROGRAM OPTIONS SIDE-BY-SIDE */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 relative z-10 -mt-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            <ProgramCard
              id="coaching"
              title="1-on-1 Coaching Program"
              subtitle="Intensive, personalized support."
              forWho={[
                "You are ready to commit to a structured program.",
                "You freeze in conversations and need high-touch support.",
                "You are living in France or in a French speaking country.",
                "You're ready to invest in premium, customized coaching."
              ]}
              whatYouGet={[
                "Online sessions tailored 100% to our needs and goals",
                "Deep dives into your specific challenges",
                "Follow-up between sessions",
                "Flexible scheduling",
                "New resilient mindset & routine"
              ]}
              ctaText="Apply to a discovery call"
              onCtaClick={onCtaClick}
            />

            <ProgramCard
              id="b1-program"
              title='"B1: Breakthrough" Program'
              subtitle="Small group, clear goal, and real practice."
              forWho={[
                "You want to work towards B1 level in a supportive & small group (max 4 learners)",
                "You keep missing job opportunities in France because of your current level.",
                "You want to use Everyday French (the one natives really use) and learn about French culture.",
                "You already have A2 level."
              ]}
              whatYouGet={[
                "A structured curriculum (A2→B1) in a small group with other expat women",
                "A relaxed, friendly and supportive environment to practice",
                "Topic-based lessons that matter to your real life",
                "A built-in community of women who gets you"
              ]}
              ctaText="Join the B1 Breakthrough Program"
              onCtaClick={onB1ProgramClick}
            />

          </div>
        </div>
      </section>

    </div>
  );
};

