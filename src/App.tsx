import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomeView } from "./components/HomeView";
import { WhoAmIView } from "./components/WhoAmIView";
import { ServicesView } from "./components/ServicesView";
import { TestimonialsView } from "./components/TestimonialsView";
import { MessageModal } from "./components/MessageModal";
import { TermsModal } from "./components/TermsModal";
import { TermsView } from "./components/TermsView";
import { LegalPrivacyModal } from "./components/LegalPrivacyModal";
import { LegalPrivacyView } from "./components/LegalPrivacyView";

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>("home");

  // Modals state
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);

  const openCtaModal = () => {
    window.open("https://calendly.com/eva-nb/free_discovery_videocall?back=1&month=2026-06", "_blank");
  };

  const openMessageModal = () => {
    setIsMessageModalOpen(true);
  };

  const closeMessageModal = () => {
    setIsMessageModalOpen(false);
  };

  const openTermsModal = () => {
    setIsTermsModalOpen(true);
  };

  const closeTermsModal = () => {
    setIsTermsModalOpen(false);
  };

  const openLegalModal = () => {
    setIsLegalModalOpen(true);
  };

  const closeLegalModal = () => {
    setIsLegalModalOpen(false);
  };

  // Switch tabs cleanly with smooth scrolling
  const handleTabChange = (tabId: string) => {
    setCurrentTab(tabId);
  };

  const renderCurrentView = () => {
    switch (currentTab) {
      case "home":
        return (
          <HomeView
            setCurrentTab={handleTabChange}
            onCtaClick={openCtaModal}
            onMessageClick={openMessageModal}
          />
        );
      case "who-am-i":
        return <WhoAmIView onCtaClick={openCtaModal} />;
      case "services":
        return (
          <ServicesView
            onCtaClick={openCtaModal}
            onB1ProgramClick={openCtaModal}
          />
        );
      case "testimonials":
        return <TestimonialsView onCtaClick={openCtaModal} />;
      case "terms":
        return (
          <TermsView
            onBack={() => handleTabChange("home")}
            onMessageClick={openMessageModal}
          />
        );
      case "legal":
        return (
          <LegalPrivacyView
            onBack={() => handleTabChange("home")}
            onMessageClick={openMessageModal}
          />
        );
      default:
        return (
          <HomeView
            setCurrentTab={handleTabChange}
            onCtaClick={openCtaModal}
            onMessageClick={openMessageModal}
          />
        );
    }
  };

  return (
    <div className="font-sans text-[#2D2D2D] bg-white min-h-screen flex flex-col justify-between selection:bg-[#E8B9BA]/30 selection:text-[#2D2D2D] antialiased">

      {/* Dynamic Navigation Header */}
      <Header
        currentTab={currentTab}
        setCurrentTab={handleTabChange}
        onCtaClick={openCtaModal}
      />

      {/* Main Content Area - Slide & Fade transitions using Framer Motion */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {renderCurrentView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Beautiful High-contrast Footers with full columns and interactions */}
      <Footer
        setCurrentTab={handleTabChange}
        onCtaClick={openCtaModal}
        onMessageClick={openMessageModal}
        onTermsClick={openTermsModal}
        onLegalClick={openLegalModal}
      />

      {/* Personal messages modal */}
      <MessageModal
        isOpen={isMessageModalOpen}
        onClose={closeMessageModal}
      />

      {/* Terms and Conditions (CGU) modal */}
      <TermsModal
        isOpen={isTermsModalOpen}
        onClose={closeTermsModal}
        onContactClick={openMessageModal}
        onViewAsPage={() => handleTabChange("terms")}
      />

      {/* Legal Notice & Privacy Policy modal */}
      <LegalPrivacyModal
        isOpen={isLegalModalOpen}
        onClose={closeLegalModal}
        onContactClick={openMessageModal}
        onViewAsPage={() => handleTabChange("legal")}
      />

    </div>
  );
}
