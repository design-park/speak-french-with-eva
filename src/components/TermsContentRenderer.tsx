import React from "react";
import {
  ShieldCheck,
  Building2,
  Mail,
  Phone,
  Globe,
  MapPin,
  CheckCircle2,
  FileText,
  AlertCircle,
  Lock,
  Scale,
  Cookie,
  UserCheck,
} from "lucide-react";
import { TERMS_FR, TERMS_EN, TermsContent } from "../data/termsData";

interface TermsContentRendererProps {
  language: "fr" | "en";
  containerIdPrefix?: string;
  onContactClick?: () => void;
}

export const TermsContentRenderer: React.FC<TermsContentRendererProps> = ({
  language,
  containerIdPrefix = "terms",
  onContactClick,
}) => {
  const data: TermsContent = language === "fr" ? TERMS_FR : TERMS_EN;
  const isFr = language === "fr";

  const getArticleIcon = (artId: string) => {
    switch (artId) {
      case "art-1":
        return <Building2 className="w-5 h-5 text-[#659287]" />;
      case "art-2":
        return <FileText className="w-5 h-5 text-[#659287]" />;
      case "art-3":
        return <Globe className="w-5 h-5 text-[#659287]" />;
      case "art-4":
        return <AlertCircle className="w-5 h-5 text-[#AC595B]" />;
      case "art-5":
        return <ShieldCheck className="w-5 h-5 text-[#659287]" />;
      case "art-6":
        return <Globe className="w-5 h-5 text-[#659287]" />;
      case "art-7":
        return <Lock className="w-5 h-5 text-[#659287]" />;
      case "art-8":
        return <Cookie className="w-5 h-5 text-[#659287]" />;
      case "art-9":
        return <Scale className="w-5 h-5 text-[#AC595B]" />;
      default:
        return <FileText className="w-5 h-5 text-[#659287]" />;
    }
  };

  return (
    <div className="space-y-10 text-left font-sans text-[#2D2D2D]/90 leading-relaxed">
      {/* Title & Introduction Banner */}
      <div className="bg-gradient-to-r from-[#FBF8F3] via-white to-[#FBF8F3] p-6 sm:p-8 rounded-3xl border border-[#bbc4ae]/20 shadow-xs">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#659287]/10 text-[#659287] text-xs font-semibold uppercase tracking-wider mb-3">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>{isFr ? "Document Légal & Sécurisé" : "Official Legal Terms"}</span>
        </div>
        <h1 className="font-serif text-2xl sm:text-3.5xl font-bold text-[#2D2D2D] mb-2 tracking-tight">
          {data.title}
        </h1>
        <p className="text-sm sm:text-base text-[#2D2D2D]/75 font-sans">
          {data.subtitle}
        </p>
      </div>

      {/* Preamble */}
      <section
        id={`${containerIdPrefix}-preamble`}
        className="bg-white p-6 sm:p-8 rounded-3xl border border-[#bbc4ae]/25 shadow-xs space-y-4 scroll-mt-28"
      >
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-[#E8B9BA]/20 flex items-center justify-center text-[#AC595B] font-serif font-bold text-sm">
            §
          </span>
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#2D2D2D]">
            {data.preamble.title}
          </h2>
        </div>

        <p className="text-sm sm:text-base text-[#2D2D2D]/85">
          {data.preamble.intro}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {data.preamble.parties.map((party, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-[#FBF8F3] border border-[#bbc4ae]/15 flex flex-col justify-between"
            >
              <span className="text-xs uppercase font-bold tracking-wider text-[#659287] mb-1">
                {party.designation}
              </span>
              <p className="text-sm font-medium text-[#2D2D2D]">
                {party.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Articles */}
      <div className="space-y-8">
        {data.articles.map((art) => (
          <section
            key={art.id}
            id={`${containerIdPrefix}-${art.id}`}
            className="bg-white p-6 sm:p-8 rounded-3xl border border-[#bbc4ae]/20 shadow-xs hover:border-[#659287]/40 transition-colors space-y-5 scroll-mt-28"
          >
            {/* Article Header */}
            <div className="flex items-start justify-between gap-4 border-b border-[#F5EFE6] pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#F5EFE6] flex items-center justify-center shrink-0">
                  {getArticleIcon(art.id)}
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#AC595B]">
                    {art.number}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2D2D2D]">
                    {art.title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Paragraphs */}
            {art.content && art.content.length > 0 && (
              <div className="space-y-3">
                {art.content.map((p, pIdx) => (
                  <p key={pIdx} className="text-sm sm:text-base text-[#2D2D2D]/85 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            )}

            {/* Contact Card in Article 1 */}
            {art.contactCard && (
              <div className="bg-[#FBF8F3] p-6 rounded-2xl border border-[#659287]/20 space-y-4">
                <div className="flex items-center gap-2 text-sm font-bold text-[#659287] uppercase tracking-wide">
                  <Building2 className="w-4 h-4" />
                  <span>{isFr ? "Coordonnées de l'Éditeur" : "Publisher Details"}</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2 text-[#2D2D2D]">
                    <UserCheck className="w-4 h-4 text-[#AC595B] shrink-0" />
                    <span className="font-semibold">{art.contactCard.entity}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#2D2D2D]">
                    <MapPin className="w-4 h-4 text-[#AC595B] shrink-0" />
                    <span>{art.contactCard.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#2D2D2D]">
                    <Globe className="w-4 h-4 text-[#659287] shrink-0" />
                    <a
                      href={art.contactCard.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#659287] hover:underline"
                    >
                      {art.contactCard.url}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-[#2D2D2D]">
                    <Mail className="w-4 h-4 text-[#659287] shrink-0" />
                    <a
                      href={`mailto:${art.contactCard.email}`}
                      className="text-[#659287] hover:underline font-medium"
                    >
                      {art.contactCard.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-[#2D2D2D]">
                    <Phone className="w-4 h-4 text-[#659287] shrink-0" />
                    <a
                      href={`tel:${art.contactCard.phone.replace(/\s+/g, "")}`}
                      className="text-[#659287] hover:underline font-medium"
                    >
                      {art.contactCard.phone}
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Note box */}
            {art.note && (
              <div className="p-4 rounded-xl bg-[#FAF0ED] border border-[#E8B9BA]/40 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#AC595B] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm font-medium text-[#2D2D2D]">
                  {art.note}
                </p>
              </div>
            )}

            {/* Subsections (e.g., Article 7) */}
            {art.subsections && art.subsections.length > 0 && (
              <div className="space-y-6 pt-2">
                {art.subsections.map((sub, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-5 rounded-2xl bg-[#FBF8F3]/60 border border-[#bbc4ae]/15 space-y-3"
                  >
                    {sub.subtitle && (
                      <h4 className="font-serif text-base sm:text-lg font-bold text-[#2D2D2D] flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#AC595B]" />
                        {sub.subtitle}
                      </h4>
                    )}

                    {sub.paragraphs &&
                      sub.paragraphs.map((sp, spIdx) => (
                        <p key={spIdx} className="text-sm text-[#2D2D2D]/85 leading-relaxed">
                          {sp}
                        </p>
                      ))}

                    {sub.items && sub.items.length > 0 && (
                      <ul className="space-y-2 pt-1">
                        {sub.items.map((item, iIdx) => (
                          <li
                            key={iIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2D2D2D]/80 leading-relaxed"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#659287] shrink-0 mt-2" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Bottom Assistance Banner */}
      {onContactClick && (
        <div className="bg-[#FAF0ED] p-6 sm:p-8 rounded-3xl border border-[#E8B9BA]/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-serif text-lg font-bold text-[#2D2D2D]">
              {isFr ? "Une question sur nos conditions d'utilisation ?" : "Questions about our terms of use?"}
            </h4>
            <p className="text-xs sm:text-sm text-[#2D2D2D]/75">
              {isFr
                ? "N'hésitez pas à contacter directement Eva pour toute précision."
                : "Feel free to reach out directly to Eva if you need any clarification."}
            </p>
          </div>
          <button
            onClick={onContactClick}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#AC595B] hover:bg-[#8d4244] text-white font-sans text-xs uppercase font-bold tracking-wider cursor-pointer transition-colors shadow-xs"
          >
            <Mail className="w-4 h-4" />
            <span>{isFr ? "Contacter Eva" : "Contact Eva"}</span>
          </button>
        </div>
      )}
    </div>
  );
};
