import React, { useState } from "react";
import { Menu, X, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { FrenchCoffeeIcon } from "./DecorativeAccents";

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  onCtaClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentTab, setCurrentTab, onCtaClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "who-am-i", label: "About" },
    { id: "testimonials", label: "Testimonials" },
  ];

  const handleNavClick = (tabId: string) => {
    setCurrentTab(tabId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FBF8F3]/90 backdrop-blur-md border-b border-[#bbc4ae]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-3 cursor-pointer group text-left"
          >
            <FrenchCoffeeIcon className="w-11 h-11 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
            <div className="transform group-hover:translate-x-0.5 transition-transform duration-300">
              <span className="font-serif text-xl sm:text-2xl font-bold text-[#2D2D2D] tracking-tight">
                Speak French with <span className="text-[#AC595B]">Eva</span>
              </span>
              <p className="text-[10px] uppercase tracking-widest text-[#659287] font-sans font-medium mt-1 hidden sm:block">
                Expat French Coaching
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <div className="flex gap-6">
              {navItems.map((item) => {
                const isActive = currentTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`relative px-1 py-2 font-sans text-sm font-semibold tracking-wide cursor-pointer transition-colors duration-300 ${
                      isActive ? "text-[#2D2D2D]" : "text-[#2D2D2D]/75 hover:text-[#659287]"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeUnderline"
                        className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#659287] rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Accent CTA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={onCtaClick}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#659287] hover:bg-[#527a70] text-white font-sans text-xs uppercase font-bold tracking-widest cursor-pointer transition-all duration-300 shadow-md shadow-[#659287]/20"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Discovery Call</span>
            </motion.button>
          </nav>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-[#2D2D2D]/85 hover:text-[#659287] hover:bg-[#F5EFE6] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-[#bbc4ae]/10 bg-[#FBF8F3] overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navItems.map((item) => {
                const isActive = currentTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center justify-between w-full text-left px-5 py-3.5 rounded-xl font-sans text-base font-semibold transition-all ${
                      isActive
                        ? "bg-[#E8B9BA]/20 text-[#2D2D2D]"
                        : "text-[#2D2D2D]/85 hover:bg-[#F5EFE6] hover:text-[#659287]"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="text-[#AC595B] opacity-80 animate-fade-up">
                        {getMenuIcon(item.id)}
                      </span>
                    )}
                  </button>
                );
              })}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onCtaClick();
                  }}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-[#659287] text-white font-sans font-bold text-center tracking-wider text-sm uppercase cursor-pointer hover:bg-[#527a70] transition-all"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Get a Free Discovery Call</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

// French themed active menu icons
const EiffelTowerIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 21c1-3.5 2.5-9 4.5-14M18 21c-1-3.5-2.5-9-4.5-14" />
    <path d="M6.8 16.5h10.4M8.8 11.5h6.4" />
    <path d="M9 21c0-2 1.3-3.5 3-3.5s3 1.5 3 3.5" />
    <path d="M10.5 7h3L12 2z" />
    <path d="M12 2v-1" />
  </svg>
);

const CroissantIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 14c.5-3 2.5-6.5 6-7.5 3.5-1 7 .5 9.5 3.5 2.5 3 2.5 5.5 1.5 6.5-.8.8-2 0-2.5-.8-1-1.5-2.5-2.5-4.5-2.7-2-.2-4 .5-5 2-.5.8-1.7 1.6-2.5.8C2.5 17 2.5 16 3 14z" />
    <path d="M7.5 8c1 1.5 1.5 3 1 4.5M16.5 9.5c-1 1.5-1.5 3-1 4.5M12 6.5v5" />
  </svg>
);

const BeretIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 14c0-4 4.5-6.5 8-6.5s8 2.5 8 6.5c0 1.5-1.5 2-4 2H8c-2.5 0-4-.5-4-2z" />
    <path d="M6 15c0 1.2 2.5 2 6 2s6-.8 6-2" />
    <path d="M12 7.5V6" />
  </svg>
);

const FleurDeLisIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 4c1 3.5 2.5 5.5 2.5 8.5S13.5 16 12 17c-1.5-1-2.5-1.5-2.5-4.5S11 7.5 12 4z" />
    <path d="M12 12c-2.5 0-5.5-1-5.5 2.5 0 2 1.5 2.5 3 2s2-3 2.5-4.5z" />
    <path d="M12 12c2.5 0 5.5-1 5.5 2.5 0 2-1.5 2.5-3 2s-2-3-2.5-4.5z" />
    <path d="M8.5 15.5h7" />
  </svg>
);

const getMenuIcon = (id: string) => {
  switch (id) {
    case "home":
      return <EiffelTowerIcon />;
    case "services":
      return <CroissantIcon />;
    case "who-am-i":
      return <BeretIcon />;
    case "testimonials":
      return <FleurDeLisIcon />;
    default:
      return null;
  }
};
