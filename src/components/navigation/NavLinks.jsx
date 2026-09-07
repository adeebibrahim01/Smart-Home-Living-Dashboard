import { NavLink } from "react-router-dom";

const links = [
  {
    label: "Overview",
    path: "/",
  },
  {
    label: "Production",
    path: "/production",
  },
  {
    label: "Distribution",
    path: "/distribution",
  },
  {
    label: "Storage",
    path: "/storage",
  },
];

function NavLinks() {
  return (
    <nav className="hidden items-center gap-1.5 md:flex">
      {links.map((link) => (
        <NavLink
          key={link.label}
          to={link.path}
          className={({ isActive }) =>
            [
              "rounded-full px-4 py-2",
              "text-[11px] font-medium",
              "transition-all duration-200",
              "whitespace-nowrap",
              isActive
                ? "bg-white text-[#111111] shadow-[0_2px_10px_rgba(0,0,0,0.025)]"
                : "bg-white/35 text-[#5f5f5f] hover:bg-white/65 hover:text-[#111111]",
            ].join(" ")
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
}

export default NavLinks;