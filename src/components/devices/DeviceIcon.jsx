import {
  Lightbulb,
  Fan,
  Tv,
  Lock,
  Thermometer,
  Speaker,
} from "lucide-react";

const icons = {
  light: Lightbulb,
  fan: Fan,
  tv: Tv,
  lock: Lock,
  temperature: Thermometer,
  speaker: Speaker,
};

function DeviceIcon({ type = "light", active = false }) {
  const Icon = icons[type] || Lightbulb;

  return (
    <div
      className={`flex h-11 w-11 items-center justify-center rounded-2xl ${
        active ? "bg-black text-white" : "bg-neutral-100 text-neutral-500"
      }`}
    >
      <Icon size={21} strokeWidth={1.8} />
    </div>
  );
}

export default DeviceIcon;