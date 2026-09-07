import {
  Home,
  Lightbulb,
  Settings,
  BarChart3,
} from "lucide-react";

const items = [
  { label: "Home", icon: Home },
  { label: "Devices", icon: Lightbulb },
  { label: "Stats", icon: BarChart3 },
  { label: "Settings", icon: Settings },
];

function MobileNavigation({ active = "Home", onChange }) {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-black/5 bg-white/95 px-4 py-3 backdrop-blur lg:hidden">
      <div className="mx-auto flex max-w-md items-center justify-around">
        {items.map(({ label, icon: Icon }) => {
          const isActive = active === label;

          return (
            <button
              key={label}
              type="button"
              onClick={() => onChange?.(label)}
              className={`flex flex-col items-center gap-1 text-xs ${
                isActive ? "text-black" : "text-neutral-400"
              }`}
            >
              <Icon size={20} />
              <span>{label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

export default MobileNavigation;