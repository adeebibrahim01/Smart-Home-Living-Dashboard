function TemperatureGauge({
  temperature = "16.6°",
  min = "20°",
  max = "35°",
}) {
  return (
    <div className="relative mx-auto h-[215px] w-[215px]">
      <svg
        viewBox="0 0 220 220"
        className="h-full w-full"
      >
        {/* Base gauge */}
        <path
          d="M 35 150 A 82 82 0 1 1 185 150"
          fill="none"
          stroke="#dfe1df"
          strokeWidth="1"
          strokeDasharray="2 8"
          strokeLinecap="round"
        />

        {/* Orange progress */}
        <path
          d="M 35 150 A 82 82 0 0 1 78 77"
          fill="none"
          stroke="#eda00d"
          strokeWidth="2"
          strokeDasharray="2 9"
          strokeLinecap="round"
        />

        {/* Tick marks */}
        {Array.from({ length: 25 }).map((_, index) => {
          const angle = -140 + index * 10;
          const radians = (angle * Math.PI) / 180;

          const x1 = 110 + Math.cos(radians) * 88;
          const y1 = 110 + Math.sin(radians) * 88;

          const x2 = 110 + Math.cos(radians) * 82;
          const y2 = 110 + Math.sin(radians) * 82;

          return (
            <line
              key={index}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={index < 7 ? "#eda00d" : "#bfc1c0"}
              strokeWidth="1"
            />
          );
        })}
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center pt-5">
        <span className="text-[9px] text-[#737373]">
          Cooling to
        </span>

        <span className="mt-1 text-[28px] font-medium tracking-[-0.05em]">
          {temperature}
        </span>

        <span className="mt-1 text-[9px] text-[#737373]">
          Under 12 min
        </span>
      </div>

      <span className="absolute bottom-3 left-3 text-[10px] text-[#686868]">
        {min}
      </span>

      <span className="absolute bottom-3 right-3 text-[10px] text-[#686868]">
        {max}
      </span>

      <button
        type="button"
        aria-label="Decrease temperature"
        className="absolute bottom-1.5 left-1/2 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full bg-white text-[12px] shadow-sm"
      >
        −
      </button>

      <button
        type="button"
        aria-label="Increase temperature"
        className="absolute bottom-1.5 right-1/2 flex h-6 w-6 translate-x-[62px] items-center justify-center rounded-full bg-white text-[12px] shadow-sm"
      >
        +
      </button>
    </div>
  );
}

export default TemperatureGauge;