import Brand from "../navigation/Brand";
import NavLinks from "../navigation/NavLinks";
import HeaderActions from "../navigation/HeaderActions";

function TopNavigation() {
  return (
    <header className="relative z-30 flex h-[70px] items-center justify-between gap-4 px-5 sm:px-7 lg:px-8">
      <div className="flex min-w-0 items-center gap-5 lg:gap-8">
        <Brand />
        <NavLinks />
      </div>

      <HeaderActions />
    </header>
  );
}

export default TopNavigation;