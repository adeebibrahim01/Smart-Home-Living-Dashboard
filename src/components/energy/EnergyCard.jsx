import { ChevronDown } from "lucide-react";

import GlassCard from "../common/GlassCard";
import EnergyChart from "./EnergyChart";

function EnergyCard({
  usage = 16.4,
  unit = "kWh",
  period = "Week",
}) {
  const values = [30, 42, 34, 78, 45, 56, 35];

  return (
    <GlassCard className="h-full overflow-hidden p-4 sm:p-5">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-[13px] font-medium">
            Electricity consumption
          </h3>

          <div className="mt-1.5 flex items-baseline gap-1.5">
            <span className="text-[12px] font-medium">
              {usage}
            </span>

            <span className="text-[8px] text-[#777]">
              {unit} of clean energy
            </span>
          </div>
        </div>

        <button
          type="button"
          className="flex items-center gap-2 rounded-full border border-black/10 bg-white/35 px-3 py-1.5 text-[9px] text-[#555] transition-colors hover:bg-white"
        >
          {period}
          <ChevronDown size={12} />
        </button>
      </div>

      <div className="mt-3">
        <EnergyChart values={values} />
      </div>
    </GlassCard>
  );
}

export default EnergyCard;