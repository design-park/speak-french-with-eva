import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Check, Send, X } from "lucide-react";
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';

interface MessageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Status = {
  type: "idle" | "loading"
} | {
  type: "success"; message: string
} | {
  type: "error"; message: string
};

export function MessageModal({ isOpen, onClose }: MessageModalProps) {
  const [status, setStatus] = useState<Status>({ type: "idle" });
  const formRef = useRef<HTMLFormElement>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  // Reset submission state when modal opens
  useEffect(() => {
    if (isOpen) {
      setStatus({ type: "idle" });
    }
  }, [isOpen]);

  const handleMessageSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(formRef.current!);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
      setStatus({ type: "error", message: "Please fill in all fields" });
      return;
    }

    setStatus({ type: "loading" });

    try {
      // Execute the invisible reCAPTCHA manually
      // This will either silently fetch a token or open the challenge modal
      const token = await recaptchaRef.current.executeAsync();

      if (token) {
        // Reset widget token so it can be re-used later if needed
        recaptchaRef.current.reset();

        const time = new Date().toLocaleString("fr-FR", { hour: "2-digit", minute: "2-digit", day: "2-digit", month: "2-digit", year: "numeric", weekday: "long" });

        const payload = {
          time,
          name,
          email,
          message,
          "g-recaptcha-response": token,
        };

        emailjs.send("service_syaeqjf", "template_sybcdic", payload, { publicKey: "RN8hLdKYDEQipzHcO" })
          .then(() => {
            setStatus({ type: "success", message: "Message sent successfully!" });
            formRef.current?.reset();
          })
          .catch((error) => {
            setStatus({ type: "error", message: "Failed to send message. Please try again." });
            console.error("EmailJS Error:", error.text);
          });
      }
    } catch (error) {
      console.error("reCAPTCHA execution failed:", error);
      setStatus({ type: "error", message: "reCAPTCHA execution failed. Please try again." });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
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
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white hover:bg-[#F5EFE6] border border-[#bbc4ae]/15 flex items-center justify-center text-[#2D2D2D]/60 hover:text-[#bbc4ae] transition-colors focus:outline-none cursor-pointer"
              aria-label="Close dialog modal"
            >
              <X className="w-4 h-4" />
            </button>

            <AnimatePresence mode="wait">
              {status.type !== "success" ? (
                <motion.div
                  key="msg-form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-3 border-b border-[#bbc4ae]/20 pb-4 mb-6">
                    <div className="w-10 h-10 rounded-full bg-[#E8B9BA]/20 flex items-center justify-center border border-[#E8B9BA]/35">
                      <Mail className="w-5 h-5 text-[#AC595B]" />
                    </div>
                    <div>
                      <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#2D2D2D]">
                        Send an Email
                      </h2>
                      <p className="text-xs text-[#AC595B] tracking-wider uppercase font-semibold font-sans">
                        Send a Direct Email to Eva
                      </p>
                    </div>
                  </div>

                  <form onSubmit={handleMessageSubmit} className="space-y-4" ref={formRef}>
                    <div className="space-y-1">
                      <label htmlFor="msg-name" className="text-xs uppercase font-extrabold tracking-wider text-[#2D2D2D]/70 block font-sans">
                        Your Name
                      </label>
                      <input
                        id="msg-name"
                        type="text"
                        required
                        name="name"
                        placeholder="e.g. Charlotte L."
                        className="w-full px-4 py-3 rounded-xl border border-[#bbc4ae]/30 bg-white focus:outline-none focus:border-[#659287] font-sans text-sm text-[#2D2D2D] transition-colors"
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
                        name="email"
                        placeholder="charlotte@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-[#bbc4ae]/30 bg-white focus:outline-none focus:border-[#659287] font-sans text-sm text-[#2D2D2D] transition-colors"
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="msg-text" className="text-xs uppercase font-extrabold tracking-wider text-[#2D2D2D]/70 block font-sans">
                        Your Message
                      </label>
                      <textarea
                        id="msg-text"
                        required
                        rows={4}
                        name="message"
                        placeholder="Coucou Eva! I'd love to ask if you offer weekend slots, or tell you a bit about my background in Strasbourg..."
                        className="w-full px-4 py-3 rounded-xl border border-[#bbc4ae]/30 bg-white focus:outline-none focus:border-[#659287] font-sans text-sm text-[#2D2D2D] transition-colors resize-none"
                      />
                    </div>

                    {/* Invisible reCAPTCHA rendered inside the form */}
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      size="invisible"
                      sitekey="6LeINGYtAAAAAGvJqEiEFhboTYmZzAIPETR2-RMb"
                    />

                    {status.type === "loading" && (
                      <p className="text-xs font-sans text-center">Sending...</p>
                    )}

                    {status.type === "error" && (
                      <p className="text-red-500 text-xs font-sans">{status.message}</p>
                    )}

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-4 rounded-xl bg-[#659287] hover:bg-[#527a70] text-white font-sans text-xs uppercase font-extrabold tracking-widest cursor-pointer hover:shadow-md transition-all flex items-center justify-center gap-1.5"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Send the Email</span>
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
                  <div className="w-16 h-16 rounded-full bg-[#659287]/20 flex items-center justify-center border-2 border-[#659287] mx-auto text-[#659287]">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl font-bold text-[#AC595B]">
                      Email Sent!
                    </h3>
                    <p className="text-sm font-sans text-[#2D2D2D]/80 max-w-sm mx-auto leading-relaxed">
                      Your message has been prepared! Your email client will open to send the email directly to Eva. Speak to you soon!
                    </p>
                  </div>

                  <button
                    onClick={onClose}
                    className="px-6 py-2 rounded-full border border-[#bbc4ae]/30 hover:bg-white text-xs font-bold uppercase text-[#2D2D2D]/60 hover:text-[#659287] cursor-pointer transition-colors"
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
  );
}
