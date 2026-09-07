function GlassCard({
  children,
  className = "",
  hover = false,
  ...props
}) {
  return (
    <section
      className={[
        "rounded-[24px]",
        "border border-white/70",
        "bg-white/65",
        "backdrop-blur-xl",
        "shadow-[0_8px_35px_rgba(0,0,0,0.035)]",
        hover
          ? "transition-all duration-300 hover:bg-white/80 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
          : "",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </section>
  );
}

export default GlassCard;