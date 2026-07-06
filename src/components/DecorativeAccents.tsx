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

export const LavenderBranch: React.FC<AccentProps> = ({ className = "w-10 h-10", color = "stroke-[#bbc4ae]" }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`${className} fill-none ${color} stroke-[1.5]`}
      aria-hidden="true"
    >
      {/* Central stem */}
      <path d="M50,90 Q48,50 50,10" strokeLinecap="round" />
      {/* Level 1 (bottom cluster) */}
      <path d="M50,65 C42,63 44,73 50,71 C56,73 58,63 50,65 Z" />
      <path d="M50,60 C42,58 44,68 50,66 C56,68 58,58 50,60 Z" />
      {/* Level 2 */}
      <path d="M50,48 C42,46 44,56 50,54 C56,56 58,46 50,48 Z" />
      <path d="M50,43 C43,41 45,51 50,49 C55,51 57,41 50,43 Z" />
      {/* Level 3 */}
      <path d="M50,31 C43,29 45,39 50,37 C55,39 57,29 50,31 Z" />
      <path d="M50,26 C44,24 46,34 50,32 C54,34 56,24 50,26 Z" />
      {/* Level 4 (Top cluster) */}
      <path d="M50,18 C45,16 47,26 50,24 C53,26 55,16 50,18 Z" />
      <path d="M50,13 C46,11 48,21 50,19 C52,21 54,11 50,13 Z" />
      {/* Leaves at the bottom */}
      <path d="M49,78 C35,74 38,62 48,68" strokeLinecap="round" />
      <path d="M51,82 C65,78 62,66 52,72" strokeLinecap="round" />
    </svg>
  );
};

export const LilyOfTheValley: React.FC<AccentProps> = ({ className = "w-10 h-10", color = "stroke-[#bbc4ae]" }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`${className} fill-none ${color} stroke-[1.5]`}
      aria-hidden="true"
    >
      {/* Main arching stem */}
      <path d="M35,90 C40,65 42,40 65,22" strokeLinecap="round" />
      {/* Broad leaf at base */}
      <path d="M35,90 C22,65 30,42 45,30 C38,52 38,72 35,90 Z" />
      
      {/* Bell flower 1 */}
      <path d="M48,50 Q56,53 58,60" strokeLinecap="round" />
      <path d="M54,60 C52,65 64,65 62,60 C61,57 55,57 54,60 Z" />
      
      {/* Bell flower 2 */}
      <path d="M54,38 Q62,41 64,48" strokeLinecap="round" />
      <path d="M60,48 C58,53 70,53 68,48 C67,45 61,45 60,48 Z" />

      {/* Bell flower 3 */}
      <path d="M60,26 Q67,29 69,36" strokeLinecap="round" />
      <path d="M65,36 C63,41 75,41 73,36 C72,33 66,33 65,36 Z" />
    </svg>
  );
};

export const FleurDeLisOrnament: React.FC<AccentProps> = ({ className = "w-10 h-10", color = "stroke-[#bbc4ae]" }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`${className} fill-none ${color} stroke-[1.5]`}
      aria-hidden="true"
    >
      {/* Central petal */}
      <path d="M50,15 C54,35 60,45 60,60 C60,72 50,75 50,75 C50,75 40,72 40,60 C40,45 46,35 50,15 Z" />
      {/* Left petal */}
      <path d="M50,60 C40,58 20,50 20,68 C20,78 30,80 38,76 C46,72 48,64 50,60 Z" />
      {/* Right petal */}
      <path d="M50,60 C60,58 80,50 80,68 C80,78 70,80 62,76 C54,72 52,64 50,60 Z" />
      {/* Ribbon band */}
      <path d="M32,62 C40,66 60,66 68,62" strokeWidth="2.5" />
      {/* Stem base (bottom anchor) */}
      <path d="M50,62 C50,75 42,90 35,90 M50,62 C50,75 58,90 65,90" strokeLinecap="round" />
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

export const FrenchCoffeeIcon: React.FC<AccentProps> = ({ className = "w-6 h-6", color = "text-[#2D2D2D]" }) => {
  const clipId = React.useId();
  return (
    <svg
      viewBox="0 0 100 100"
      className={`${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* 1. Outer Speech Bubble Shape filled with French flag stripes */}
      <g clipPath={`url(#${clipId})`}>
        {/* Blue stripe (left) */}
        <rect x="0" y="0" width="37.5" height="100" fill="#4A76A8" />
        {/* White stripe (middle) */}
        <rect x="37.5" y="0" width="25" height="100" fill="#FFFFFF" />
        {/* Red/Rose stripe (right) */}
        <rect x="62.5" y="0" width="37.5" height="100" fill="#E18E88" />
      </g>
      
      {/* Speech Bubble Outline (thick, premium dark gray line) - Flipped to point to bottom-right */}
      <path
        d="M 50 15 c -22 0 -40 13.4 -40 30 s 18 30 40 30 c 4 0 7.8 -.4 11.4 -1.2 L 80 79 l -5 -15.5 C 80.2 58.7 83 52.6 83 45 c 0 -16.6 -18 -30 -40 -30 z"
        stroke="#2D2D2D"
        strokeWidth="3.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      <defs>
        <clipPath id={clipId}>
          <path d="M 50 15 c -22 0 -40 13.4 -40 30 s 18 30 40 30 c 4 0 7.8 -.4 11.4 -1.2 L 80 79 l -5 -15.5 C 80.2 58.7 83 52.6 83 45 c 0 -16.6 -18 -30 -40 -30 z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const FrenchRose: React.FC<AccentProps> = ({ className = "w-10 h-10", color = "stroke-[#bbc4ae]" }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`${className} fill-none ${color} stroke-[1.5]`}
      aria-hidden="true"
    >
      {/* Rose Bud Center */}
      <path d="M50,45 C45,45 42,38 48,34 C54,30 58,38 52,43 C50,45 48,46 47,44" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* Middle Petals */}
      <path d="M40,40 C35,28 65,28 60,40 C57,44 54,45 50,45" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M35,48 C30,35 45,30 50,30" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M65,48 C70,35 55,30 50,30" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* Outer Petals */}
      <path d="M32,55 C22,40 50,22 50,22 C50,22 78,40 68,55 C60,65 40,65 32,55 Z" />
      <path d="M25,50 C15,62 35,75 50,75 C65,75 85,62 75,50" />
      
      {/* Stem & Leaves */}
      <path d="M50,75 C50,85 50,90 50,90" strokeLinecap="round" />
      <path d="M50,80 C40,78 30,70 36,64 M50,84 C60,82 70,74 64,68" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export const EiffelTower: React.FC<AccentProps> = ({ className = "w-10 h-10", color = "stroke-[#bbc4ae]" }) => {
  return (
    <svg
      viewBox="0 0 100 120"
      className={`${className} fill-none ${color} stroke-[1.2]`}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="50" y1="2" x2="50" y2="15" />
      <path d="M50 15 C47 40 43 75 35 110" />
      <path d="M50 15 C53 40 57 75 65 110" />
      <path d="M50 15 C49 45 47 75 42 110" />
      <path d="M50 15 C51 45 53 75 58 110" />
      <rect x="36" y="85" width="28" height="3" rx="1" fill="currentColor" stroke="none" className="opacity-20" />
      <line x1="37" y1="85" x2="63" y2="85" />
      <line x1="35" y1="88" x2="65" y2="88" />
      <rect x="43" y="60" width="14" height="2" rx="0.5" fill="currentColor" stroke="none" className="opacity-20" />
      <line x1="44" y1="60" x2="56" y2="60" />
      <line x1="43" y1="62" x2="57" y2="62" />
      <path d="M38 110 C42 93 58 93 62 110" />
      <line x1="48" y1="30" x2="52" y2="40" strokeWidth="0.8" />
      <line x1="52" y1="30" x2="48" y2="40" strokeWidth="0.8" />
      <line x1="46" y1="45" x2="54" y2="55" strokeWidth="0.8" />
      <line x1="54" y1="45" x2="46" y2="55" strokeWidth="0.8" />
      <line x1="41" y1="68" x2="59" y2="80" strokeWidth="0.8" />
      <line x1="59" y1="68" x2="41" y2="80" strokeWidth="0.8" />
    </svg>
  );
};

export const Croissant: React.FC<AccentProps> = ({ className = "w-10 h-10", color = "stroke-[#bbc4ae]" }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`${className} fill-none ${color} stroke-[1.2]`}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15,50 C12,42 20,30 35,22 C50,14 70,16 85,28 C90,32 92,38 85,42 M15,50 C10,55 18,65 30,72 C45,80 65,80 80,70 C88,64 88,58 85,42" />
      <path d="M32,24 C38,32 38,55 26,68" />
      <path d="M48,18 C56,28 56,58 43,76" />
      <path d="M66,20 C72,30 71,56 61,72" />
      <path d="M78,25 C82,34 81,50 75,60" />
      <path d="M35,22 C45,35 45,55 30,72" />
      <path d="M65,22 C55,35 55,55 70,72" />
    </svg>
  );
};

export const CafeCup: React.FC<AccentProps> = ({ className = "w-10 h-10", color = "stroke-[#bbc4ae]" }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`${className} fill-none ${color} stroke-[1.2]`}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M25,38 L75,38 C75,38 75,68 50,68 C25,68 25,38 25,38 Z" />
      <path d="M75,45 C82,45 85,49 85,53 C85,57 82,61 75,61" />
      <path d="M20,75 L80,75" />
      <path d="M42,20 Q45,26 42,32 M50,17 Q53,23 50,29 M58,20 Q61,26 58,32" />
    </svg>
  );
};

export const Baguette: React.FC<AccentProps> = ({ className = "w-10 h-10", color = "stroke-[#bbc4ae]" }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`${className} fill-none ${color} stroke-[1.2]`}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15,80 C12,83 18,88 22,85 L85,22 C88,18 83,12 80,15 Z" />
      <line x1="30" y1="65" x2="40" y2="70" />
      <line x1="45" y1="50" x2="55" y2="55" />
      <line x1="60" y1="35" x2="70" y2="40" />
    </svg>
  );
};
