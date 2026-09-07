import {
  Home,
  Lightbulb,
  DoorOpen,
  BarChart3,
  Settings,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";
import SidebarItem from "./SidebarItem";

const navigation = [
  {
    label: "Dashboard",
    icon: Home,
  },
  {
    label: "Devices",
    icon: Lightbulb,
    badge: "12",
  },
  {
    label: "Rooms",
    icon: DoorOpen,
  },
  {
    label: "Analytics",
    icon: BarChart3,
  },
];

function Sidebar() {
  const [active, setActive] = useState("Dashboard");

  return (
    <aside className="hidden w-64 shrink-0 border-r border-black/5 bg-white p-5 lg:flex lg:flex-col">
      <div className="mb-10 flex items-center gap-3 px-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-black text-white">
          <Home size={20} />
        </div>

        <div>
          <p className="text-sm font-semibold">Smart Home</p>
          <p className="text-xs text-neutral-400">Living Dashboard</p>
        </div>
      </div>

      <nav className="space-y-1">
        {navigation.map((item) => (
          <SidebarItem
            key={item.label}
            {...item}
            active={active === item.label}
            onClick={() => setActive(item.label)}
          />
        ))}
      </nav>

      <div className="mt-auto space-y-1">
        <SidebarItem
          icon={ShieldCheck}
          label="Security"
          onClick={() => setActive("Security")}
          active={active === "Security"}
        />

        <SidebarItem
          icon={Settings}
          label="Settings"
          onClick={() => setActive("Settings")}
          active={active === "Settings"}
        />
      </div>
    </aside>
  );
}

export default Sidebar;