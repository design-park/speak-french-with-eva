import React, { useState } from "react";
import { VideoTestimonialCard, ReviewCard, CaseStudyCard } from "./CardComponents";
import { Video } from "lucide-react";
import { VideoModal } from "./VideoModal";

interface TestimonialsViewProps {
  onCtaClick: () => void;
}

export interface VideoInterview {
  id: string;
  name: string;
  role?: string;
  location?: string;
  program: string;
  title: string;
  summary: string;
  youtubeId: string;
  tag?: string;
}

export const FEATURED_VIDEO_INTERVIEWS: VideoInterview[] = [
  {
    id: "v-erica",
    name: "Erica Blotto",
    role: "Expat Student",
    location: "France",
    program: "1-on-1 Coaching",
    title: "From Stuck to Confident in French",
    summary:
      "Erica opens up about finding the right balance of conversation practice and grammar theory, and how working with Eva helped her shed hesitation and feel truly at ease speaking French.",
    youtubeId: "qxD1C3Td19A",
    tag: "Student Interview",
  },
  {
    id: "v-oksana",
    name: "Oksana Volostnykh",
    role: "Programmer in Canada",
    location: "Canada",
    program: "1-on-1 Coaching",
    title: "From Zero to Understanding French",
    summary:
      "Working full-time in tech and learning French for immigration without time for homework, Oksana shares how Eva adapted completely to her schedule, taking her from zero to A2.",
    youtubeId: "Qz3LWLurHME",
    tag: "Student Interview",
  },
];

export const VIDEO_REVIEWS = FEATURED_VIDEO_INTERVIEWS;

export interface TestimonialProof {
  id: string;
  name: string;
  program: string;
  rating: number;
  highlight: string;
  quote: string;
  quoteEn?: string;
  imageUrl?: string;
  youtubeId?: string;
}

export const TESTIMONIALS_PROOFS: TestimonialProof[] = [
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
    youtubeId: "qxD1C3Td19A",
  },
  {
    id: "p-4",
    name: "Oksana Volostnykh",
    program: "1-on-1 Coaching",
    rating: 5,
    highlight: "Happy that Eva accommodates my requests.",
    quote: "I learn french for immigration and i hate doing homework, so i am really happy that Eva accomodates my requests including this no-homework situation. She is very patient teatcher, plans lessons according to priorities, requests and weaknesses (so you dont have skills that are much weaker than others, like you speak well but barely can read and vise versa). It has been a bit more than a year that i am learning french with Eva, i had 0 french knowledge before, right now it is like A2-ish, taking into account that i don't do a single thing for improving my french outside of our lessons - i consider my progress as a really good one.",
    imageUrl: "https://images.unsplash.com/photo-1534751516642-a131fed10495?auto=format&fit=crop&q=80&w=150",
    youtubeId: "Qz3LWLurHME",
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

import { EiffelTower, Croissant } from "./DecorativeAccents";

export const TestimonialsView: React.FC<TestimonialsViewProps> = ({ onCtaClick }) => {
  const [selectedVideo, setSelectedVideo] = useState<{
    youtubeId: string;
    title?: string;
    studentName?: string;
  } | null>(null);

  return (
    <div className="bg-white min-h-screen text-left">

      {/* 1. HERO - WHAT MY STUDENTS SAY */}
      <section className="pt-20 pb-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#FBF8F3]/40 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#E8B9BA]/20 text-[#AC595B] font-serif italic text-sm border border-[#E8B9BA]/40">
            Real Transformations
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#2D2D2D] tracking-tight">
            What My Students Say
          </h1>
          <p className="text-base sm:text-lg text-[#2D2D2D]/85 font-sans max-w-2xl mx-auto leading-relaxed">
            Real student video conversations and 100% verified written reviews from expatriate women who found their confident French voice with Eva.
          </p>
        </div>
      </section>

      {/* 2. FEATURED VIDEO INTERVIEWS */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-[#FAF0ED]/50 border-y border-[#E8B9BA]/20 relative">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="border-b border-[#bbc4ae]/20 pb-5">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#AC595B] mb-1.5">
              <Video className="w-4 h-4" />
              <span>Featured Video Interviews</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3.5xl font-bold text-[#2D2D2D]">
              Hear Their Journeys In Their Own Words
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FEATURED_VIDEO_INTERVIEWS.map((interview) => (
              <VideoTestimonialCard
                key={interview.id}
                id={interview.id}
                name={interview.name}
                role={interview.role}
                location={interview.location}
                program={interview.program}
                title={interview.title}
                summary={interview.summary}
                youtubeId={interview.youtubeId}
                tag={interview.tag}
                onPlay={() =>
                  setSelectedVideo({
                    youtubeId: interview.youtubeId,
                    title: interview.title,
                    studentName: interview.name,
                  })
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. WRITTEN REVIEWS GRID */}
      <section className="py-16 pb-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        {/* Background French ornaments */}
        <div className="absolute right-8 top-12 opacity-10 text-[#659287] pointer-events-none transform rotate-12 hidden md:block">
          <EiffelTower className="w-56 h-56" />
        </div>
        <div className="absolute left-8 bottom-12 opacity-10 text-[#E8B9BA] pointer-events-none transform -rotate-12 hidden md:block">
          <Croissant className="w-48 h-48" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#bbc4ae]/20 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#659287]">
                VERIFIED EXPERIENCES
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2D2D2D] mt-1">
                Written Client Reviews
              </h2>
            </div>
            <div>
              <a
                href="https://www.google.com/search?hl=fr-FR&gl=fr&q=Speak+French+with+Eva&ludocid=3354417093084286652&lsig=AB86z5VEo1077elxhUo4r-pE3a7t&hl=fr&gl=FR&sa=X&ved=2ahUKEwjA1fOYpr6VAxVSUaQEHcKhIJMQ3PALegQIGxAO#lrd=0x5a0dca4ca2f206d:0x2e8d4892ddc98ebc,1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#659287]/30 bg-[#FBF8F3] hover:bg-[#659287] hover:text-white text-[#659287] font-sans text-xs uppercase font-extrabold tracking-wider transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 shadow-xs"
              >
                <span>View on Google Reviews</span>
                <span className="text-xs">↗</span>
              </a>
            </div>
          </div>

          {/* 11 Cards Written reviews Grid */}
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
                onWatchVideo={
                  proof.youtubeId
                    ? () =>
                        setSelectedVideo({
                          youtubeId: proof.youtubeId!,
                          title: proof.highlight,
                          studentName: proof.name,
                        })
                    : undefined
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal Player */}
      <VideoModal
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        youtubeId={selectedVideo?.youtubeId || ""}
        title={selectedVideo?.title}
        studentName={selectedVideo?.studentName}
      />

      {/* 3. FINAL BANNER CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#FBF8F3]/30">
        <div className="max-w-4xl mx-auto text-center space-y-8 bg-[#F7E5E6] border border-[#E8B9BA]/35 text-[#2D2D2D] p-10 sm:p-14 rounded-3xl relative overflow-hidden shadow-sm">
          {/* Background French ornaments inside the banner card */}
          <div className="absolute right-[-30px] bottom-[-35px] opacity-20 pointer-events-none transform rotate-12">
            <EiffelTower className="w-48 h-48" color="stroke-[#659287]" />
          </div>
          <div className="absolute left-[-15px] top-[-15px] opacity-20 pointer-events-none transform -rotate-12">
            <Croissant className="w-36 h-36" color="stroke-[#AC595B]" />
          </div>

          <div className="space-y-3 relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#659287]">TAKE THE FIRST STEP</span>
            <h2 className="font-serif text-3xl sm:text-4.5xl font-bold max-w-xl mx-auto leading-tight text-[#2D2D2D]">
              Ready to make French your everyday reality?
            </h2>
            <p className="text-[#2D2D2D]/80 max-w-md mx-auto text-sm">
              We begin with a gentle, friendly, zero-pressure 30-minute video conversation.
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

