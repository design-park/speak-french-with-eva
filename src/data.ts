export interface FeatureItem {
  id: string;
  title: string;
  description: string;
}

export interface ProgramItem {
  id: string;
  title: string;
  subtitle: string;
  forWho: string[];
  whatYouGet: string[];
  ctaText: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  program: string;
  rating: number;
  highlight: string;
  quote: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface VideoTestimonial {
  id: string;
  name: string;
  location: string;
  program: string;
  summary: string;
  ctaText: string;
  videoUrl?: string;
}

export interface CaseStudyItem {
  id: string;
  title: string;
  intro: string;
  wins: string[];
  student: string;
  rating: number;
}

// Accent & Aesthetic Colors
export const COLORS = {
  sage: "#bbc4ae",
  pastelPink: "#E8B9BA",
  warmBeige: "#FBF8F3",
  warmCream: "#F5EFE6",
  darkCharcoal: "#2D2D2D",
};

export const homepageData = {
  hero: {
    title: "Speak without freezing mid-sentence. Make French a daily habit.",
    subtitle: "I help expat women master everyday French so they can feel confident, independent, and finally at home in France.",
    cta: "Get a free discovery call",
  },
  painPoints: {
    title: "Does this sound like you?",
    points: [
      "I understand a lot, but I freeze when I have to respond.",
      "People speak so fast. I get lost after two sentences.",
      "I can't express my personality the way I can in my native language.",
      "I feel less confident than I usually am.",
    ],
  },
  theProblem: {
    title: "The problem is not you—and it's not a lack of grammar rules or vocabulary.",
    description: "The problem is the lack of communication from waiting to be perfect before trying to speak, and the difference between the French you learned versus the one actually spoken.",
    highlight: "Fluency is built on daily, imperfect conversations, not perfect sentences.",
  },
  myApproach: {
    title: "MY APPROACH",
    subtitle: "As your personal coach, here are my main priorities:",
    priorities: [
      {
        id: "1",
        title: "Real-world Contexts",
        description: "for natural social interactions",
      },
      {
        id: "2",
        title: "Daily spoken French",
        description: "that actually gets used",
      },
      {
        id: "3",
        title: "Your personal goals",
        description: "not a generic curriculum",
      },
      {
        id: "4",
        title: "Building confidence",
        description: "through practice, not perfection",
      },
    ],
    cta: "See my program",
  },
  transformations: {
    title: "The transformations I've seen",
    subtitle: "My students have learned to thrive in everyday, real-life situations. They've:",
    items: [
      "nailed job interviews they thought they'd bomb",
      "made small talk with colleagues without overthinking every word",
      "delivered professional presentations with confidence",
      "made appointments over the phone without stress",
      "expressed their true personality—no more hiding behind safe, simple sentences",
      "bonded with their in-laws and finally felt like a true part of the family",
    ],
  },
  ctaSection: {
    title: "What do you want to work on? Let's discuss your goals!",
    ctaPrimary: "Get a free discovery call",
    ctaSecondary: "Send me an email",
  },
};

export const whoAmIData = {
  hero: {
    badge: "Hey, I am Eva!",
    title: "My mission is to help you feel fully yourself in French.",
    description: "With a degree in French as a foreign language and several years of experience, I've had the pleasure to support women from different backgrounds in improving their conversational French and feeling more confident speaking.\n\nToday they feel confident speaking everyday French and they feel at home in their new life in France.",
  },
  whyFocus: {
    title: "Why I focus on expat women",
    quoteBadge: "I refuse to let the language barrier make you feel smaller than you are!",
    content1: "I naturally started working with a lot of expatriate women, and I realized I really enjoy supporting them. As a woman in France, I completely relate to your daily life, goals, and needs, which allows me to create a highly tailored, strategic coaching experience that directly aligns with your personal and professional ambitions.",
    content2: "To bring these ambitions to life, our sessions blend professional guidance with natural, real-life practice rather than rigid academic drills. We get along seamlessly and laugh often, preparing you to navigate any everyday situation and speak with genuine ease wherever you go.",
  },
  pillars: {
    title: "How I support you",
    items: [
      "A safe space where mistakes are welcome",
      "No judgement, no pressure, no stress",
      "Conversations designed around your real life",
      "Progress you can feel, not just measure",
    ],
    highlight: "You're not broken. You don't need fixing. You just need someone who gets it—and a method that actually works.",
  },
  offDuty: {
    title: "Off Duty",
    subtitle: "When I'm not teaching, I'm probably just like you—following my curiosity and enjoying the little things in life.",
    items: [
      {
        id: "1",
        title: "Learning foreign languages",
        description: "Embracing the beautiful mess of being a student myself.",
      },
      {
        id: "2",
        title: "Reading",
        description: "Usually paired with a warm cup of tea and a slow afternoon.",
      },
      {
        id: "3",
        title: "Exploring fashion",
        description: "Style is just another beautiful form of self-expression.",
      },
      {
        id: "4",
        title: "Listening to music",
        description: "From weekly favorites to new underground finds.",
      },
    ],
  },
};

export const servicesData = {
  hero: {
    title: "How I Support Your French Journey",
    subtitle: "I offer two paths, depending on what you need right now:",
  },
  programs: [
    {
      id: "coaching",
      title: "1-on-1 Coaching Program",
      subtitle: "Intensive, personalized support.",
      forWho: [
        "You are ready to commit to a structured program.",
        "You freeze in conversations and need high-touch support.",
        "You are living in France or in a French speaking country.",
        "You're ready to invest in premium, customized coaching.",
      ],
      whatYouGet: [
        "Online sessions tailored 100% to our needs and goals",
        "Deep dives into your specific challenges",
        "Follow-up between sessions",
        "Flexible scheduling",
        "New resilient mindset & routine",
      ],
      ctaText: "Apply to a discovery call",
    },
    {
      id: "club",
      title: "The Conversation Club",
      subtitle: "Community, consistency, and real practice.",
      forWho: [
        "You want regular speaking practice in a supportive & small group (max 4 learners)",
        "You love the idea of connecting with people while you practice.",
        "You want to use Everyday French (the one natives really use) and talk about French culture.",
        "You already have a solid French routine and only need speaking practice.",
      ],
      whatYouGet: [
        "Weekly small group conversations with other expat women",
        "A relaxed, friendly and supportive environment to practice",
        "Topic-based conversations that matter to your real life",
        "A built-in community of women who gets you",
      ],
      ctaText: "Join the conversation club",
    },
  ],
  sessionGlimpse: {
    badge: "EN VRAI",
    title: "À quoi ressemble une séance avec moi.",
    subtitle: "Quelques captures de séances en visio avec mes élèves - pour que tu visualises bien le format avant de candidater.",
    feedbacks: [
      {
        student: "Daniel us",
        quote: "Énormes progrès en 3 mois pour m'exprimer.",
        imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
      },
      {
        student: "Troy us",
        quote: "Une des meilleures décisions que j'ai prises.",
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
      },
    ],
  },
  faqs: {
    badge: "QUESTIONS FRÉQUENTES",
    title: "Tu as peut-être une de ces questions en tête.",
    items: [
      {
        id: "faq-1",
        question: "Quel niveau faut-il pour commencer ?",
        answer: "De A2 à C1. L'important est d'avoir les bases pour pouvoir tenir une conversation, même imparfaite. On est justement là pour progresser - pas pour être déjà parfait.",
      },
      {
        id: "faq-2",
        question: "Combien coûte le coaching ?",
        answer: "Le tarif dépend de la durée de ton parcours (1 à 6 mois) et de la fréquence des sessions. Elisabeth te donne le tarif exact dès le premier échange, sans engagement et sans pression; l'appel découverte sert à voir si l'accompagnement te convient, pas à te vendre quoi que ce soit.",
      },
      {
        id: "faq-3",
        question: "Les sessions se font comment ?",
        answer: "Toutes les sessions se déroulent en ligne via Zoom ou Google Meet. Tu as accès à un tableau de bord partagé avec tes ressources de cours, notes de session et exercices personnalisés.",
      },
      {
        id: "faq-4",
        question: "Je reçois quoi après chaque session ?",
        answer: "Après chaque session, tu reçois un compte-rendu écrit reprenant le nouveau vocabulaire, les tournures idiomatiques naturelles qu'on a vues, et une fiche d'exercices d'ancrage rapide pour pratiquer au quotidien.",
      },
      {
        id: "faq-5",
        question: "Puis-je payer via mon entreprise ?",
        answer: "Oui, tout à fait ! De nombreuses étudiantes se font financer leur coaching par leur plan de formation d'entreprise (comme le budget formation annuel). Je te fournis toutes les factures et documents requis pour ton remboursement.",
      },
    ],
  },
};

export const testimonialsData = {
  hero: {
    title: "What My Students Say",
    subtitle: "Real stories from expat women who've found their French voice.",
  },
  videoReviews: [
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
  ],
  proofs: [
    {
      id: "p-1",
      name: "Sarah",
      location: "",
      program: "1-on-1 Coaching",
      rating: 5,
      highlight: "Loved the worksheets and playful touch.",
      quote: "Eva is a very friendly and calm teacher. She asked me, what i wanted to learn and prepared worksheets for those topics. I liked that there was a playful touch to it sometimes because studying for a long time can be tiring and that helped me regain my energy! Her explanations were very good and if i didnt understand she was always patient and tried again. After the course i had better understanding of grammar and lewrnee a lot of new words!! it still sticks to me to this day, she definitely helped me a lot and i actually enjoyed the lessons 🫶",
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    },
    {
      id: "p-2",
      name: "Laura Paz",
      location: "",
      program: "1-on-1 Coaching",
      rating: 5,
      highlight: "Patient, kind, and adapts the lessons.",
      quote: "Eva is a great teacher. She's patient and kind and adapts the lessons to my objectives. I recommend her 100%.",
      imageUrl: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=150",
    },
    {
      id: "p-3",
      name: "Erica Blotto",
      location: "",
      program: "1-on-1 Coaching",
      rating: 5,
      highlight: "Good balance of theory and practice.",
      quote: "Great teacher for learning French and practicing conversation. Always great exercises and a good balance of theory / practice, plus Eva is a very caring person.",
      imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
    },
    {
      id: "p-4",
      name: "Oksana Volostnykh",
      location: "",
      program: "1-on-1 Coaching",
      rating: 5,
      highlight: "Happy that Eva accommodates my requests.",
      quote: "I learn french for immigration and i hate doing homework, so i am really happy that Eva accomodates my requests including this no-homework situation. She is very patient teatcher, plans lessons according to priorities, requests and weaknesses (so you dont have skills that are much weaker than others, like you speak well but barely can read and vise versa). It has been a bit more than a year that i am learning french with Eva, i had 0 french knowledge before, right now it is like A2-ish, taking into account that i don't do a single thing for improving my french outside of our lessons - i consider my progress as a really good one.",
      imageUrl: "https://images.unsplash.com/photo-1534751516642-a131fed10495?auto=format&fit=crop&q=80&w=150",
    },
    {
      id: "p-5",
      name: "Rachel Bilouson",
      location: "",
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
      location: "",
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
      location: "",
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
      location: "",
      program: "1-on-1 Coaching",
      rating: 5,
      highlight: "Trustworthy and genuinely caring.",
      quote: "Very patient teacher. Trustworthy and genuinely caring! She takes time to get to know you so nothing feels impersonal. She's got you ;)",
      imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150",
    },
    {
      id: "p-9",
      name: "Robert Bradshaw",
      location: "",
      program: "1-on-1 Coaching",
      rating: 5,
      highlight: "Superb French Tutor.",
      quote: "Eva is a superb French Tutor. Able to identify and target the key areas slowing progression to build confidence and understanding. Knowledgeable, patient and fun, it's exactly what l needed to make the lessons both effective and enjoyable.",
      imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
    },
    {
      id: "p-10",
      name: "Y BenKadour",
      location: "",
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
      location: "",
      program: "1-on-1 Coaching",
      rating: 5,
      highlight: "Excellent French teacher!",
      quote: "Très bonne professeur de français ! Très pédagogue, je recommande à tous !",
      quoteEn: "Excellent French teacher! Very skilled at teaching, I recommend her to everyone!",
      imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150",
    },
  ],
  caseStudies: [
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
  ],
};
