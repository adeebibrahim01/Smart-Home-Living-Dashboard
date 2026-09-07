import {
  Bell,
  Moon,
  Search,
} from "lucide-react";

import IconButton from "../common/IconButton";
import Avatar from "../common/Avatar";

const profileImage =
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=85";

// Preload the static profile image as early as possible.
if (typeof window !== "undefined") {
  const preloadImage = new Image();
  preloadImage.src = profileImage;
}

function HeaderActions() {
  return (
    <div className="flex items-center gap-1.5 sm:gap-2">
      <IconButton
        icon={Search}
        label="Search"
        size="sm"
        className="h-9 w-9 bg-white/45 hover:bg-white/80"
      />

      <IconButton
        icon={Moon}
        label="Dark mode"
        size="sm"
        className="h-9 w-9 bg-white/45 hover:bg-white/80"
      />

      <IconButton
        icon={Bell}
        label="Notifications"
        size="sm"
        className="h-9 w-9 bg-white/45 hover:bg-white/80"
      />

      <div className="ml-1 flex items-center gap-2.5 pl-1">
        <Avatar
          src={profileImage}
          alt="Adeeb Ibrahim"
          size="sm"
        />

        <div className="hidden leading-tight sm:block">
          <p className="text-[11px] font-medium text-[#151515]">
            Adeeb Ibrahim
          </p>

          <p className="mt-0.5 text-[9px] text-[#858585]">
            Frontend developer
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeaderActions;