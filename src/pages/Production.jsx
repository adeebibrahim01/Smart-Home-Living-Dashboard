import React, { useState } from "react";
import DashboardShell from "../components/layout/DashboardShell";

const Production = () => {
  const [activeBar, setActiveBar] = useState(5); // Default active bar (e.g., Sat)

  const chartData = [
    { day: "Mon", value: 45, units: "142 units" },
    { day: "Tue", value: 62, units: "198 units" },
    { day: "Wed", value: 54, units: "171 units" },
    { day: "Thu", value: 78, units: "248 units" },
    { day: "Fri", value: 68, units: "216 units" },
    { day: "Sat", value: 88, units: "280 units" },
    { day: "Sun", value: 72, units: "229 units" },
  ];

  return (
    <DashboardShell>
      <div className="mx-auto w-full max-w-7xl space-y-6">
        {/* HEADER */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Smart Home Dashboard
              </p>
            </div>
            <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Production
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-gray-700 shadow-sm hover:bg-gray-50 transition-all">
              <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinecap="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Overview
            </button>
          </div>
        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Card 1 */}
          <div className="group relative overflow-hidden rounded-3xl bg-white p-6 shadow-sm border border-gray-100/80 hover:shadow-md transition-all duration-300">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Total Production</p>
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <div className="mt-4 flex items-baseline gap-2">
              <h2 className="text-3xl font-bold text-gray-900">1,284</h2>
              <span className="text-xs font-semibold text-emerald-600">+12%</span>
            </div>
            <p className="mt-1 text-xs text-gray-400">This month overall output</p>
          </div>

          {/* Card 2 */}
          <div className="group relative overflow-hidden rounded-3xl bg-white p-6 shadow-sm border border-gray-100/80 hover:shadow-md transition-all duration-300">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Active Units</p>
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
              </div>
            </div>
            <div className="mt-4 flex items-baseline gap-2">
              <h2 className="text-3xl font-bold text-gray-900">86</h2>
              <span className="text-xs text-gray-400">/ 100</span>
            </div>
            <p className="mt-1 text-xs text-gray-400">Currently running active systems</p>
          </div>

          {/* Card 3 */}
          <div className="group relative overflow-hidden rounded-3xl bg-white p-6 shadow-sm border border-gray-100/80 hover:shadow-md transition-all duration-300">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Efficiency</p>
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
            <div className="mt-4 flex items-baseline gap-2">
              <h2 className="text-3xl font-bold text-gray-900">94.8%</h2>
              <span className="text-xs font-semibold text-emerald-600">Optimal</span>
            </div>
            <p className="mt-1 text-xs text-gray-400">Overall System Performance</p>
          </div>

          {/* Card 4 */}
          <div className="group relative overflow-hidden rounded-3xl bg-white p-6 shadow-sm border border-gray-100/80 hover:shadow-md transition-all duration-300">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Energy Usage</p>
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                </svg>
              </div>
            </div>
            <div className="mt-4 flex items-baseline gap-2">
              <h2 className="text-3xl font-bold text-gray-900">428 <span className="text-lg font-normal text-gray-500">kWh</span></h2>
            </div>
            <p className="mt-1 text-xs text-gray-400">Consumed today so far</p>
          </div>
        </div>

        {/* PRODUCTION OVERVIEW CHART */}
        <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm border border-gray-100/80">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Production Activity
              </h2>
              <p className="mt-0.5 text-xs text-gray-400">
                Daily output monitoring for the active week
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-2xl bg-gray-50 p-1 border border-gray-100">
              <span className="rounded-xl bg-white px-3 py-1.5 text-xs font-semibold text-gray-800 shadow-sm">
                Last 7 Days
              </span>
              <span className="px-3 py-1.5 text-xs font-medium text-gray-400 cursor-pointer hover:text-gray-600">
                30 Days
              </span>
            </div>
          </div>

          {/* CUSTOM BAR CHART */}
          <div className="relative flex h-64 items-end gap-3 sm:gap-6 pt-8 pb-2">
            {chartData.map((item, index) => {
              const isSelected = activeBar === index;
              return (
                <div
                  key={index}
                  onMouseEnter={() => setActiveBar(index)}
                  className="group relative flex h-full flex-1 flex-col items-center justify-end cursor-pointer"
                >
                  {/* Tooltip on Hover */}
                  {isSelected && (
                    <div className="absolute -top-10 z-10 flex flex-col items-center rounded-xl bg-gray-900 px-2.5 py-1 text-[11px] font-medium text-white shadow-lg animate-fade-in">
                      <span>{item.units}</span>
                      <div className="h-1 w-2 border-x-4 border-t-4 border-x-transparent border-t-gray-900" />
                    </div>
                  )}

                  {/* Bar */}
                  <div
                    className={`w-full max-w-[48px] rounded-2xl transition-all duration-300 ${
                      isSelected
                        ? "bg-[#F7D85A] shadow-md shadow-amber-200/50 scale-105"
                        : "bg-gray-100 hover:bg-amber-100"
                    }`}
                    style={{ height: `${item.value}%` }}
                  />
                  
                  {/* Label */}
                  <span className={`mt-3 text-xs font-medium transition-colors ${
                    isSelected ? "font-bold text-gray-900" : "text-gray-400"
                  }`}>
                    {item.day}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {/* Status Panel */}
          <div className="flex flex-col justify-between rounded-3xl bg-white p-6 sm:p-8 shadow-sm border border-gray-100/80">
            <div>
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-gray-900">
                  Room Activity Status
                </h2>
                <span className="text-xs font-medium text-gray-400">3 Zones</span>
              </div>

              <div className="mt-6 space-y-3">
                {/* Zone 1 */}
                <div className="flex items-center justify-between rounded-2xl bg-gray-50/70 p-3.5 transition-colors hover:bg-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-gray-700 shadow-sm">
                      🛋️
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">Living Room</p>
                      <p className="text-[11px] text-gray-400">Climate & Lighting active</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Active
                  </span>
                </div>

                {/* Zone 2 */}
                <div className="flex items-center justify-between rounded-2xl bg-gray-50/70 p-3.5 transition-colors hover:bg-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-gray-700 shadow-sm">
                      🍳
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">Kitchen</p>
                      <p className="text-[11px] text-gray-400">Ventilation active</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Active
                  </span>
                </div>

                {/* Zone 3 */}
                <div className="flex items-center justify-between rounded-2xl bg-gray-50/70 p-3.5 transition-colors hover:bg-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-gray-700 shadow-sm">
                      🛏️
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">Bedroom</p>
                      <p className="text-[11px] text-gray-400">Standby mode</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-200/60 px-3 py-1 text-xs font-semibold text-gray-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-400" />
                    Idle
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Summary Card (Dark Accent) */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-gray-900 p-6 sm:p-8 text-white shadow-xl">
            {/* Background Glow Effect */}
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#F7D85A]/10 blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                  Daily Goal Progress
                </p>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-gray-300 backdrop-blur-md">
                  Target: 230
                </span>
              </div>

              <div className="mt-6">
                <h2 className="text-4xl font-extrabold tracking-tight">
                  182 <span className="text-xl font-normal text-gray-400">units</span>
                </h2>
                <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                  Production runs smoothly within expected limits today.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <div className="flex justify-between text-xs font-medium text-gray-300 mb-2">
                <span>Progress Completed</span>
                <span className="text-[#F7D85A] font-bold">78%</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-gray-800 p-0.5 border border-white/5">
                <div className="h-full rounded-full bg-[#F7D85A] transition-all duration-500 shadow-sm" style={{ width: "78%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
};

export default Production;