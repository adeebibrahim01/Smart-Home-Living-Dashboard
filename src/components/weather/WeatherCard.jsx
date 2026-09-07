import React from "react";
import GlassCard from "../common/GlassCard";
import CurrentWeather from "./CurrentWeather";
import ForecastGrid from "./ForecastGrid";

function WeatherCard({
  location,
  temperature,
  forecasts,
  isLoading,
  isFetching,
}) {
  return (
    <GlassCard
      className="
        w-full
        overflow-hidden
        rounded-[22px]
        border
        border-white/70
        bg-[#F7F8FA]
        p-0
        shadow-none
        font-[Inter,sans-serif]
      "
    >
      <div className="relative">
        <CurrentWeather
          location={location || "Tatta Pani, AJK"}
          temperature={temperature || "--°"}
        />

        {/* Subtle background refresh indicator.
            Card content remains visible while weather refreshes. */}
        {isFetching && !isLoading && (
          <span
            className="
              absolute
              right-4
              top-4
              h-2
              w-2
              animate-pulse
              rounded-full
              bg-black/25
            "
            aria-label="Updating weather"
          />
        )}
      </div>

      <ForecastGrid forecasts={forecasts || []} />
    </GlassCard>
  );
}

export default WeatherCard;