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
              location={weather.location}
              temperature={weather.temperature}
              forecasts={weather.forecasts}
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

          <EnergyCard
            usage={16.4}
            unit="kWh"
            period="Week"
          />

          <PortfolioCard
            value={156}
            label="Portfolio"
          />
        </div>
      </div>
    </DashboardShell>
  );
}

export default Dashboard;