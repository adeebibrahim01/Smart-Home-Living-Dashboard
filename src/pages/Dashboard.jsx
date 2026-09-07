import { useQuery } from "@tanstack/react-query";

import DashboardShell from "../components/layout/DashboardShell";
import HeroRoom from "../components/hero/HeroRoom";
import WeatherCard from "../components/weather/WeatherCard";
import NowPlaying from "../components/music/NowPlaying";
import AirConditioner from "../components/climate/AirConditioner";
import EnergyCard from "../components/energy/EnergyCard";
import PortfolioCard from "../components/portfolio/PortfolioCard";
import { useEffect } from "react";
import { music } from "../data/music";

// Fetcher Function
const fetchWeather = async () => {
  const WORKER_URL = "https://smart-home-weather.adeebibrahim01.workers.dev";
  const response = await fetch(WORKER_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }
  return response.json();
};

function Dashboard() {
  const { data: weather, isLoading, refetch } = useQuery({
  queryKey: ["weatherData"],
  queryFn: fetchWeather,
  staleTime: 1000 * 60 * 5,
  gcTime: 1000 * 60 * 10,
  enabled: false,
});

useEffect(() => {
  const id = requestAnimationFrame(() => {
    refetch();
  });

  return () => cancelAnimationFrame(id);
}, [refetch]);

  return (
    <DashboardShell>
      <div className="grid w-full gap-3">
        {/* TOP SECTION */}
        <div className="grid min-w-0 grid-cols-1 gap-3 lg:grid-cols-[minmax(0,1.68fr)_minmax(280px,0.92fr)] lg:items-stretch">
          {/* LEFT SIDE */}
          <div className="min-w-0 h-full">
            <HeroRoom />
          </div>

          {/* RIGHT SIDE */}
          <div className="flex min-w-0 h-full flex-col gap-3">
            <WeatherCard
              location={weather?.location ?? "Islamabad, PK"}
              temperature={weather?.temperature ?? "30°"}
              forecasts={weather?.forecasts ?? []}
              isLoading={isLoading}
            />

            <div className="min-h-0 flex-1">
              <NowPlaying
                title={music.title}
                subtitle={music.subtitle}
                duration={music.duration}
                albumImage={music.albumImage}
              />
            </div>
          </div>
        </div>

        {/* BOTTOM — THREE EQUAL CARDS */}
        <div className="grid min-w-0 grid-cols-1 gap-3 md:grid-cols-3">
          <AirConditioner />

          <EnergyCard usage={16.4} unit="kWh" period="Week" />

          <PortfolioCard value={156} label="Portfolio" />
        </div>
      </div>
    </DashboardShell>
  );
}

export default Dashboard;