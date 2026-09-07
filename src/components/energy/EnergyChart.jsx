function EnergyChart({ values = [] }) {
  const max = Math.max(...values, 1);

  return (
    <div className="flex h-[170px] items-end justify-center gap-3 px-4">
      {values.map((value, index) => {
        const height = `${Math.max((value / max) * 100, 8)}%`;
        const isActive = index === Math.floor(values.length / 2);

        return (
          <div
            key={`${value}-${index}`}
            className="flex h-full flex-1 items-end justify-center"
          >
            <div
              className={[
                "w-full max-w-[28px] rounded-t-[8px] transition-all duration-500",
                isActive
                  ? "bg-[#eda00d] shadow-[0_8px_25px_rgba(237,160,13,0.15)]"
                  : "bg-white/75",
              ].join(" ")}
              style={{ height }}
            />
          </div>
        );
      })}
    </div>
  );
}

export default EnergyChart;