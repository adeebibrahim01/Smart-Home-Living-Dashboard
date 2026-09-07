function Toggle({ checked = false, onChange, label }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange?.(!checked)}
      className={`
        relative
        h-7
        w-12
        shrink-0
        rounded-full
        p-1
        transition-colors
        duration-200
        ease-out
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-[#F2B91B]/40
        ${checked ? "bg-[#F2B91B]" : "bg-[#E5E5E5]"}
      `}
    >
      <span
        className={`
          block
          h-5
          w-5
          rounded-full
          bg-white
          shadow-[0_1px_4px_rgba(0,0,0,0.12)]
          transition-transform
          duration-200
          ease-out
          ${checked ? "translate-x-5" : "translate-x-0"}
        `}
      />
    </button>
  );
}

export default Toggle;