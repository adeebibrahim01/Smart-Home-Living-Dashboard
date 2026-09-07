import DashboardShell from "../components/layout/DashboardShell";

const Production = () => {
  return (
    <DashboardShell>
      <div className="grid w-full gap-3">
        {/* HEADER */}
        <div className="flex items-center justify-between">
          <div>
            <p className="mb-1 text-sm font-medium text-gray-500">
              Smart Home
            </p>

            <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
              Production
            </h1>
          </div>

          <div className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-600 shadow-sm">
            Overview
          </div>
        </div>

        {/* STATS */}
        <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Total Production</p>

            <h2 className="mt-3 text-3xl font-semibold text-gray-900">
              1,284
            </h2>

            <p className="mt-2 text-sm text-gray-500">This month</p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Active Units</p>

            <h2 className="mt-3 text-3xl font-semibold text-gray-900">
              86
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Currently running
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Efficiency</p>

            <h2 className="mt-3 text-3xl font-semibold text-gray-900">
              94.8%
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Overall performance
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Energy Usage</p>

            <h2 className="mt-3 text-3xl font-semibold text-gray-900">
              428 kWh
            </h2>

            <p className="mt-2 text-sm text-gray-500">Today</p>
          </div>
        </div>

        {/* PRODUCTION OVERVIEW */}
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Production Overview
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Production activity for the current period
              </p>
            </div>

            <span className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600">
              Last 7 days
            </span>
          </div>

          {/* CHART */}
          <div className="flex h-64 items-end gap-3 border-b border-gray-100 bg-white">
            {[45, 62, 54, 78, 68, 88, 72].map((height, index) => (
              <div
                key={index}
                className="flex h-full flex-1 items-end"
              >
                <div
                  className="w-full rounded-t-2xl bg-[#F7D85A] transition-all"
                  style={{ height: `${height}%` }}
                />
              </div>
            ))}
          </div>

          <div className="mt-4 flex justify-between text-xs text-gray-400">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
        </div>

        {/* BOTTOM CARDS */}
        <div className="grid min-w-0 grid-cols-1 gap-3 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">
              Production Status
            </h2>

            <div className="mt-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">
                  Living Room
                </span>

                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                  Active
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">
                  Kitchen
                </span>

                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                  Active
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">
                  Bedroom
                </span>

                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500">
                  Idle
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-gray-900 p-6 text-white shadow-sm">
            <p className="text-sm text-gray-400">
              Today's Summary
            </p>

            <h2 className="mt-3 text-3xl font-semibold">
              182 units
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              Production completed successfully today.
            </p>

            <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[78%] rounded-full bg-white" />
            </div>

            <p className="mt-2 text-xs text-gray-400">
              78% of daily target
            </p>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
};

export default Production;