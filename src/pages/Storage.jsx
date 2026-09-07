import DashboardShell from "../components/layout/DashboardShell";

const Storage = () => {
  const weeklyData = [42, 58, 48, 72, 64, 86, 74];

  return (
    <DashboardShell>
      <div className="grid w-full gap-3">
        {/* HEADER */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-gray-400">
              Energy Center
            </p>

            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              Storage
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#F7D85A]" />
              <span className="text-xs font-medium text-gray-600">
                All systems normal
              </span>
            </div>
          </div>
        </div>

        {/* MAIN STORAGE DISPLAY */}
        <div className="grid min-w-0 gap-3 lg:grid-cols-[1.35fr_0.65fr]">
          {/* ENERGY VAULT */}
          <div className="relative overflow-hidden rounded-3xl bg-white p-7 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Energy Vault
                </p>

                <div className="mt-3 flex items-end gap-2">
                  <span className="text-5xl font-semibold tracking-tight text-gray-900">
                    18.6
                  </span>

                  <span className="mb-2 text-sm text-gray-400">
                    kWh stored
                  </span>
                </div>

                <p className="mt-2 text-sm text-gray-500">
                  82% of total storage capacity
                </p>
              </div>

              <span className="rounded-full bg-[#FFF8D9] px-3 py-1.5 text-xs font-medium text-gray-700">
                82%
              </span>
            </div>

            {/* LARGE STORAGE RING */}
            <div className="mt-8 flex flex-col items-center justify-center">
              <div
                className="relative flex h-52 w-52 items-center justify-center rounded-full"
                style={{
                  background:
                    "conic-gradient(#F7D85A 0deg 295deg, #f1f1ee 295deg 360deg)",
                }}
              >
                <div className="flex h-40 w-40 flex-col items-center justify-center rounded-full bg-white">
                  <span className="text-4xl font-semibold text-gray-900">
                    82%
                  </span>

                  <span className="mt-1 text-xs text-gray-400">
                    charged
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              <div>
                <p className="text-xs text-gray-400">
                  Capacity
                </p>

                <p className="mt-1 text-sm font-semibold text-gray-900">
                  22.7 kWh
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-400">
                  Input
                </p>

                <p className="mt-1 text-sm font-semibold text-gray-900">
                  +3.2 kW
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-400">
                  Output
                </p>

                <p className="mt-1 text-sm font-semibold text-gray-900">
                  1.8 kW
                </p>
              </div>
            </div>
          </div>

          {/* QUICK CONTROL */}
          <div className="rounded-3xl bg-gray-900 p-7 text-white shadow-sm">
            <p className="text-sm text-gray-400">
              Storage Mode
            </p>

            <h2 className="mt-2 text-2xl font-semibold">
              Balanced
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-400">
              Your battery automatically balances charging,
              usage and backup reserve.
            </p>

            <div className="mt-8 space-y-3">
              <div className="flex items-center justify-between rounded-2xl bg-white/5 p-4">
                <div>
                  <p className="text-sm font-medium">
                    Smart charging
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Automatically enabled
                  </p>
                </div>

                <div className="flex h-6 w-10 items-center justify-end rounded-full bg-[#F7D85A] px-1">
                  <span className="h-4 w-4 rounded-full bg-gray-900" />
                </div>
              </div>

              <div className="flex items-center justify-between rounded-2xl bg-white/5 p-4">
                <div>
                  <p className="text-sm font-medium">
                    Backup reserve
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Minimum 30%
                  </p>
                </div>

                <span className="text-sm font-semibold">
                  30%
                </span>
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-xs text-gray-500">
                Estimated backup time
              </p>

              <p className="mt-2 text-3xl font-semibold">
                7h 24m
              </p>
            </div>
          </div>
        </div>

        {/* WEEKLY HISTORY */}
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Storage History
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Average stored energy over the last 7 days
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span className="h-2 w-2 rounded-full bg-[#F7D85A]" />
              Stored energy
            </div>
          </div>

          {/* CHART */}
          <div className="mt-8 flex h-56 items-end gap-3 border-b border-gray-100">
            {weeklyData.map((height, index) => (
              <div
                key={index}
                className="flex h-full flex-1 items-end"
              >
                <div
                  className="w-full rounded-t-xl bg-[#F7D85A] transition-all"
                  style={{ height: `${height}%` }}
                />
              </div>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-7 text-center text-xs text-gray-400">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
        </div>

        {/* LOWER GRID */}
        <div className="grid min-w-0 gap-3 lg:grid-cols-[0.8fr_1.2fr]">
          {/* USAGE SPLIT */}
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">
              Energy Split
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Where stored energy is going
            </p>

            <div className="mt-7 space-y-5">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">
                    Home devices
                  </span>

                  <span className="text-sm font-semibold text-gray-900">
                    48%
                  </span>
                </div>

                <div className="mt-2 h-2 rounded-full bg-gray-100">
                  <div className="h-full w-[48%] rounded-full bg-[#F7D85A]" />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">
                    Climate control
                  </span>

                  <span className="text-sm font-semibold text-gray-900">
                    27%
                  </span>
                </div>

                <div className="mt-2 h-2 rounded-full bg-gray-100">
                  <div className="h-full w-[27%] rounded-full bg-[#F7D85A]" />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">
                    Lighting
                  </span>

                  <span className="text-sm font-semibold text-gray-900">
                    15%
                  </span>
                </div>

                <div className="mt-2 h-2 rounded-full bg-gray-100">
                  <div className="h-full w-[15%] rounded-full bg-[#F7D85A]" />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">
                    Other
                  </span>

                  <span className="text-sm font-semibold text-gray-900">
                    10%
                  </span>
                </div>

                <div className="mt-2 h-2 rounded-full bg-gray-100">
                  <div className="h-full w-[10%] rounded-full bg-[#F7D85A]" />
                </div>
              </div>
            </div>
          </div>

          {/* STORAGE EVENTS */}
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Storage Events
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Latest battery activity
                </p>
              </div>

              <span className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-500">
                Today
              </span>
            </div>

            <div className="mt-6 space-y-1">
              <div className="flex items-center gap-4 rounded-2xl p-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF8D9]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#F7D85A]" />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-800">
                    Battery charging
                  </p>

                  <p className="mt-1 text-xs text-gray-400">
                    Solar energy added to storage
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-800">
                    +4.8 kWh
                  </p>

                  <p className="mt-1 text-xs text-gray-400">
                    09:42
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl p-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-100">
                  <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-800">
                    Energy released
                  </p>

                  <p className="mt-1 text-xs text-gray-400">
                    Home demand supplied by battery
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-800">
                    -2.1 kWh
                  </p>

                  <p className="mt-1 text-xs text-gray-400">
                    08:16
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl p-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF8D9]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#F7D85A]" />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-800">
                    Reserve updated
                  </p>

                  <p className="mt-1 text-xs text-gray-400">
                    Backup threshold adjusted automatically
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-800">
                    30%
                  </p>

                  <p className="mt-1 text-xs text-gray-400">
                    06:48
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
};

export default Storage;