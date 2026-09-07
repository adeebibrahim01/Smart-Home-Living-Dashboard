import { useState } from "react";

const links = [
  "Overview",
  "Production",
  "Distribution",
  "Storage",
];

function NavLinks() {
  const [active, setActive] = useState("Overview");

  return (
    <nav className="hidden items-center gap-1.5 md:flex">
      {links.map((link) => {
        const isActive = active === link;

        return (
          <button
            key={link}
            type="button"
            onClick={() => setActive(link)}
            className={[
              "rounded-full px-4 py-2",
              "text-[11px] font-medium",
              "transition-all duration-200",
              "whitespace-nowrap",
              isActive
                ? "bg-white text-[#111111] shadow-[0_2px_10px_rgba(0,0,0,0.025)]"
                : "bg-white/35 text-[#5f5f5f] hover:bg-white/65 hover:text-[#111111]",
            ].join(" ")}
          >
            {link}
          </button>
        );
      })}
    </nav>
  );
}

export default NavLinks;