import { MoreHorizontal } from "lucide-react";

import GlassCard from "../common/GlassCard";

function PortfolioCard({
  value = 156,
  label = "Portfolio",
}) {
  return (
    <GlassCard className="overflow-hidden p-4 sm:p-5">
      <div className="flex items-center justify-between">
        <h3 className="text-[13px] font-medium">
          DSCR
        </h3>

        <button
          type="button"
          aria-label="Portfolio options"
          className="text-[#8a8a8a]"
        >
          <MoreHorizontal size={16} />
        </button>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <p className="text-[11px]">
          • <span className="ml-1">{value}</span>
        </p>

        <span className="text-[9px] text-[#777]">
          {label}
        </span>
      </div>

      <div className="mt-5 h-10 overflow-hidden rounded-t-[8px] bg-white/65">
        <div className="flex h-full items-end gap-1">
          {[35, 52, 44, 70, 61, 78, 65, 90].map(
            (height, index) => (
              <div
                key={index}
                className="flex-1 rounded-t-[5px] bg-[#eda00d]/[0.12]"
                style={{ height: `${height}%` }}
              />
            )
          )}
        </div>
      </div>

      <div className="-mt-2 h-3 w-[45%] rounded-t-[5px] bg-[#eda00d]" />
    </GlassCard>
  );
}

export default PortfolioCard;