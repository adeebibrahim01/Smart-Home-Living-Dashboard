function RemoteImage({
  src,
  alt = "",
  className = "",
  ...props
}) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={className}
      {...props}
    />
  );
}

export default RemoteImage;