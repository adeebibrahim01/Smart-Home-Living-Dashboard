import { useState } from "react";
import GlassCard from "../common/GlassCard";
import Toggle from "../common/Toggle";
import TemperatureGauge from "./TemperatureGauge";

function AirConditioner() {
  const [active, setActive] = useState(true);

  return (
    <GlassCard className="h-full p-4 sm:p-5">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-[13px] font-medium">
            Air Conditioner
          </h3>

          <p className="mt-1 text-[9px] text-[#818181]">
            living room
          </p>
        </div>

        <Toggle
          checked={active}
          onChange={setActive}
          label="Air Conditioner"
        />
      </div>

      <div
        className={
          active
            ? "opacity-100 transition-opacity"
            : "opacity-45 transition-opacity"
        }
      >
        <TemperatureGauge />
      </div>
    </GlassCard>
  );
}

export default AirConditioner;