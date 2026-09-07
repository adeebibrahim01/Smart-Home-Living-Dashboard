function SidebarItem({
  icon: Icon,
  label,
  active = false,
  badge,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all ${
        active
          ? "bg-black text-white"
          : "text-neutral-500 hover:bg-black/5 hover:text-black"
      }`}
    >
      <Icon size={19} strokeWidth={1.8} />

      <span className="flex-1 text-left">{label}</span>

      {badge && (
        <span
          className={`rounded-full px-2 py-0.5 text-[10px] ${
            active ? "bg-white/15 text-white" : "bg-neutral-100"
          }`}
        >
          {badge}
        </span>
      )}
    </button>
  );
}

export default SidebarItem;