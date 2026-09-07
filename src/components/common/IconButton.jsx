function IconButton({
  icon: Icon,
  label,
  onClick,
  className = "",
  size = "md",
}) {
  const sizes = {
    sm: "h-9 w-9",
    md: "h-10 w-10",
    lg: "h-12 w-12",
  };

  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-full transition-all duration-200 hover:bg-black/5 active:scale-95 ${sizes[size]} ${className}`}
    >
      <Icon size={20} strokeWidth={1.8} />
    </button>
  );
}

export default IconButton;