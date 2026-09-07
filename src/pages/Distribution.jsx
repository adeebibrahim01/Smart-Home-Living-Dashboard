import DashboardShell from "../components/layout/DashboardShell";

const Distribution = () => {
  const destinations = [
    {
      name: "Living Room",
      value: "128 kWh",
      percentage: 82,
      status: "Optimal",
    },
    {
      name: "Kitchen",
      value: "94 kWh",
      percentage: 68,
      status: "Optimal",
    },
    {
      name: "Bedroom",
      value: "76 kWh",
      percentage: 54,
      status: "Stable",
    },
    {
      name: "Garage",
      value: "52 kWh",
      percentage: 39,
      status: "Low",
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
      <div className="grid w-full gap-3">
        {/* HEADER */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-1 text-sm font-medium text-gray-500">
              Smart Home
            </p>

            <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
              Distribution
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Monitor and manage energy flow across your home.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#F7D85A]" />

            <span className="text-sm font-medium text-gray-600">
              System online
            </span>
          </div>
        </div>

        {/* MAIN FLOW CARD */}
        <div className="grid min-w-0 gap-3 lg:grid-cols-[1.45fr_0.75fr]">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Live Energy Flow
                </p>

                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900">
                  350 kWh
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Distributed today
                </p>
              </div>

              <div className="rounded-full bg-[#FFF8D9] px-3 py-1.5 text-xs font-medium text-gray-700">
                Live
              </div>
            </div>

            {/* FLOW */}
            <div className="mt-8 flex items-center gap-3">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gray-900 text-white">
                <span className="text-lg font-semibold">P</span>
              </div>

              <div className="relative h-1 flex-1 overflow-hidden rounded-full bg-gray-100">
                <div className="absolute left-0 top-0 h-full w-[78%] rounded-full bg-[#F7D85A]" />
              </div>

              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#F7D85A]">
                <span className="text-lg font-semibold text-gray-900">
                  H
                </span>
              </div>
            </div>

            <div className="mt-3 flex justify-between text-xs text-gray-400">
              <span>Power source</span>
              <span>Home network</span>
            </div>

            {/* FLOW METRICS */}
            <div className="mt-8 grid grid-cols-3 gap-3">
              <div className="rounded-2xl bg-[#f7f7f5] p-4">
                <p className="text-xs text-gray-500">Input</p>
                <p className="mt-2 text-lg font-semibold text-gray-900">
                  428 kWh
                </p>
              </div>

              <div className="rounded-2xl bg-[#f7f7f5] p-4">
                <p className="text-xs text-gray-500">Distributed</p>
                <p className="mt-2 text-lg font-semibold text-gray-900">
                  350 kWh
                </p>
              </div>

              <div className="rounded-2xl bg-[#f7f7f5] p-4">
                <p className="text-xs text-gray-500">Loss</p>
                <p className="mt-2 text-lg font-semibold text-gray-900">
                  78 kWh
                </p>
              </div>
            </div>
          </div>

          {/* CAPACITY */}
          <div className="rounded-3xl bg-gray-900 p-6 text-white shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-400">
                Network Capacity
              </p>

              <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs text-gray-300">
                24 routes
              </span>
            </div>

            <div className="mt-8 flex items-end gap-2">
              <span className="text-5xl font-semibold tracking-tight">
                74
              </span>

              <span className="mb-1 text-sm text-gray-400">
                %
              </span>
            </div>

            <p className="mt-2 text-sm text-gray-400">
              Current network utilization
            </p>

            <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[74%] rounded-full bg-[#F7D85A]" />
            </div>

            <div className="mt-3 flex justify-between text-xs text-gray-500">
              <span>0%</span>
              <span>100%</span>
            </div>

            <div className="mt-8 border-t border-white/10 pt-5">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">
                  Available capacity
                </span>

                <span className="text-sm font-medium text-white">
                  26%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* DESTINATIONS */}
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Distribution Zones
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Current energy allocation by room
              </p>
            </div>

            <span className="hidden rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600 sm:block">
              4 active zones
            </span>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {destinations.map((destination) => (
              <div
                key={destination.name}
                className="rounded-2xl bg-[#f7f7f5] p-5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">
                    {destination.name}
                  </span>

                  <span
                    className={`h-2 w-2 rounded-full ${
                      destination.status === "Low"
                        ? "bg-gray-300"
                        : "bg-[#F7D85A]"
                    }`}
                  />
                </div>

                <p className="mt-5 text-2xl font-semibold text-gray-900">
                  {destination.value}
                </p>

                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white">
                  <div
                    className="h-full rounded-full bg-[#F7D85A]"
                    style={{
                      width: `${destination.percentage}%`,
                    }}
                  />
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs text-gray-400">
                    {destination.percentage}% load
                  </span>

                  <span className="text-xs font-medium text-gray-500">
                    {destination.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="grid min-w-0 grid-cols-1 gap-3 lg:grid-cols-[0.9fr_1.1fr]">
          {/* ROUTE STATUS */}
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Route Status
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Distribution network health
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF8D9]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#F7D85A]" />
              </div>
            </div>

            <div className="mt-6 space-y-5">
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm text-gray-600">
                    Primary network
                  </span>

                  <span className="text-xs font-medium text-gray-500">
                    98%
                  </span>
                </div>

                <div className="h-1.5 rounded-full bg-gray-100">
                  <div className="h-full w-[98%] rounded-full bg-[#F7D85A]" />
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm text-gray-600">
                    Secondary network
                  </span>

                  <span className="text-xs font-medium text-gray-500">
                    86%
                  </span>
                </div>

                <div className="h-1.5 rounded-full bg-gray-100">
                  <div className="h-full w-[86%] rounded-full bg-[#F7D85A]" />
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm text-gray-600">
                    Backup network
                  </span>

                  <span className="text-xs font-medium text-gray-500">
                    61%
                  </span>
                </div>

                <div className="h-1.5 rounded-full bg-gray-100">
                  <div className="h-full w-[61%] rounded-full bg-[#F7D85A]" />
                </div>
              </div>
            </div>
          </div>

          {/* RECENT ACTIVITY */}
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Recent Activity
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Latest distribution events
                </p>
              </div>

              <span className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600">
                Today
              </span>
            </div>

            <div className="mt-5 divide-y divide-gray-100">
              {activity.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FFF8D9]">
                      <span className="h-2 w-2 rounded-full bg-[#F7D85A]" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm font-medium text-gray-800">
                        {item.title}
                      </p>

                      <p className="truncate text-xs text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 text-right">
                    <p className="text-sm font-medium text-gray-800">
                      {item.value}
                    </p>

                    <p className="mt-0.5 text-xs text-gray-400">
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