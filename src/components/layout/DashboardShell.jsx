import TopNavigation from "./TopNavigation";

function DashboardShell({ children }) {
  return (
    <div className="min-h-screen bg-[#c9c9cb] p-3 sm:p-5 lg:p-7">
      <div
        id="dashboard"
        className={[
          "mx-auto min-h-[calc(100vh-24px)]",
          "max-w-[1450px]",
          "overflow-hidden",
          "rounded-[28px] sm:rounded-[30px]",
          "bg-[#f0efec]",
          "shadow-[0_20px_80px_rgba(0,0,0,0.08)]",
        ].join(" ")}
      >
        <TopNavigation />

        <main className="px-4 pb-4 sm:px-6 sm:pb-6 lg:px-7 lg:pb-7">
          {children}
        </main>
      </div>
    </div>
  );
}

export default DashboardShell;