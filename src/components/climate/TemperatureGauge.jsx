function TemperatureGauge({
  temperature = "16.6°",
  min = "20°",
  max = "35°",
}) {
  const totalTicks = 32;
  const activeTicks = 10; // Highlighted amber ticks

  // Angle calculations for the last active tick pointer arrow
  const pointerAngle = 140 + ((activeTicks - 1) * 260) / (totalTicks - 1);
  const pointerRad = (pointerAngle * Math.PI) / 180;
  const arrowX = 100 + Math.cos(pointerRad) * 85;
  const arrowY = 100 + Math.sin(pointerRad) * 85;

  return (
    <div className="relative mx-auto h-[220px] w-[220px] select-none">
      <svg viewBox="0 0 200 200" className="h-full w-full">
        {/* Background Dashed Arc Outer Ring */}
        <path
          d="M 30 152 A 85 85 0 1 1 170 152"
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="1"
          strokeDasharray="2 5"
        />

        {/* Ticks Array */}
        {Array.from({ length: totalTicks }).map((_, index) => {
          // Arc angles from 140 deg to 400 deg (260 deg total arc)
          const angle = 140 + (index * 260) / (totalTicks - 1);
          const radians = (angle * Math.PI) / 180;

          const isActive = index < activeTicks;
          const rInner = 74;
          const rOuter = 82;

          const x1 = 100 + Math.cos(radians) * rInner;
          const y1 = 100 + Math.sin(radians) * rInner;
          const x2 = 100 + Math.cos(radians) * rOuter;
          const y2 = 100 + Math.sin(radians) * rOuter;

          return (
            <line
              key={index}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={isActive ? "#f59e0b" : "#d1d5db"}
              strokeWidth={isActive ? "2" : "1.2"}
              strokeLinecap="round"
            />
          );
        })}

        {/* Pointer Arrow on Active Line */}
        <g transform={`translate(${arrowX}, ${arrowY}) rotate(${pointerAngle + 90})`}>
          <polygon points="0,0 -3.5,-6 3.5,-6" fill="#f59e0b" />
        </g>
      </svg>

      {/* Center Details */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pb-3">
        <span className="text-[11px] font-normal text-gray-500">
          Cooling to
        </span>

        <span className="my-0.5 text-[32px] font-medium tracking-tight text-gray-900">
          {temperature}
        </span>

        <span className="text-[10px] font-normal text-gray-400">
          Under 12 min
        </span>
      </div>

      {/* Bottom Labels & Buttons (Image Exact Match) */}
      <div className="absolute bottom-1 left-0 right-0 flex items-center justify-between px-2">
        <span className="w-8 text-center text-[12px] font-normal text-gray-600">
          {min}
        </span>

        <button
          type="button"
          aria-label="Decrease temperature"
          className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[14px] font-medium text-gray-600 shadow-sm transition-transform active:scale-95"
        >
          −
        </button>

        <button
          type="button"
          aria-label="Increase temperature"
          className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[14px] font-medium text-gray-600 shadow-sm transition-transform active:scale-95"
        >
          +
        </button>

        <span className="w-8 text-center text-[12px] font-normal text-gray-600">
          {max}
        </span>
      </div>
    </div>
  );
}

export default TemperatureGauge;