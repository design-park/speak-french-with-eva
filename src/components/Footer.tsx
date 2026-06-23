import React from "react";
import { Mail, Instagram, Linkedin, Heart, HelpCircle, ArrowUp } from "lucide-react";
import { LeafTwig } from "./DecorativeAccents";

interface FooterProps {
  setCurrentTab: (tab: string) => void;
  onCtaClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentTab, onCtaClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNav = (tabId: string) => {
    setCurrentTab(tabId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#FBF8F3] border-t border-[#bbc4ae]/20 pt-16 pb-8 relative overflow-hidden">
      {/* Background flourish */}
      <div className="absolute right-0 bottom-0 pointer-events-none opacity-5 max-w-xs translate-x-20 translate-y-20">
        <LeafTwig className="w-96 h-96" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand Info */}
          <div className="md:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <span className="text-2xl" role="img" aria-label="French flag">🇫🇷</span>
              <span className="font-serif text-2xl font-bold text-[#2D2D2D] tracking-tight">
                Speak French with <span className="text-[#AC595B] italic font-normal">Eva</span>
              </span>
            </div>
            <p className="text-[#2D2D2D]/85 font-sans text-sm max-w-sm leading-relaxed">
              Helping expat women in France find their confidence, build supportive communities, master spoken communication, and truly feel at home.
            </p>
            
            {/* Stamp/Badge style design accent */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E8B9BA]/10 border border-[#AC595B]/30 text-[#AC595B] text-xs font-semibold">
              <Heart className="w-3.5 h-3.5 fill-[#AC595B] text-[#AC595B]" />
              <span>Chic & Empathetic French Coaching</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-[#2D2D2D] tracking-wide">Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                { label: "Home", id: "home" },
                { label: "Services", id: "services" },
                { label: "Who am I?", id: "who-am-i" },
                { label: "Testimonials", id: "testimonials" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNav(link.id)}
                    className="text-[#2D2D2D]/75 hover:text-[#5E6C4D] text-sm font-semibold transition-colors cursor-pointer text-left focus:outline-none"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Reach Me */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-[#2D2D2D] tracking-wide">Reach me</h3>
            <p className="text-[#2D2D2D]/85 text-sm leading-snug">
              Ready to start speaking freely? Let's connect!
            </p>
            
            {/* Email link */}
            <a 
              href="mailto:speakfrenchwitheva@gmail.com" 
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#5E6C4D] hover:text-[#4E5B3E] hover:underline transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>speakfrenchwitheva@gmail.com</span>
            </a>

            {/* Social icons */}
            <div className="flex gap-3 pt-2">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full bg-white border border-[#bbc4ae]/20 flex items-center justify-center text-[#2D2D2D]/75 hover:text-[#AC595B] hover:border-[#AC595B] hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full bg-white border border-[#bbc4ae]/20 flex items-center justify-center text-[#2D2D2D]/75 hover:text-[#5E6C4D] hover:border-[#5E6C4D] hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <button 
                onClick={onCtaClick} 
                className="w-10 h-10 rounded-full bg-[#bbc4ae]/10 border border-[#5E6C4D]/30 flex items-center justify-center text-[#5E6C4D] hover:text-white hover:bg-[#5E6C4D] hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300"
                aria-label="Contact Eva Support Link"
              >
                <HelpCircle className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Divider with Fleur de lis */}
        <div className="border-t border-[#bbc4ae]/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#2D2D2D]/75 text-center sm:text-left">
            © 2026 Speak French with Eva. All rights reserved. Registered French Coach.
          </p>
          
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#2D2D2D]/70 italic font-serif">Made with French amour</span>
            <Heart className="w-3 h-3 text-[#AC595B] fill-[#AC595B] animate-pulse" />
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#bbc4ae]/20 text-[#2D2D2D]/75 hover:text-[#5E6C4D] hover:border-[#5E6C4D] transition-colors text-xs font-semibold uppercase tracking-wider cursor-pointer group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
