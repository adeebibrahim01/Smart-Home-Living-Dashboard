import { ChevronDown } from "lucide-react";

function ProfileMenu() {
  return (
    <button
      type="button"
      className="flex items-center gap-3 rounded-full transition-opacity hover:opacity-80"
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-200 text-sm font-semibold">
        A
      </div>

      <div className="hidden text-left sm:block">
        <p className="text-sm font-medium">Admin</p>
        <p className="text-xs text-neutral-400">Home owner</p>
      </div>

      <ChevronDown size={16} className="hidden sm:block" />
    </button>
  );
}

export default ProfileMenu;