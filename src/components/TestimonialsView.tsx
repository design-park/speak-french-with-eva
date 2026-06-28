import React, { useState } from "react";
import { VideoTestimonialCard, ReviewCard, CaseStudyCard } from "./CardComponents";
import { Video } from "lucide-react";

interface TestimonialsViewProps {
  onCtaClick: () => void;
}

export const VIDEO_REVIEWS = [
  {
    id: "v-1",
    name: "Clara M.",
    location: "Lyon",
    program: "1-on-1 Coaching Program",
    summary: "Before Eva, I was terrified to speak, and felt an awkwardness in any cozy apartment. This program completely shifted my confidence.",
    ctaText: "Watch Clara's Story",
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "v-2",
    name: "Chloé S.",
    location: "Paris",
    program: "1-on-1 Coaching Program",
    summary: "Before Eva, I was terrified to speak... she gave me total confidence in navigating daily Parisian life with warmth and patience.",
    ctaText: "Watch Chloé's Story",
    imageUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "v-3",
    name: "Camille L.",
    location: "Lyon",
    program: "1-on-1 Coaching Program",
    summary: "Learn at ease in an optimal environment. I stopped overthinking and finally found my confidence talking with native French speakers.",
    ctaText: "Watch Camille's Story",
    imageUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=400",
  },
];

export const TESTIMONIALS_PROOFS = [
  {
    id: "p-1",
    name: "Sarah",
    program: "1-on-1 Coaching",
    rating: 5,
    highlight: "Loved the worksheets and playful touch.",
    quote: "Eva is a very friendly and calm teacher. She asked me, what i wanted to learn and prepared worksheets for those topics. I liked that there was a playful touch to it sometimes because studying for a long time can be tiring and that helped me regain my energy! Her explanations were very good and if i didnt understand she was always patient and tried again. After the course i had better understanding of grammar and lewrnee a lot of new words!! it still sticks to me to this day, she definitely helped me a lot and i actually enjoyed the lessons 🫶",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
  },
  {
    id: "p-2",
    name: "Laura Paz",
    program: "1-on-1 Coaching",
    rating: 5,
    highlight: "Patient, kind, and adapts the lessons.",
    quote: "Eva is a great teacher. She's patient and kind and adapts the lessons to my objectives. I recommend her 100%.",
    imageUrl: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=150",
  },
  {
    id: "p-3",
    name: "Erica Blotto",
    program: "1-on-1 Coaching",
    rating: 5,
    highlight: "Good balance of theory and practice.",
    quote: "Great teacher for learning French and practicing conversation. Always great exercises and a good balance of theory / practice, plus Eva is a very caring person.",
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
  },
  {
    id: "p-4",
    name: "Oksana Volostnykh",
    program: "1-on-1 Coaching",
    rating: 5,
    highlight: "Happy that Eva accommodates my requests.",
    quote: "I learn french for immigration and i hate doing homework, so i am really happy that Eva accomodates my requests including this no-homework situation. She is very patient teatcher, plans lessons according to priorities, requests and weaknesses (so you dont have skills that are much weaker than others, like you speak well but barely can read and vise versa). It has been a bit more than a year that i am learning french with Eva, i had 0 french knowledge before, right now it is like A2-ish, taking into account that i don't do a single thing for improving my french outside of our lessons - i consider my progress as a really good one.",
    imageUrl: "https://images.unsplash.com/photo-1534751516642-a131fed10495?auto=format&fit=crop&q=80&w=150",
  },
  {
    id: "p-5",
    name: "Rachel Bilouson",
    program: "1-on-1 Coaching",
    rating: 5,
    highlight: "Inspires confidence and excellent support.",
    quote: "Eva est une enseignante très pédagogue, très douce et très pro qui met beaucoup de soin dans ses cours. Elle met en confiance et on bénéficie d'un réel suivi. Je recommande totalement ses services :)",
    quoteEn: "Eva is a very patient, kind, and professional teacher who puts a lot of care into her lessons. She inspires confidence and provides excellent support. I highly recommend her services :)",
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150",
  },
  {
    id: "p-6",
    name: "Jh",
    program: "1-on-1 Coaching",
    rating: 5,
    highlight: "Attentive, calm, and puts you at ease.",
    quote: "J’ai déjà appris le français auparavant, mais j’avais du mal à parler et je manquais de confiance. Avec ses cours, je me sens progressivement plus à l’aise à l’oral, sans pression. Elle est très calme et à l’écoute, ce qui met vraiment en confiance. Les cours sont agréables et motivants, je recommande sans hésiter.",
    quoteEn: "I had learned French before, but I struggled to speak and lacked confidence. With her lessons, I'm gradually feeling more comfortable speaking, without any pressure. She is very calm and attentive, which really puts you at ease. The lessons are enjoyable and motivating, I recommend her without hesitation.",
    imageUrl: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&q=80&w=150",
  },
  {
    id: "p-7",
    name: "Coumba",
    program: "1-on-1 Coaching",
    rating: 5,
    highlight: "A very effective and pleasant experience.",
    quote: "C'est une enseignante très efficace. J'ai beaucoup aimé apprendre le français avec elle. Je la recommande vivement ! C'était une expérience très agréable.",
    quoteEn: "She's a very effective teacher. I really enjoyed learning French with her. I highly recommend her! It was a very pleasant experience.",
    imageUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=150",
  },
  {
    id: "p-8",
    name: "Asia Rizzi",
    program: "1-on-1 Coaching",
    rating: 5,
    highlight: "Trustworthy and genuinely caring.",
    quote: "Very patient teacher. Trustworthy and genuinely caring! She takes time to get to know you so nothing feels impersonal. She's got you ;)",
    imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150",
  },
  {
    id: "p-9",
    name: "Robert Bradshaw",
    program: "1-on-1 Coaching",
    rating: 5,
    highlight: "Superb French Tutor.",
    quote: "Eva is a superb French Tutor. Able to identify and target the key areas slowing progression to build confidence and understanding. Knowledgeable, patient and fun, it's exactly what l needed to make the lessons both effective and enjoyable.",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
  },
  {
    id: "p-10",
    name: "Y BenKadour",
    program: "1-on-1 Coaching",
    rating: 5,
    highlight: "Gained confidence!",
    quote: "De très bons cours avec une personne très professionnelle :) J’ai beaucoup appris et j’ai gagné en confiance !!",
    quoteEn: "Very good lessons with a very professional person :) I learned a lot and gained confidence!!",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
  },
  {
    id: "p-11",
    name: "Annabelle Guellil",
    program: "1-on-1 Coaching",
    rating: 5,
    highlight: "Excellent French teacher!",
    quote: "Très bonne professeur de français ! Très pédagogue, je recommande à tous !",
    quoteEn: "Excellent French teacher! Very skilled at teaching, I recommend her to everyone!",
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150",
  },
];

export const CASE_STUDIES = [
  {
    id: "cs-1",
    title: "Led a business presentation",
    intro: "Led a business presentation and gained mental clarity and native flow. Key specific wins:",
    wins: [
      "Led a business presentation at her marketing agency using nuanced business vocabulary.",
      "Navigated business debates with colleagues without reverting to English.",
      "Gained absolute composure during professional Q&As.",
    ],
    student: "Clara M., Lyon, Conversation Club",
    rating: 5,
  },
  {
    id: "cs-2",
    title: "Navigated government forms",
    intro: "Navigated complex French administration forms and applications. Key specific wins:",
    wins: [
      "Completed her carte de séjour paperwork and inquiry entirely in spoken French.",
      "Navigated government portal calls confidently with proper administrative terms.",
      "Represented herself clearly without needing an interpreter or help.",
    ],
    student: "Eliza S., Montpellier, Conversation Club",
    rating: 5,
  },
  {
    id: "cs-3",
    title: "Made local friends",
    intro: "Eva helped connect on a deeper human level with locals and in-laws. Key specific wins:",
    wins: [
      "Made real French friends in local associations and yoga groups.",
      "Exchanged natural jokes and family stories over long Sunday dinners.",
      "Expressed her true, vibrant personality rather than simplified survival phrases.",
    ],
    student: "Chloé S., Paris, 1-on-1 Coaching",
    rating: 5,
  },
];

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
            What My Students Say
          </h1>
          <p className="text-base sm:text-lg text-[#2D2D2D]/85 font-sans max-w-xl mx-auto leading-relaxed">
            Real stories from expat women who've found their French voice.
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
            {VIDEO_REVIEWS.map((video) => {
              const isPlaying = playingVideoId === video.id;
              return (
                <VideoTestimonialCard
                  key={video.id}
                  id={video.id}
                  name={video.name}
                  location={video.location}
                  program={video.program}
                  summary={video.summary}
                  ctaText={video.ctaText}
                  imageUrl={video.imageUrl}
                  isPlaying={isPlaying}
                  onPlayToggle={() => setPlayingVideoId(isPlaying ? null : video.id)}
                  onClosePlayer={() => setPlayingVideoId(null)}
                />
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
            {TESTIMONIALS_PROOFS.map((proof) => (
              <ReviewCard
                key={proof.id}
                name={proof.name}
                program={proof.program}
                rating={proof.rating}
                highlight={proof.highlight}
                quote={proof.quote}
                quoteEn={proof.quoteEn}
                showQuoteDecorator={false}
              />
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

          {/* List of Case Studies wins */}
          <div className="space-y-8 max-w-4xl mx-auto">
            {CASE_STUDIES.map((caseStudy) => (
              <CaseStudyCard
                key={caseStudy.id}
                title={caseStudy.title}
                intro={caseStudy.intro}
                wins={caseStudy.wins}
                student={caseStudy.student}
                rating={caseStudy.rating}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 5. FINAL BANNER CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#F5EFE6]/50">
        <div className="max-w-4xl mx-auto text-center space-y-8 bg-[#F7E5E6] border border-[#E8B9BA]/35 text-[#2D2D2D] p-10 sm:p-14 rounded-3xl relative overflow-hidden shadow-sm">
          
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

