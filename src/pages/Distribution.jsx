import React from "react";
import DashboardShell from "../components/layout/DashboardShell";

const Distribution = () => {
  const destinations = [
    {
      name: "Living Room",
      value: "128 kWh",
      percentage: 82,
      status: "Optimal",
      icon: "🛋️",
    },
    {
      name: "Kitchen",
      value: "94 kWh",
      percentage: 68,
      status: "Optimal",
      icon: "🍳",
    },
    {
      name: "Bedroom",
      value: "76 kWh",
      percentage: 54,
      status: "Stable",
      icon: "🛏️",
    },
    {
      name: "Garage",
      value: "52 kWh",
      percentage: 39,
      status: "Low",
      icon: "🚗",
    },
  ];

  const activity = [
    {
      title: "Living Room",
      description: "Energy delivered successfully",
      time: "2 min ago",
      value: "+18 kWh",
    },
    {
      title: "Kitchen",
      description: "Distribution route optimized",
      time: "8 min ago",
      value: "+12 kWh",
    },
    {
      title: "Bedroom",
      description: "Energy flow adjusted",
      time: "14 min ago",
      value: "+9 kWh",
    },
  ];

  return (
    <DashboardShell>
      <div className="mx-auto w-full max-w-7xl space-y-6">
        {/* HEADER */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Smart Home System
              </p>
            </div>
            <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Distribution
            </h1>
            <p className="mt-1 text-xs text-gray-500">
              Monitor and manage real-time energy flow across your home zones.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start rounded-full border border-gray-100 bg-white px-4 py-2 shadow-sm sm:self-auto">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F7D85A] opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#F7D85A]"></span>
            </span>
            <span className="text-xs font-semibold text-gray-700">
              System Online
            </span>
          </div>
        </div>

        {/* MAIN FLOW CARD & CAPACITY GRID */}
        <div className="grid min-w-0 gap-4 lg:grid-cols-[1.45fr_0.75fr]">
          {/* LIVE ENERGY FLOW CARD */}
          <div className="flex flex-col justify-between rounded-3xl border border-gray-100/80 bg-white p-6 shadow-sm transition-all sm:p-8">
            <div>
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Live Energy Flow
                  </span>
                  <div className="mt-2 flex items-baseline gap-2">
                    <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
                      350 <span className="text-lg font-normal text-gray-500">kWh</span>
                    </h2>
                  </div>
                  <p className="mt-0.5 text-xs text-gray-400">
                    Distributed across home today
                  </p>
                </div>

                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF8D9] px-3.5 py-1.5 text-xs font-bold text-gray-800">
                  <span className="h-2 w-2 rounded-full bg-[#F7D85A] animate-pulse" />
                  LIVE
                </span>
              </div>

              {/* FLOW ANIMATED VISUALIZATION */}
              <div className="mt-8 rounded-2xl bg-gray-50/80 p-5 border border-gray-100/60">
                <div className="flex items-center justify-between gap-3">
                  {/* Power Source Icon */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gray-900 text-white shadow-md">
                    <span className="text-xs font-bold tracking-widest">GRID</span>
                  </div>

                  {/* Flow Bar */}
                  <div className="relative flex-1">
                    <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-200/80">
                      <div className="h-full w-[78%] rounded-full bg-[#F7D85A] shadow-sm transition-all duration-500" />
                    </div>
                  </div>

                  {/* Home Network Icon */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F7D85A] text-gray-900 shadow-md">
                    <span className="text-xs font-bold tracking-widest">HOME</span>
                  </div>
                </div>

                <div className="mt-3 flex justify-between text-[11px] font-medium text-gray-400">
                  <span>Main Power Source</span>
                  <span>78% Active Transfer</span>
                  <span>Home Network</span>
                </div>
              </div>
            </div>

            {/* FLOW METRICS */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="rounded-2xl bg-[#f7f7f5] p-4 text-center sm:text-left transition-transform hover:-translate-y-0.5">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                  Input Power
                </p>
                <p className="mt-1 text-lg font-bold text-gray-900">
                  428 <span className="text-xs font-normal text-gray-500">kWh</span>
                </p>
              </div>

              <div className="rounded-2xl bg-[#f7f7f5] p-4 text-center sm:text-left transition-transform hover:-translate-y-0.5">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                  Distributed
                </p>
                <p className="mt-1 text-lg font-bold text-gray-900">
                  350 <span className="text-xs font-normal text-gray-500">kWh</span>
                </p>
              </div>

              <div className="rounded-2xl bg-[#f7f7f5] p-4 text-center sm:text-left transition-transform hover:-translate-y-0.5">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                  Est. Loss
                </p>
                <p className="mt-1 text-lg font-bold text-gray-900">
                  78 <span className="text-xs font-normal text-gray-500">kWh</span>
                </p>
              </div>
            </div>
          </div>

          {/* CAPACITY CARD (DARK MODE ACCENT) */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-gray-900 p-6 sm:p-8 text-white shadow-xl">
            {/* Background Glow */}
            <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[#F7D85A]/10 blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                  Network Capacity
                </p>

                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-gray-300 backdrop-blur-md">
                  24 Routes Active
                </span>
              </div>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-5xl font-extrabold tracking-tight text-white">
                  74
                </span>
                <span className="text-xl font-bold text-[#F7D85A]">%</span>
              </div>

              <p className="mt-1 text-xs text-gray-400">
                Current total network utilization load
              </p>

              {/* Progress Bar */}
              <div className="mt-6 space-y-1.5">
                <div className="h-3 overflow-hidden rounded-full bg-gray-800 p-0.5 border border-white/5">
                  <div
                    className="h-full rounded-full bg-[#F7D85A] transition-all duration-500 shadow-sm"
                    style={{ width: "74%" }}
                  />
                </div>
                <div className="flex justify-between text-[10px] font-medium text-gray-400">
                  <span>0% Load</span>
                  <span>100% Max</span>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-gray-400">
                  Available Remaining Capacity
                </span>
                <span className="rounded-lg bg-emerald-500/10 px-2.5 py-1 text-xs font-bold text-emerald-400 border border-emerald-500/20">
                  26% Free
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* DISTRIBUTION ZONES GRID */}
        <div className="rounded-3xl border border-gray-100/80 bg-white p-6 sm:p-8 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Distribution Zones
              </h2>
              <p className="mt-0.5 text-xs text-gray-400">
                Current energy allocation breakdown by room
              </p>
            </div>

            <span className="hidden rounded-full bg-gray-100 px-3.5 py-1.5 text-xs font-semibold text-gray-600 sm:block">
              4 Active Zones
            </span>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {destinations.map((destination) => (
              <div
                key={destination.name}
                className="group relative flex flex-col justify-between rounded-2xl bg-[#f7f7f5] p-5 border border-transparent transition-all duration-300 hover:-translate-y-1 hover:border-amber-200 hover:bg-white hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{destination.icon}</span>
                      <span className="text-sm font-semibold text-gray-800">
                        {destination.name}
                      </span>
                    </div>

                    <span
                      className={`h-2.5 w-2.5 rounded-full ${
                        destination.status === "Low"
                          ? "bg-gray-300"
                          : "bg-[#F7D85A]"
                      }`}
                    />
                  </div>

                  <p className="mt-5 text-2xl font-bold text-gray-900">
                    {destination.value}
                  </p>
                </div>

                <div className="mt-4">
                  <div className="h-2 overflow-hidden rounded-full bg-gray-200/70">
                    <div
                      className="h-full rounded-full bg-[#F7D85A] transition-all duration-500 group-hover:bg-amber-400"
                      style={{
                        width: `${destination.percentage}%`,
                      }}
                    />
                  </div>

                  <div className="mt-3 flex items-center justify-between text-xs">
                    <span className="font-medium text-gray-400">
                      {destination.percentage}% load
                    </span>
                    <span className="font-semibold text-gray-600">
                      {destination.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="grid min-w-0 grid-cols-1 gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          {/* ROUTE HEALTH STATUS */}
          <div className="rounded-3xl border border-gray-100/80 bg-white p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-gray-900">
                  Route Health Status
                </h2>
                <p className="mt-0.5 text-xs text-gray-400">
                  Internal network distribution stability
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFF8D9] text-amber-700">
                <span className="h-2.5 w-2.5 rounded-full bg-[#F7D85A]" />
              </div>
            </div>

            <div className="mt-6 space-y-5">
              {/* Route Item 1 */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-700">
                    Primary Network
                  </span>
                  <span className="text-xs font-bold text-gray-900">98%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                  <div className="h-full w-[98%] rounded-full bg-[#F7D85A]" />
                </div>
              </div>

              {/* Route Item 2 */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-700">
                    Secondary Network
                  </span>
                  <span className="text-xs font-bold text-gray-900">86%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                  <div className="h-full w-[86%] rounded-full bg-[#F7D85A]" />
                </div>
              </div>

              {/* Route Item 3 */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-700">
                    Backup Network
                  </span>
                  <span className="text-xs font-bold text-gray-900">61%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                  <div className="h-full w-[61%] rounded-full bg-[#F7D85A]" />
                </div>
              </div>
            </div>
          </div>

          {/* RECENT ACTIVITY TIMELINE */}
          <div className="rounded-3xl border border-gray-100/80 bg-white p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-gray-900">
                  Recent Activity
                </h2>
                <p className="mt-0.5 text-xs text-gray-400">
                  Latest distribution events & logs
                </p>
              </div>

              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
                Today
              </span>
            </div>

            <div className="mt-5 space-y-3">
              {activity.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center justify-between gap-4 rounded-2xl bg-gray-50/70 p-3.5 transition-colors hover:bg-gray-50"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF8D9]">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#F7D85A]" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm font-bold text-gray-800">
                        {item.title}
                      </p>
                      <p className="truncate text-xs text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 text-right">
                    <span className="inline-block rounded-lg bg-emerald-50 px-2 py-0.5 text-xs font-bold text-emerald-700">
                      {item.value}
                    </span>
                    <p className="mt-1 text-[11px] text-gray-400">
                      {item.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
};

export default Distribution;