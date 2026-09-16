import React, { useEffect } from "react";
import { X, Play } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  youtubeId: string;
  title?: string;
  studentName?: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  youtubeId,
  title,
  studentName,
}) => {
  // Handle ESC key press
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

  if (!isOpen || !youtubeId) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/75 backdrop-blur-md transition-opacity duration-300 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#1C1917] rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#1C1917]/90">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-[#E8B9BA]/20 flex items-center justify-center text-[#E8B9BA]">
              <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
            </span>
            <div>
              <h3 id="video-modal-title" className="font-serif text-white text-base sm:text-lg font-bold tracking-tight">
                {studentName ? `${studentName}'s Story` : "Student Interview"}
              </h3>
              {title && (
                <p className="text-xs text-white/60 font-sans line-clamp-1">
                  {title}
                </p>
              )}
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white flex items-center justify-center transition-all cursor-pointer focus:outline-none"
            aria-label="Close video"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 16:9 Responsive Video Container */}
        <div className="relative w-full aspect-video bg-black">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
            title={title || "YouTube video player"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>
      </div>
    </div>
  );
};
