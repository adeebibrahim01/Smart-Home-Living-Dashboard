function Card({ children, className = "" }) {
  return (
    <section
      className={`rounded-3xl border border-black/5 bg-white shadow-sm ${className}`}
    >
      {children}
    </section>
  );
}

export default Card;