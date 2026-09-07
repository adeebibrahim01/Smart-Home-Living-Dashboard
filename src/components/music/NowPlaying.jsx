import {
  Disc3,
  Pause,
  Play,
  SkipBack,
  SkipForward,
} from "lucide-react";
import { useState } from "react";

import GlassCard from "../common/GlassCard";

function NowPlaying({
  title = "HUMNAVA MERE",
  subtitle = "(slow+reverb)",
  albumImage,
  duration = "02:25",
}) {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(58);

  return (
    <GlassCard className="min-h-[230px] h-full p-4 sm:p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-full border border-black/10">
            <Disc3 size={14} strokeWidth={1.6} />
          </div>

          <span className="text-[13px] font-medium">
            Now Playing
          </span>
        </div>

        <span className="text-[9px] font-medium text-[#d89a20]">
          Song
        </span>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <img
          src={albumImage}
          alt=""
          loading="lazy"
          className="h-9 w-9 rounded-[8px] object-cover"
        />

        <div className="min-w-0">
          <p className="truncate text-[10px] font-medium">
            {title}
          </p>

          <p className="mt-0.5 text-[8px] text-[#858585]">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="mt-6">
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={(event) =>
            setProgress(Number(event.target.value))
          }
          aria-label="Song progress"
          className="h-1 w-full cursor-pointer accent-[#ed9d0b]"
        />

        <div className="mt-1 flex justify-between text-[8px] text-[#777]">
          <span>02:25</span>
          <span>{duration}</span>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-center gap-6">
        <button
          type="button"
          aria-label="Previous"
          className="text-[#3f3f3f]"
        >
          <SkipBack size={16} />
        </button>

        <button
          type="button"
          aria-label={playing ? "Pause" : "Play"}
          onClick={() => setPlaying((value) => !value)}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ed9d0b] text-white shadow-[0_5px_15px_rgba(237,157,11,0.25)] transition-transform active:scale-95"
        >
          {playing ? (
            <Pause size={15} fill="currentColor" />
          ) : (
            <Play
              size={15}
              fill="currentColor"
              className="translate-x-[1px]"
            />
          )}
        </button>

        <button
          type="button"
          aria-label="Next"
          className="text-[#3f3f3f]"
        >
          <SkipForward size={16} />
        </button>
      </div>
    </GlassCard>
  );
}

export default NowPlaying;