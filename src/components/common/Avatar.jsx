function Avatar({
  src,
  alt = "Profile",
  size = "md",
  className = "",
}) {
  const sizes = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
  };

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={[
        sizes[size] || sizes.md,
        "rounded-full object-cover",
        "ring-2 ring-white",
        className,
      ].join(" ")}
    />
  );
}

export default Avatar;