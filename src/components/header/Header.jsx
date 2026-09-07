import {
  Bell,
  Search,
} from "lucide-react";
import IconButton from "../common/IconButton";
import ProfileMenu from "./ProfileMenu";

function Header() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-black/5 bg-white px-4 sm:px-6 lg:px-8">
      <div>
        <p className="text-xs text-neutral-400">Monday, September 7</p>
        <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">
          Good morning
        </h1>
      </div>

      <div className="flex items-center gap-1 sm:gap-2">
        <IconButton icon={Search} label="Search" />

        <IconButton icon={Bell} label="Notifications" />

        <ProfileMenu />
      </div>
    </header>
  );
}

export default Header;