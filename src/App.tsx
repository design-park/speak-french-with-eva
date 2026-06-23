import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomeView } from "./components/HomeView";
import { WhoAmIView } from "./components/WhoAmIView";
import { ServicesView } from "./components/ServicesView";
import { TestimonialsView } from "./components/TestimonialsView";
import { LeafTwig, SubtleSparkle } from "./components/DecorativeAccents";
import { Mail, Calendar, Clock, Sparkles, Check, Send, X, Heart, MessageCircle } from "lucide-react";

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>("home");
  
  // Modals state
  const [isCtaModalOpen, setIsCtaModalOpen] = useState(false);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  
  // Submit message status
  const [isCtaSubmitted, setIsCtaSubmitted] = useState(false);
  const [isMessageSubmitted, setIsMessageSubmitted] = useState(false);

  // Form fields
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formGoal, setFormGoal] = useState("social_confidence");
  const [userMsg, setUserMsg] = useState("");

  const handleCtaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail) return;
    setIsCtaSubmitted(true);
    setTimeout(() => {
      // Clear forms
      setFormName("");
      setFormEmail("");
      setFormGoal("social_confidence");
    }, 1000);
  };

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail || !userMsg) return;
    setIsMessageSubmitted(true);
    setTimeout(() => {
      // Clear forms
      setFormName("");
      setFormEmail("");
      setUserMsg("");
    }, 1000);
  };

  const openCtaModal = () => {
    setIsCtaSubmitted(false);
    setIsCtaModalOpen(true);
  };

  const openMessageModal = () => {
    setIsMessageSubmitted(false);
    setIsMessageModalOpen(true);
  };

  const closeModals = () => {
    setIsCtaModalOpen(false);
    setIsMessageModalOpen(false);
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
            onJoinClubClick={openCtaModal}
          />
        );
      case "testimonials":
        return <TestimonialsView onCtaClick={openCtaModal} />;
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
    <div className="font-sans text-[#2D2D2D] bg-[#FBF8F3] min-h-screen flex flex-col justify-between selection:bg-[#E8B9BA]/30 selection:text-[#2D2D2D] antialiased">
      
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
      <Footer setCurrentTab={handleTabChange} onCtaClick={openCtaModal} />

      {/* ================= MODALS & POPUPS ================= */}
      
      {/* 1. DISCOVERY CALL MODAL (Vintage post letter styling) */}
      <AnimatePresence>
        {isCtaModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop cover */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModals}
              className="absolute inset-0 bg-[#2D2D2D]/55 backdrop-blur-sm"
            />

            {/* Content Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="relative w-full max-w-lg bg-[#FBF8F3] rounded-3xl border border-[#bbc4ae]/30 shadow-2xl overflow-hidden p-6 sm:p-8 text-left z-10"
            >
              
              {/* Close Button */}
              <button
                onClick={closeModals}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white hover:bg-[#F5EFE6] border border-[#bbc4ae]/15 flex items-center justify-center text-[#2D2D2D]/60 hover:text-[#bbc4ae] transition-colors focus:outline-none cursor-pointer"
                aria-label="Close dialog modal"
              >
                <X className="w-4 h-4" />
              </button>

              <AnimatePresence mode="wait">
                {!isCtaSubmitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    
                    {/* Header design */}
                    <div className="flex items-center gap-3 border-b border-[#bbc4ae]/20 pb-4 mb-6">
                      <div className="w-10 h-10 rounded-full bg-[#E8B9BA]/20 flex items-center justify-center border border-[#E8B9BA]/35">
                        <Calendar className="w-5 h-5 text-[#E8B9BA]" />
                      </div>
                      <div>
                        <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#2D2D2D]">
                          Reserve your coffee chat
                        </h2>
                        <p className="text-xs text-[#bbc4ae] tracking-wider uppercase font-semibold font-sans">
                          Free 20-minute French Assessment
                        </p>
                      </div>
                    </div>

                    <form onSubmit={handleCtaSubmit} className="space-y-4">
                      
                      {/* Name input */}
                      <div className="space-y-1">
                        <label htmlFor="modal-name" className="text-xs uppercase font-extrabold tracking-wider text-[#2D2D2D]/70 block font-sans">
                          Your Name
                        </label>
                        <input
                          id="modal-name"
                          type="text"
                          required
                          value={formName}
                          onChange={(e) => setFormName(e.target.value)}
                          placeholder="e.g. Amélie Smith"
                          className="w-full px-4 py-3 rounded-xl border border-[#bbc4ae]/30 bg-white focus:outline-none focus:border-[#bbc4ae] focus:ring-1 focus:ring-[#bbc4ae] font-sans text-sm text-[#2D2D2D] transition-colors"
                        />
                      </div>

                      {/* Email input */}
                      <div className="space-y-1">
                        <label htmlFor="modal-email" className="text-xs uppercase font-extrabold tracking-wider text-[#2D2D2D]/70 block font-sans">
                          Your Email
                        </label>
                        <input
                          id="modal-email"
                          type="email"
                          required
                          value={formEmail}
                          onChange={(e) => setFormEmail(e.target.value)}
                          placeholder="amelie@expatliving.com"
                          className="w-full px-4 py-3 rounded-xl border border-[#bbc4ae]/30 bg-white focus:outline-none focus:border-[#bbc4ae] focus:ring-1 focus:ring-[#bbc4ae] font-sans text-sm text-[#2D2D2D] transition-colors"
                        />
                      </div>

                      {/* Choose Goal selection */}
                      <div className="space-y-1">
                        <label htmlFor="modal-goal" className="text-xs uppercase font-extrabold tracking-wider text-[#2D2D2D]/70 block font-sans">
                          Primary Learning Goal
                        </label>
                        <select
                          id="modal-goal"
                          value={formGoal}
                          onChange={(e) => setFormGoal(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-[#bbc4ae]/30 bg-white focus:outline-none focus:border-[#bbc4ae] focus:ring-1 focus:ring-[#bbc4ae] font-sans text-sm text-[#2D2D2D] transition-colors"
                        >
                          <option value="social_confidence">Conversational Social Confidence</option>
                          <option value="government_admin">Navigating French Admin & Papers</option>
                          <option value="professional_talk">Careers, Meetings & Presentations</option>
                          <option value="inlaws_bonding">Sunday In-Laws Gatherings</option>
                        </select>
                      </div>

                      {/* Interactive details */}
                      <div className="bg-[#FBF8F3] p-4 rounded-xl border border-[#bbc4ae]/15 flex items-start gap-3 mt-1">
                        <Clock className="w-4 h-4 text-[#bbc4ae] shrink-0 mt-0.5" />
                        <div className="text-xs">
                          <p className="font-semibold text-[#2D2D2D]">What happens next?</p>
                          <p className="text-[#2D2D2D]/70 mt-0.5 leading-snug">
                            No preparation needed! Eva will personally review your goals and drop an invite to calendar time slots inside your inbox.
                          </p>
                        </div>
                      </div>

                      {/* Submit */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          className="w-full py-4 rounded-xl bg-[#E8B9BA] hover:bg-[#dfa2a3] text-white font-sans text-xs uppercase font-extrabold tracking-widest cursor-pointer hover:shadow-md transition-all flex items-center justify-center gap-1.5"
                        >
                          <Mail className="w-4 h-4" />
                          <span>Envoyer ma demande</span>
                        </button>
                      </div>

                    </form>

                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-center py-10 space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#E8B9BA]/20 flex items-center justify-center border-2 border-[#E8B9BA] mx-auto text-[#E8B9BA]">
                      <Heart className="w-8 h-8 fill-[#E8B9BA] text-[#E8B9BA]" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-serif text-2xl font-bold text-[#bbc4ae] italic">
                        Merci beaucoup !
                      </h3>
                      <p className="text-sm font-sans text-[#2D2D2D]/80 max-w-sm mx-auto leading-relaxed">
                        Your assessment application has been filed securely! Eva is reading your objectives this very moment over a warm pastry. 
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-white border border-[#bbc4ae]/15 text-xs text-[#2D2D2D]/60 max-w-xs mx-auto">
                      ✓ A calendar selection link has been drafted & sent to your inbox.
                    </div>

                    <button
                      onClick={closeModals}
                      className="px-6 py-2 rounded-full border border-[#bbc4ae]/30 hover:bg-white text-xs font-bold uppercase text-[#2D2D2D]/60 hover:text-[#bbc4ae] cursor-pointer transition-colors"
                    >
                      Close Window
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 2. LE SALON DE DISCUSSION MODAL (Personal messages) */}
      <AnimatePresence>
        {isMessageModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModals}
              className="absolute inset-0 bg-[#2E2D2B]/55 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="relative w-full max-w-lg bg-[#FBF8F3] rounded-3xl border border-[#bbc4ae]/30 shadow-2xl p-6 sm:p-8 text-left z-10"
            >
              
              {/* Close Icon button */}
              <button
                onClick={closeModals}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white hover:bg-[#F5EFE6] border border-[#bbc4ae]/15 flex items-center justify-center text-[#2D2D2D]/60 hover:text-[#bbc4ae] transition-colors focus:outline-none cursor-pointer"
                aria-label="Close dialog modal"
              >
                <X className="w-4 h-4" />
              </button>

              <AnimatePresence mode="wait">
                {!isMessageSubmitted ? (
                  <motion.div
                    key="msg-form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    
                    <div className="flex items-center gap-3 border-b border-[#bbc4ae]/20 pb-4 mb-6">
                      <div className="w-10 h-10 rounded-full bg-[#bbc4ae]/20 flex items-center justify-center border border-[#bbc4ae]/35">
                        <MessageCircle className="w-5 h-5 text-[#bbc4ae]" />
                      </div>
                      <div>
                        <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#2D2D2D]">
                          Envoi de message
                        </h2>
                        <p className="text-xs text-[#bbc4ae] tracking-wider uppercase font-semibold font-sans">
                          Send a Direct Note to Eva
                        </p>
                      </div>
                    </div>

                    <form onSubmit={handleMessageSubmit} className="space-y-4">
                      
                      <div className="space-y-1">
                        <label htmlFor="msg-name" className="text-xs uppercase font-extrabold tracking-wider text-[#2D2D2D]/70 block font-sans">
                          Your Name
                        </label>
                        <input
                          id="msg-name"
                          type="text"
                          required
                          value={formName}
                          onChange={(e) => setFormName(e.target.value)}
                          placeholder="e.g. Charlotte L."
                          className="w-full px-4 py-3 rounded-xl border border-[#bbc4ae]/30 bg-white focus:outline-none focus:border-[#bbc4ae] font-sans text-sm text-[#2D2D2D] transition-colors"
                        />
                      </div>

                      <div className="space-y-1">
                        <label htmlFor="msg-email" className="text-xs uppercase font-extrabold tracking-wider text-[#2D2D2D]/70 block font-sans">
                          Your Email
                        </label>
                        <input
                          id="msg-email"
                          type="email"
                          required
                          value={formEmail}
                          onChange={(e) => setFormEmail(e.target.value)}
                          placeholder="charlotte@example.com"
                          className="w-full px-4 py-3 rounded-xl border border-[#bbc4ae]/30 bg-white focus:outline-none focus:border-[#bbc4ae] font-sans text-sm text-[#2D2D2D] transition-colors"
                        />
                      </div>

                      <div className="space-y-1">
                        <label htmlFor="msg-text" className="text-xs uppercase font-extrabold tracking-wider text-[#2E1D0B]/70 block font-sans">
                          Message
                        </label>
                        <textarea
                          id="msg-text"
                          required
                          rows={4}
                          value={userMsg}
                          onChange={(e) => setUserMsg(e.target.value)}
                          placeholder="Coucou Eva! I'd love to ask if you offer weekend slots, or tell you a bit about my background in Strasbourg..."
                          className="w-full px-4 py-3 rounded-xl border border-[#bbc4ae]/30 bg-white focus:outline-none focus:border-[#bbc4ae] font-sans text-sm text-[#2D2D2D] transition-colors resize-none"
                        />
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          className="w-full py-4 rounded-xl bg-[#bbc4ae] hover:bg-[#a9b39b] text-white font-sans text-xs uppercase font-extrabold tracking-widest cursor-pointer hover:shadow-md transition-all flex items-center justify-center gap-1.5"
                        >
                          <Send className="w-3.5 h-3.5" />
                          <span>Envoyer le message</span>
                        </button>
                      </div>

                    </form>

                  </motion.div>
                ) : (
                  <motion.div
                    key="msg-success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-center py-10 space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#bbc4ae]/20 flex items-center justify-center border-2 border-[#bbc4ae] mx-auto text-[#bbc4ae]">
                      <Check className="w-8 h-8 stroke-[3]" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-serif text-2xl font-bold text-[#E8B9BA] italic">
                        Message Envoyé !
                      </h3>
                      <p className="text-sm font-sans text-[#2D2D2D]/80 max-w-sm mx-auto leading-relaxed">
                        Charlotte, your heartfelt note has floated successfully into Eva's virtual mailbox. Expect a warm reply very soon!
                      </p>
                    </div>

                    <button
                      onClick={closeModals}
                      className="px-6 py-2 rounded-full border border-[#bbc4ae]/30 hover:bg-white text-xs font-bold uppercase text-[#2D2D2D]/60 hover:text-[#bbc4ae] cursor-pointer transition-colors"
                    >
                      Close Window
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
