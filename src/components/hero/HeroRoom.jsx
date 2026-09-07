import { Maximize2 } from "lucide-react";

import GlassCard from "../common/GlassCard";

const heroImage =
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=90";

// Preload the hero image as early as possible.
if (typeof window !== "undefined") {
  const preloadImage = new Image();
  preloadImage.src = heroImage;
}

function HeroRoom() {
  return (
    <GlassCard
      className="group relative min-h-[390px] overflow-hidden rounded-[26px] sm:min-h-[470px] lg:min-h-[570px]"
      hover
    >
      <img
        src={heroImage}
        alt="Bright modern living room"
        loading="eager"
        fetchPriority="high"
        decoding="sync"
        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.015]"
      />

      <div className="absolute inset-0 bg-white/10" />

      <div className="absolute inset-0 bg-gradient-to-r from-white/15 via-transparent to-white/10" />

      <button
        type="button"
        aria-label="Expand room"
        className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/55 text-black/70 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100"
      >
        <Maximize2 size={15} strokeWidth={1.8} />
      </button>
    </GlassCard>
  );
}

export default HeroRoom;