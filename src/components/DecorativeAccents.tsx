import React from "react";

interface AccentProps {
  className?: string;
  color?: string;
}

export const LeafTwig: React.FC<AccentProps> = ({ className = "w-10 h-10", color = "stroke-[#bbc4ae]" }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`${className} fill-none ${color} stroke-[1.5]`}
      aria-hidden="true"
    >
      <path d="M50,90 C50,60 45,35 25,15" />
      <path d="M50,90 C50,65 55,40 75,20" />
      {/* Left side leaves */}
      <path d="M42,70 C30,68 28,58 38,56 C44,55 46,65 42,70 Z" />
      <path d="M45,50 C32,46 30,36 40,35 C47,34 48,44 45,50 Z" />
      <path d="M47,30 C38,24 38,15 45,15 C49,15 50,23 47,30 Z" />
      {/* Right side leaves */}
      <path d="M58,72 C70,70 72,60 62,58 C56,57 54,67 58,72 Z" />
      <path d="M55,52 C68,48 70,38 60,37 C53,36 52,46 55,52 Z" />
      {/* Stem top */}
      <path d="M50,90 C50,10 50,10 50,10" />
      <path d="M50,18 C46,10 54,6 50,18 Z" />
    </svg>
  );
};

export const SubtleSparkle: React.FC<AccentProps> = ({ className = "w-4 h-4", color = "fill-[#E8B9BA]" }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`${className} ${color}`}
      aria-hidden="true"
    >
      <path d="M12,0 C12,6.627 18.627,12 24,12 C18.627,12 12,17.373 12,24 C12,17.373 5.373,12 0,12 C5.373,12 12,6.627 12,0 Z" />
    </svg>
  );
};

export const FleurDeLis: React.FC<AccentProps> = ({ className = "w-12 h-12", color = "fill-[#bbc4ae]" }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`${className} ${color}`}
      aria-hidden="true"
    >
      <path d="M50,15 C48,25 35,35 35,50 C35,62 42,65 46,65 C48,65 50,62 50,60 C50,62 52,65 54,65 C58,65 65,62 65,50 C65,35 52,25 50,15 Z" />
      <path d="M50,60 C40,60 15,55 15,68 C15,75 22,78 30,75 C38,72 45,64 50,60 Z" />
      <path d="M50,60 C60,60 85,55 85,68 C85,75 78,78 70,75 C62,72 55,64 50,60 Z" />
      {/* Ribbon connector */}
      <rect x="33" y="58" width="34" height="6" rx="2" className="fill-[#FAF7F2] stroke-[#bbc4ae] stroke-[1.5]" />
    </svg>
  );
};

export const DelicateDottedDivider: React.FC<AccentProps> = ({ className = "w-full my-6", color = "text-[#bbc4ae]" }) => {
  return (
    <div className={`flex items-center justify-center gap-4 ${className} ${color}`}>
      <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-current opacity-30" />
      <SubtleSparkle className="w-3 h-3 opacity-60" color="fill-[#E8B9BA]" />
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-40" />
      <SubtleSparkle className="w-3 h-3 opacity-60" color="fill-[#E8B9BA]" />
      <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-current opacity-30" />
    </div>
  );
};

export const LeafyBranchBorder: React.FC<AccentProps> = ({ className = "absolute", color = "stroke-[#bbc4ae]" }) => {
  return (
    <svg
      viewBox="0 0 200 100"
      className={`${className} w-48 h-24 fill-none ${color} stroke-[1.5] pointer-events-none opacity-40`}
    >
      <path d="M10,90 Q90,95 180,30" />
      {/* Leaf ornaments cascading */}
      <path d="M50,86 Q40,65 52,70 Q60,78 50,86" />
      <path d="M90,82 Q85,55 98,62 Q105,74 90,82" />
      <path d="M130,68 Q125,40 138,45 Q145,58 130,68" />
      <path d="M165,48 Q165,25 174,32 Q178,42 165,48" />
    </svg>
  );
};
