import React from "react";
import { Sparkles, User, Users } from "lucide-react";
import { ProgramCard, WideProgramCard } from "./CardComponents";

interface ServicesViewProps {
  onCtaClick: () => void;
  onB1ProgramClick: () => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onCtaClick, onB1ProgramClick }) => {

  return (
    <div className="bg-white min-h-screen text-left">

      {/* 1. APP HERO SECTION */}
      <section className="pt-16 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#FBF8F3]/40 text-center">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#E8B9BA]/20 border border-[#E8B9BA]/35 text-[#2D2D2D] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#AC595B]" />
            <span>Services with Eva</span>
          </div>

          <h1 className="font-serif text-3.5xl sm:text-5xl font-bold text-[#2D2D2D] tracking-tight">
            How I Support Your French Journey
          </h1>

          <p className="text-base sm:text-lg text-[#2D2D2D]/85 font-sans max-w-xl mx-auto leading-relaxed">
            Choose the program that best fits your goals and learning style:
          </p>
        </div>
      </section>

      {/* 2. SECTION 1: 1-ON-1 PRIVATE PROGRAMS */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Section Header */}
          <div className="border-b border-[#2D2D2D]/10 pb-5">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#AC595B]">
                <User className="w-3.5 h-3.5 text-[#AC595B]" />
                <span>1-on-1 Private Lessons</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2D2D2D]">
                Tailored Private Attention
              </h2>
            </div>
          </div>

          {/* 2-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Card 1: 1-on-1 Coaching Program */}
            <ProgramCard
              id="coaching"
              badgeText="1-on-1 Intensive Coaching"
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
              ctaText="Book your free discovery call"
              onCtaClick={onCtaClick}
            />

            {/* Card 2: 1-on-1 Curriculum */}
            <ProgramCard
              id="curriculum"
              badgeText="1-on-1 Structured (A1→B2)"
              title="1-on-1 Standard Class"
              subtitle="From A1 to B2, conversation-focused."
              forWho={[
                "You are looking for classes focused on conversations and spoken French.",
                "You need a structured curriculum and feedback.",
                "You are looking for a 1-on-1 supportive space to make mistakes and grow.",
                "You prioritize lasting results over fast results."
              ]}
              whatYouGet={[
                "Online sessions tailored 100% to your exact level and pace",
                "Structured curriculum with in-depth grammar and vocabulary explanation",
                "Sliding scale pricing packages",
                "Flexible scheduling",
                "New resilient mindset & routine"
              ]}
              ctaText="Book your free discovery call"
              onCtaClick={onCtaClick}
            />
          </div>
        </div>
      </section>

      {/* 3. SECTION 2: SMALL-GROUP PRACTICE */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Section Header */}
          <div className="border-b border-[#2D2D2D]/10 pb-5">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#659287]">
                <Users className="w-3.5 h-3.5 text-[#659287]" />
                <span>Community & Group Learning</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2D2D2D]">
                Small-Group Practice
              </h2>
            </div>
          </div>

          {/* Wide Featured Card */}
          <WideProgramCard
            id="small-group"
            badgeText="Group Practice (Max 4 Learners)"
            title="Small-group French classes"
            subtitle="Small group, community and real practice."
            forWho={[
              "You want regular speaking practice in a supportive & small group",
              "You love the idea of connecting with people while you practice",
              "You want to use everyday French (the one natives really use) and learn about French culture.",
              "You are more interested by conversation practice than in-depth grammar explanations"
            ]}
            whatYouGet={[
              "Weekly discussions and speaking exercises in a small group with other French learners",
              "A relaxed, friendly and supportive environment to practice",
              "Topic-based lessons that matter to your real life",
              "A built-in community of women who gets you"
            ]}
            ctaText="Join small-group French classes"
            onCtaClick={onB1ProgramClick}
          />
        </div>
      </section>

    </div>
  );
};

