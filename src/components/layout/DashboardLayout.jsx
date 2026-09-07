import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";

function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-950">
      <div className="flex min-h-screen">
        <Sidebar />

        <div className="flex min-w-0 flex-1 flex-col">
          <Header />

          <main className="flex-1 p-4 sm:p-6 lg:p-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;