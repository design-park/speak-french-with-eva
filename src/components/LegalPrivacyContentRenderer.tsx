import React from "react";
import {
  ShieldCheck,
  Building2,
  Mail,
  Phone,
  Globe,
  MapPin,
  FileText,
  AlertCircle,
  Lock,
  Scale,
  Cookie,
  ExternalLink,
  Server,
  UserCheck,
  HelpCircle,
} from "lucide-react";
import { LEGAL_PRIVACY_FR, LEGAL_PRIVACY_EN, LegalPrivacyContent } from "../data/legalPrivacyData";

interface LegalPrivacyContentRendererProps {
  language: "fr" | "en";
  containerIdPrefix?: string;
  onContactClick?: () => void;
}

export const LegalPrivacyContentRenderer: React.FC<LegalPrivacyContentRendererProps> = ({
  language,
  containerIdPrefix = "legal",
  onContactClick,
}) => {
  const data: LegalPrivacyContent = language === "fr" ? LEGAL_PRIVACY_FR : LEGAL_PRIVACY_EN;
  const isFr = language === "fr";

  const getArticleIcon = (artId: string) => {
    switch (artId) {
      case "art-1":
        return <Building2 className="w-5 h-5 text-[#659287]" />;
      case "art-2":
      case "art-4":
        return <FileText className="w-5 h-5 text-[#659287]" />;
      case "art-3":
        return <ShieldCheck className="w-5 h-5 text-[#659287]" />;
      case "art-5":
        return <AlertCircle className="w-5 h-5 text-[#AC595B]" />;
      case "art-6":
        return <Globe className="w-5 h-5 text-[#659287]" />;
      case "art-7":
      case "art-8":
      case "art-9":
      case "art-10":
      case "art-11":
      case "art-12":
        return <Lock className="w-5 h-5 text-[#659287]" />;
      case "art-13":
        return <Cookie className="w-5 h-5 text-[#659287]" />;
      case "art-15":
        return <Scale className="w-5 h-5 text-[#AC595B]" />;
      case "art-16":
        return <Mail className="w-5 h-5 text-[#659287]" />;
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
          <span>{isFr ? "Transparence & Protection des Données" : "Transparency & Privacy Protection"}</span>
        </div>
        <h1 className="font-serif text-2xl sm:text-3.5xl font-bold text-[#2D2D2D] mb-2 tracking-tight">
          {data.title}
        </h1>
        <p className="text-sm sm:text-base text-[#2D2D2D]/75 font-sans">
          {data.subtitle}
        </p>
      </div>

      {/* Preamble / Intro Card */}
      <section
        id={`${containerIdPrefix}-intro`}
        className="bg-white p-6 sm:p-8 rounded-3xl border border-[#bbc4ae]/25 shadow-xs space-y-4 scroll-mt-28"
      >
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-[#E8B9BA]/20 flex items-center justify-center text-[#AC595B] font-serif font-bold text-sm">
            §
          </span>
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#2D2D2D]">
            {isFr ? "Engagement et Préambule" : "Commitment & Preamble"}
          </h2>
        </div>

        <div className="space-y-3 text-sm sm:text-base text-[#2D2D2D]/85">
          {data.intro.paragraphs.map((para, idx) => (
            <p key={idx} className="leading-relaxed">
              {para}
            </p>
          ))}
        </div>

        <div className="pt-2">
          <a
            href={data.intro.cnilUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FBF8F3] hover:bg-[#F5EFE6] border border-[#bbc4ae]/25 text-[#659287] text-xs font-bold transition-colors"
          >
            <span>{isFr ? "Consulter le site officiel de la CNIL (cnil.fr)" : "Visit the Official CNIL Website (cnil.fr)"}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
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

            {/* Special Details Cards (e.g. Article 1) */}
            {art.detailsCard && art.detailsCard.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                {art.detailsCard.map((card, cIdx) => (
                  <div
                    key={cIdx}
                    className="p-5 rounded-2xl bg-[#FBF8F3] border border-[#659287]/20 flex flex-col justify-between space-y-3"
                  >
                    <div className="flex items-center gap-2 text-xs font-bold text-[#659287] uppercase tracking-wide">
                      {cIdx === 0 && <Globe className="w-4 h-4" />}
                      {cIdx === 1 && <UserCheck className="w-4 h-4 text-[#AC595B]" />}
                      {cIdx === 2 && <Server className="w-4 h-4" />}
                      <span>{card.title}</span>
                    </div>

                    <div className="space-y-2 text-xs sm:text-sm">
                      {card.items.map((item, iIdx) => (
                        <div key={iIdx} className="text-[#2D2D2D]">
                          <span className="text-[#2D2D2D]/60 text-xs block">{item.label}</span>
                          {item.isLink ? (
                            item.linkType === "email" ? (
                              <a
                                href={`mailto:${item.value}`}
                                className="text-[#659287] hover:underline font-semibold"
                              >
                                {item.value}
                              </a>
                            ) : item.linkType === "tel" ? (
                              <a
                                href={`tel:${item.value.replace(/\s+/g, "")}`}
                                className="text-[#659287] hover:underline font-semibold"
                              >
                                {item.value}
                              </a>
                            ) : (
                              <a
                                href={`https://${item.value}`}
                                target="_blank"
                                rel="noreferrer"
                                className="text-[#659287] hover:underline font-semibold"
                              >
                                {item.value}
                              </a>
                            )
                          ) : (
                            <span className="font-semibold">{item.value}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Subsections */}
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
              {isFr
                ? "Une question sur vos données ou ces mentions légales ?"
                : "Questions about your data or this legal notice?"}
            </h4>
            <p className="text-xs sm:text-sm text-[#2D2D2D]/75">
              {isFr
                ? "Nous sommes à votre entière disposition pour vous renseigner et vous accompagner."
                : "We are at your disposal to answer questions and assist you."}
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
