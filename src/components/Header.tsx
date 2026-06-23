import React, { useState } from "react";
import { Menu, X, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

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
    { id: "who-am-i", label: "Who am I?" },
    { id: "testimonials", label: "Testimonials" },
  ];

  const handleNavClick = (tabId: string) => {
    setCurrentTab(tabId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FBF8F3]/90 backdrop-blur-md border-b border-[#bbc4ae]/10 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-3 cursor-pointer group text-left"
          >
            <div className="w-10 h-10 rounded-full bg-[#E8B9BA]/20 flex items-center justify-center border border-[#E8B9BA]/30 overflow-hidden transform group-hover:scale-105 transition-all duration-300 shadow-inner">
              <span className="text-xl" role="img" aria-label="French flag">🇫🇷</span>
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold text-[#2D2D2D] tracking-tight group-hover:text-[#5E6C4D] transition-colors">
                Speak French with <span className="text-[#AC595B] font-light italic">Eva</span>
              </span>
              <p className="text-[10px] uppercase tracking-widest text-[#5E6C4D] font-sans font-medium -mt-1 hidden sm:block">
                Expat French Coaching
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {navItems.map((item) => {
                const isActive = currentTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`relative px-1 py-2 font-sans text-sm font-semibold tracking-wide cursor-pointer transition-colors duration-300 ${
                      isActive ? "text-[#2D2D2D]" : "text-[#2D2D2D]/75 hover:text-[#5E6C4D]"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeUnderline"
                        className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#5E6C4D] rounded-full"
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
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#5E6C4D] hover:bg-[#4E5B3E] text-white font-sans text-xs uppercase font-bold tracking-widest cursor-pointer transition-all duration-300 shadow-md shadow-[#5E6C4D]/20"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Discovery Call</span>
            </motion.button>
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-[#2D2D2D]/85 hover:text-[#5E6C4D] hover:bg-[#F5EFE6] transition-colors"
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
            className="md:hidden border-t border-[#bbc4ae]/10 bg-[#FBF8F3] overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navItems.map((item) => {
                const isActive = currentTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`block w-full text-left px-4 py-3 rounded-xl font-sans text-base font-semibold transition-all ${
                      isActive
                        ? "bg-[#E8B9BA]/20 text-[#2D2D2D] border-l-4 border-[#AC595B]"
                        : "text-[#2D2D2D]/85 hover:bg-[#F5EFE6] hover:text-[#5E6C4D]"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onCtaClick();
                  }}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-[#5E6C4D] text-white font-sans font-bold text-center tracking-wider text-sm uppercase cursor-pointer hover:bg-[#4E5B3E] transition-all"
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
