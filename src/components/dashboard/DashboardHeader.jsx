function DashboardHeader() {
  return (
    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
      <div>
        <p className="text-sm font-medium text-neutral-400">
          Overview
        </p>

        <h2 className="mt-1 text-3xl font-semibold tracking-tight">
          Your home
        </h2>

        <p className="mt-2 max-w-xl text-sm text-neutral-500">
          Monitor and control everything in your smart home from one place.
        </p>
      </div>

      <div className="rounded-full bg-white px-4 py-2 text-sm font-medium shadow-sm">
        All systems normal
      </div>
    </div>
  );
}

export default DashboardHeader;