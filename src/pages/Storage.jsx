import React from "react";
import DashboardShell from "../components/layout/DashboardShell";

const Storage = () => {
  const weeklyData = [
    { day: "Mon", value: 42 },
    { day: "Tue", value: 58 },
    { day: "Wed", value: 48 },
    { day: "Thu", value: 72 },
    { day: "Fri", value: 64 },
    { day: "Sat", value: 86, active: true },
    { day: "Sun", value: 74 },
  ];

  const energySplit = [
    { label: "Home devices", percentage: 48 },
    { label: "Climate control", percentage: 27 },
    { label: "Lighting", percentage: 15 },
    { label: "Other", percentage: 10 },
  ];

  const events = [
    {
      title: "Battery charging",
      desc: "Solar energy added to storage",
      value: "+4.8 kWh",
      time: "09:42",
      type: "plus",
    },
    {
      title: "Energy released",
      desc: "Home demand supplied by battery",
      value: "-2.1 kWh",
      time: "08:16",
      type: "minus",
    },
    {
      title: "Reserve updated",
      desc: "Backup threshold adjusted automatically",
      value: "30%",
      time: "06:48",
      type: "neutral",
    },
  ];

  return (
    <DashboardShell>
      <div className="mx-auto w-full max-w-7xl space-y-6">
        {/* HEADER */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Energy Center
            </p>
            <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Storage
            </h1>
            <p className="mt-1 text-xs text-gray-500">
              Real-time battery status and energy reserve management.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start rounded-full border border-gray-100 bg-white px-4 py-2 shadow-sm sm:self-auto">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F7D85A] opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#F7D85A]"></span>
            </span>
            <span className="text-xs font-semibold text-gray-700">
              All systems normal
            </span>
          </div>
        </div>

        {/* MAIN STORAGE DISPLAY */}
        <div className="grid min-w-0 gap-4 lg:grid-cols-[1.35fr_0.65fr]">
          {/* ENERGY VAULT */}
          <div className="flex flex-col justify-between rounded-3xl border border-gray-100/80 bg-white p-6 shadow-sm sm:p-8">
            <div>
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Energy Vault
                  </span>
                  <div className="mt-2 flex items-baseline gap-2">
                    <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
                      18.6{" "}
                      <span className="text-lg font-normal text-gray-500">
                        kWh
                      </span>
                    </h2>
                  </div>
                  <p className="mt-0.5 text-xs text-gray-400">
                    82% of total storage capacity
                  </p>
                </div>

                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF8D9] px-3.5 py-1.5 text-xs font-bold text-gray-800">
                  <span className="h-2 w-2 rounded-full bg-[#F7D85A] animate-pulse" />
                  82% CHARGED
                </span>
              </div>

              {/* LARGE STORAGE RING */}
              <div className="my-8 flex flex-col items-center justify-center">
                <div
                  className="relative flex h-52 w-52 items-center justify-center rounded-full p-2 transition-transform duration-500 hover:scale-105"
                  style={{
                    background:
                      "conic-gradient(#F7D85A 0deg 295deg, #f1f1ee 295deg 360deg)",
                  }}
                >
                  <div className="flex h-44 w-44 flex-col items-center justify-center rounded-full bg-white shadow-inner">
                    <span className="text-5xl font-black text-gray-900">
                      82<span className="text-2xl font-bold text-[#F7D85A]">%</span>
                    </span>
                    <span className="mt-1 text-xs font-medium uppercase tracking-wider text-gray-400">
                      Battery Level
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* METRICS BOTTOM ROW */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="rounded-2xl bg-[#f7f7f5] p-4 text-center sm:text-left transition-transform hover:-translate-y-0.5">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                  Capacity
                </p>
                <p className="mt-1 text-base font-bold text-gray-900 sm:text-lg">
                  22.7 <span className="text-xs font-normal text-gray-500">kWh</span>
                </p>
              </div>

              <div className="rounded-2xl bg-[#f7f7f5] p-4 text-center sm:text-left transition-transform hover:-translate-y-0.5">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                  Input
                </p>
                <p className="mt-1 text-base font-bold text-emerald-600 sm:text-lg">
                  +3.2 <span className="text-xs font-normal text-gray-500">kW</span>
                </p>
              </div>

              <div className="rounded-2xl bg-[#f7f7f5] p-4 text-center sm:text-left transition-transform hover:-translate-y-0.5">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                  Output
                </p>
                <p className="mt-1 text-base font-bold text-gray-900 sm:text-lg">
                  1.8 <span className="text-xs font-normal text-gray-500">kW</span>
                </p>
              </div>
            </div>
          </div>

          {/* STORAGE MODE (DARK CARD ACCENT) */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-gray-900 p-6 sm:p-8 text-white shadow-xl">
            {/* Background Accent Glow */}
            <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[#F7D85A]/10 blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                  Storage Mode
                </p>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-gray-300 backdrop-blur-md">
                  Auto-Managed
                </span>
              </div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white">
                Balanced
              </h2>

              <p className="mt-2 text-xs leading-relaxed text-gray-400">
                Your battery automatically balances charging, daily usage, and emergency backup reserves.
              </p>

              {/* CONTROLS */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between rounded-2xl bg-white/5 p-4 border border-white/5 transition-all hover:bg-white/10">
                  <div>
                    <p className="text-xs font-semibold text-white">
                      Smart charging
                    </p>
                    <p className="mt-0.5 text-[11px] text-gray-400">
                      Automatically enabled
                    </p>
                  </div>

                  <div className="flex h-6 w-11 items-center justify-end rounded-full bg-[#F7D85A] px-1 shadow-sm">
                    <span className="h-4 w-4 rounded-full bg-gray-900" />
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-2xl bg-white/5 p-4 border border-white/5 transition-all hover:bg-white/10">
                  <div>
                    <p className="text-xs font-semibold text-white">
                      Backup reserve
                    </p>
                    <p className="mt-0.5 text-[11px] text-gray-400">
                      Minimum threshold
                    </p>
                  </div>

                  <span className="rounded-lg bg-amber-400/20 px-2.5 py-1 text-xs font-bold text-[#F7D85A]">
                    30%
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-5">
              <p className="text-xs font-medium text-gray-400">
                Estimated backup time
              </p>
              <div className="mt-1 flex items-baseline justify-between">
                <p className="text-3xl font-extrabold text-white">
                  7h 24m
                </p>
                <span className="text-xs text-gray-400">At current usage</span>
              </div>
            </div>
          </div>
        </div>

        {/* WEEKLY HISTORY CHART */}
        <div className="rounded-3xl border border-gray-100/80 bg-white p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Storage History
              </h2>
              <p className="mt-0.5 text-xs text-gray-400">
                Average stored energy over the last 7 days
              </p>
            </div>

            <div className="flex items-center gap-2 self-start rounded-full bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600 border border-gray-100 sm:self-auto">
              <span className="h-2 w-2 rounded-full bg-[#F7D85A]" />
              Stored energy (kWh)
            </div>
          </div>

          {/* BAR CHART */}
          <div className="mt-8 flex h-56 items-end gap-2.5 sm:gap-4 border-b border-gray-100 pb-2">
            {weeklyData.map((item, index) => (
              <div
                key={index}
                className="group flex h-full flex-1 flex-col justify-end items-center"
              >
                {/* Tooltip value on hover */}
                <span className="mb-2 text-[10px] font-bold text-gray-400 opacity-0 transition-opacity group-hover:opacity-100">
                  {item.value}%
                </span>

                <div
                  className={`w-full rounded-t-xl transition-all duration-300 group-hover:bg-amber-400 ${
                    item.active ? "bg-[#F7D85A] shadow-sm" : "bg-[#f2f2ef]"
                  }`}
                  style={{ height: `${item.value}%` }}
                />
              </div>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-7 text-center text-xs font-semibold text-gray-400">
            {weeklyData.map((item, index) => (
              <span
                key={index}
                className={item.active ? "text-gray-900 font-bold" : ""}
              >
                {item.day}
              </span>
            ))}
          </div>
        </div>

        {/* LOWER GRID */}
        <div className="grid min-w-0 gap-4 lg:grid-cols-[0.85fr_1.15fr]">
          {/* ENERGY SPLIT */}
          <div className="rounded-3xl border border-gray-100/80 bg-white p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900">
              Energy Split
            </h2>
            <p className="mt-0.5 text-xs text-gray-400">
              Where stored energy is being utilized
            </p>

            <div className="mt-6 space-y-5">
              {energySplit.map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-gray-600">{item.label}</span>
                    <span className="text-gray-900">{item.percentage}%</span>
                  </div>

                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-gray-100">
                    <div
                      className="h-full rounded-full bg-[#F7D85A] transition-all duration-500"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* STORAGE EVENTS */}
          <div className="rounded-3xl border border-gray-100/80 bg-white p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Storage Events
                </h2>
                <p className="mt-0.5 text-xs text-gray-400">
                  Latest battery activity & transactions
                </p>
              </div>

              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
                Today
              </span>
            </div>

            <div className="mt-5 space-y-3">
              {events.map((event, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between gap-4 rounded-2xl bg-gray-50/70 p-3.5 transition-colors hover:bg-gray-50"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF8D9]">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#F7D85A]" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm font-bold text-gray-800">
                        {event.title}
                      </p>
                      <p className="truncate text-xs text-gray-400">
                        {event.desc}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 text-right">
                    <span
                      className={`inline-block rounded-lg px-2 py-0.5 text-xs font-bold ${
                        event.type === "plus"
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {event.value}
                    </span>
                    <p className="mt-1 text-[11px] text-gray-400">
                      {event.time}
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

export default Storage;