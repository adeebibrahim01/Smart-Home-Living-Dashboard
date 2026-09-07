import GlassCard from "../common/GlassCard";
import CurrentWeather from "./CurrentWeather";
import ForecastGrid from "./ForecastGrid";

function WeatherCard({
  location = "Pendleton, Pendleton",
  temperature = "+3°",
  forecasts = [],
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
      <CurrentWeather
        location={location}
        temperature={temperature}
      />

      <ForecastGrid forecasts={forecasts} />
    </GlassCard>
  );
}

export default WeatherCard;