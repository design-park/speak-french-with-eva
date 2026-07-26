import React from "react";
import { Mail, Instagram, Linkedin, Heart, MapPin, ArrowUp } from "lucide-react";
import { FleurDeLisOrnament, FrenchCoffeeIcon } from "./DecorativeAccents";

interface FooterProps {
  setCurrentTab: (tab: string) => void;
  onCtaClick: () => void;
  onMessageClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentTab, onCtaClick, onMessageClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNav = (tabId: string) => {
    setCurrentTab(tabId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#FBF8F3] border-t border-[#bbc4ae]/15 pt-16 pb-8 relative overflow-hidden">
      {/* Background flourish */}
      <div className="absolute right-0 bottom-0 pointer-events-none opacity-5 max-w-xs translate-x-20 translate-y-20">
        <FleurDeLisOrnament className="w-96 h-96" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Column 1: Brand Info */}
          <div className="md:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <FrenchCoffeeIcon className="w-10 h-10" />
              <span className="font-serif text-2xl font-bold text-[#2D2D2D] tracking-tight">
                Speak French with <span className="text-[#AC595B]">Eva</span>
              </span>
            </div>
            <p className="text-[#2D2D2D]/85 font-sans text-sm max-w-sm leading-relaxed">
              Helping expat women in France master spoken communication, build supportive communities, and finally feel at home.
            </p>

            {/* Stamp/Badge style design accent */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E8B9BA]/10 border border-[#AC595B]/30 text-[#AC595B] text-xs font-semibold">
              <Heart className="w-3.5 h-3.5 fill-[#AC595B] text-[#AC595B]" />
              <span>Personalized French Coaching</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-[#2D2D2D] tracking-wide">Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                { label: "Home", id: "home" },
                { label: "Services", id: "services" },
                { label: "About", id: "who-am-i" },
                { label: "Testimonials", id: "testimonials" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNav(link.id)}
                    className="text-[#2D2D2D]/75 hover:text-[#659287] text-sm font-semibold transition-colors cursor-pointer text-left focus:outline-none"
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

            {/* Send me an email button */}
            <button
              onClick={onMessageClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#659287] hover:bg-[#527a70] text-white font-sans text-xs uppercase font-bold tracking-widest cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <Mail className="w-4 h-4" />
              <span>Send me an email</span>
            </button>

            {/* Social icons */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://www.instagram.com/speakfrenchwitheva"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-[#bbc4ae]/20 flex items-center justify-center text-[#2D2D2D]/75 hover:text-[#AC595B] hover:border-[#AC595B] hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/eva-ngalouo-bocquet-191651373"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-[#bbc4ae]/20 flex items-center justify-center text-[#2D2D2D]/75 hover:text-[#659287] hover:border-[#659287] hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://share.google/lKcpWdTW7sssXnijN"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-[#bbc4ae]/20 flex items-center justify-center text-[#2D2D2D]/75 hover:text-[#2D2D2D] hover:border-[#2D2D2D] hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300"
                aria-label="Google Maps Location"
              >
                <MapPin className="w-4 h-4" />
              </a>
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
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#bbc4ae]/20 text-[#2D2D2D]/75 hover:text-[#659287] hover:border-[#659287] transition-colors text-xs font-semibold uppercase tracking-wider cursor-pointer group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
