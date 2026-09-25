import React, { useState } from "react";
import { ArrowLeft, Printer, ShieldCheck, Heart } from "lucide-react";
import { TermsContentRenderer } from "./TermsContentRenderer";
import { TERMS_FR, TERMS_EN } from "../data/termsData";

interface TermsViewProps {
  onBack: () => void;
  onMessageClick?: () => void;
}

export const TermsView: React.FC<TermsViewProps> = ({ onBack, onMessageClick }) => {
  const [language, setLanguage] = useState<"fr" | "en">("fr");
  const isFr = language === "fr";
  const currentData = isFr ? TERMS_FR : TERMS_EN;

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(`page-${sectionId}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-white min-h-screen text-left pb-20">
      {/* Top Banner Navigation */}
      <section className="pt-8 pb-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FBF8F3] to-white border-b border-[#bbc4ae]/15">
        <div className="max-w-5xl mx-auto space-y-6">
          {/* Breadcrumb & Actions Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#bbc4ae]/30 text-[#2D2D2D]/80 hover:text-[#659287] hover:border-[#659287]/40 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-2xs"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{isFr ? "Retour à l'accueil" : "Back to Home"}</span>
            </button>

            <div className="flex items-center gap-3">
              {/* Language Switcher */}
              <div className="flex items-center p-1 rounded-xl bg-white border border-[#bbc4ae]/30 shadow-2xs">
                <button
                  type="button"
                  onClick={() => setLanguage("fr")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    isFr
                      ? "bg-[#659287] text-white shadow-2xs"
                      : "text-[#2D2D2D]/70 hover:text-[#2D2D2D]"
                  }`}
                >
                  🇫🇷 Français
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage("en")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    !isFr
                      ? "bg-[#659287] text-white shadow-2xs"
                      : "text-[#2D2D2D]/70 hover:text-[#2D2D2D]"
                  }`}
                >
                  🇬🇧 English
                </button>
              </div>

              {/* Print Button */}
              <button
                type="button"
                onClick={() => window.print()}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#bbc4ae]/30 text-[#2D2D2D]/70 hover:text-[#659287] hover:border-[#659287]/40 text-xs font-semibold cursor-pointer shadow-2xs transition-colors"
                title={isFr ? "Imprimer le document" : "Print document"}
              >
                <Printer className="w-4 h-4" />
                <span>{isFr ? "Imprimer" : "Print"}</span>
              </button>
            </div>
          </div>

          {/* Quick jump bar */}
          <div className="flex items-center gap-2 overflow-x-auto py-2 no-scrollbar text-xs">
            <span className="font-semibold text-[#2D2D2D]/60 shrink-0">
              {isFr ? "Accès rapide :" : "Quick jump:"}
            </span>
            <button
              onClick={() => scrollToSection("preamble")}
              className="px-3 py-1 rounded-full bg-white border border-[#bbc4ae]/25 text-[#2D2D2D]/75 hover:text-[#659287] hover:border-[#659287]/40 whitespace-nowrap cursor-pointer transition-colors"
            >
              {isFr ? "Préambule" : "Preamble"}
            </button>
            {currentData.articles.map((art) => (
              <button
                key={art.id}
                onClick={() => scrollToSection(art.id)}
                className="px-3 py-1 rounded-full bg-white border border-[#bbc4ae]/25 text-[#2D2D2D]/75 hover:text-[#659287] hover:border-[#659287]/40 whitespace-nowrap cursor-pointer transition-colors"
              >
                {art.number}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Legal Content */}
      <section className="pt-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <TermsContentRenderer
            language={language}
            containerIdPrefix="page"
            onContactClick={onMessageClick}
          />
        </div>
      </section>
    </div>
  );
};
