import DashboardShell from "../components/layout/DashboardShell";

import HeroRoom from "../components/hero/HeroRoom";
import WeatherCard from "../components/weather/WeatherCard";
import NowPlaying from "../components/music/NowPlaying";
import AirConditioner from "../components/climate/AirConditioner";
import EnergyCard from "../components/energy/EnergyCard";
import PortfolioCard from "../components/portfolio/PortfolioCard";

import { weather } from "../data/weather";
import { music } from "../data/music";

function Dashboard() {
  return (
    <DashboardShell>
      <div className="w-full">
        <div className="grid w-full grid-cols-1 gap-3 lg:grid-cols-[minmax(0,1.68fr)_minmax(280px,0.92fr)]">
          {/* LEFT SIDE */}
          <div className="grid min-w-0 content-start gap-3">
            {/* HERO */}
            <HeroRoom />

            {/* BOTTOM LEFT CARDS */}
            <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2">
              <AirConditioner />

              <EnergyCard
                usage={16.4}
                unit="kWh"
                period="Week"
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="grid min-w-0 content-start gap-3">
            <WeatherCard
              location={weather.location}
              temperature={weather.temperature}
              forecasts={weather.forecasts}
            />

            <NowPlaying
              title={music.title}
              subtitle={music.subtitle}
              duration={music.duration}
              albumImage={music.albumImage}
            />

            <PortfolioCard
              value={156}
              label="Portfolio"
            />
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}

export default Dashboard;