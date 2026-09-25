import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Printer, ExternalLink, ShieldCheck } from "lucide-react";
import { TermsContentRenderer } from "./TermsContentRenderer";
import { TERMS_FR, TERMS_EN } from "../data/termsData";

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContactClick?: () => void;
  onViewAsPage?: () => void;
}

export const TermsModal: React.FC<TermsModalProps> = ({
  isOpen,
  onClose,
  onContactClick,
  onViewAsPage,
}) => {
  const [language, setLanguage] = useState<"fr" | "en">("fr");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Handle ESC key press & lock body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentData = language === "fr" ? TERMS_FR : TERMS_EN;

  const scrollToSection = (sectionId: string) => {
    const targetElement = document.getElementById(`modal-${sectionId}`);
    if (targetElement && scrollContainerRef.current) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="terms-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/65 backdrop-blur-sm transition-opacity"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 16 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-3xl shadow-2xl border border-[#bbc4ae]/30 flex flex-col overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className="flex flex-col border-b border-[#F5EFE6] bg-[#FBF8F3]/95 backdrop-blur-md px-6 py-4 z-20 shrink-0">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#E8B9BA]/20 flex items-center justify-center text-[#AC595B] shrink-0 border border-[#AC595B]/20">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h2
                  id="terms-modal-title"
                  className="font-serif text-lg sm:text-xl font-bold text-[#2D2D2D] leading-tight"
                >
                  {language === "fr" ? "Conditions Générales d’Utilisation" : "Terms of Use"}
                </h2>
                <p className="text-xs text-[#2D2D2D]/60 font-sans">
                  speakfrenchwitheva.com • {language === "fr" ? "Mentions Légales" : "Legal Document"}
                </p>
              </div>
            </div>

            {/* Actions: Language Toggle, Print, Full-page, Close */}
            <div className="flex items-center gap-2">
              {/* Language Switcher */}
              <div className="flex items-center p-1 rounded-xl bg-white border border-[#bbc4ae]/30 shadow-2xs">
                <button
                  type="button"
                  onClick={() => setLanguage("fr")}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    language === "fr"
                      ? "bg-[#659287] text-white shadow-2xs"
                      : "text-[#2D2D2D]/70 hover:text-[#2D2D2D]"
                  }`}
                  title="Afficher en Français"
                >
                  🇫🇷 FR
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage("en")}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    language === "en"
                      ? "bg-[#659287] text-white shadow-2xs"
                      : "text-[#2D2D2D]/70 hover:text-[#2D2D2D]"
                  }`}
                  title="Display in English"
                >
                  🇬🇧 EN
                </button>
              </div>

              {/* Print button */}
              <button
                type="button"
                onClick={handlePrint}
                className="hidden sm:flex w-9 h-9 rounded-xl bg-white border border-[#bbc4ae]/30 items-center justify-center text-[#2D2D2D]/70 hover:text-[#659287] hover:border-[#659287]/40 transition-colors cursor-pointer"
                title={language === "fr" ? "Imprimer le document" : "Print document"}
              >
                <Printer className="w-4 h-4" />
              </button>

              {/* View as full page button if provided */}
              {onViewAsPage && (
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onViewAsPage();
                  }}
                  className="hidden md:flex w-9 h-9 rounded-xl bg-white border border-[#bbc4ae]/30 items-center justify-center text-[#2D2D2D]/70 hover:text-[#659287] hover:border-[#659287]/40 transition-colors cursor-pointer"
                  title={language === "fr" ? "Afficher en pleine page" : "View as full page"}
                >
                  <ExternalLink className="w-4 h-4" />
                </button>
              )}

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                className="w-9 h-9 rounded-xl bg-white border border-[#bbc4ae]/30 flex items-center justify-center text-[#2D2D2D]/70 hover:text-[#AC595B] hover:border-[#AC595B]/40 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick jump pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pt-3 pb-1 no-scrollbar text-xs">
            <button
              onClick={() => scrollToSection("preamble")}
              className="px-2.5 py-1 rounded-full bg-white border border-[#bbc4ae]/20 text-[#2D2D2D]/75 hover:text-[#659287] hover:border-[#659287]/40 whitespace-nowrap cursor-pointer transition-colors"
            >
              {language === "fr" ? "Préambule" : "Preamble"}
            </button>
            {currentData.articles.map((art) => (
              <button
                key={art.id}
                onClick={() => scrollToSection(art.id)}
                className="px-2.5 py-1 rounded-full bg-white border border-[#bbc4ae]/20 text-[#2D2D2D]/75 hover:text-[#659287] hover:border-[#659287]/40 whitespace-nowrap cursor-pointer transition-colors"
              >
                {art.number} - {art.title}
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable Body */}
        <div
          ref={scrollContainerRef}
          className="flex-1 overflow-y-auto p-6 sm:p-10 bg-white"
        >
          <TermsContentRenderer
            language={language}
            containerIdPrefix="modal"
            onContactClick={() => {
              onClose();
              if (onContactClick) onContactClick();
            }}
          />
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-[#F5EFE6] bg-[#FBF8F3] shrink-0">
          <p className="text-xs text-[#2D2D2D]/60 hidden sm:block">
            {language === "fr"
              ? "© 2026 Eva Ngalouo Bocquet EI - Tous droits réservés."
              : "© 2026 Eva Ngalouo Bocquet EI - All rights reserved."}
          </p>

          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2 rounded-full bg-[#659287] hover:bg-[#527a70] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-xs ml-auto"
          >
            {language === "fr" ? "Fermer" : "Close"}
          </button>
        </div>
      </motion.div>
    </div>
  );
};
