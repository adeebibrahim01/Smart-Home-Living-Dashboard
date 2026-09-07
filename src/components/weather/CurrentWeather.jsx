import { MapPin } from "lucide-react";

function CurrentWeather({
  location = "Pendleton, Pendleton",
  temperature = "+3°",
}) {
  return (
    <div className="relative h-[158px] font-[Inter,sans-serif]">
      {/* Location */}
      <div className="absolute left-[9px] top-[11px] flex items-center gap-[8px]">
        <MapPin
          size={14}
          strokeWidth={1.5}
          className="text-[#171717]"
        />

        <span className="text-[12px] font-normal leading-[14px] tracking-[-0.015em] text-[#303030]">
          {location}
        </span>
      </div>

      {/* Temperature */}
      <span
        className="
          absolute
          left-[35px]
          top-[69px]
          text-[44px]
          font-medium
          leading-[1]
          tracking-[-0.065em]
          text-[#090909]
        "
      >
        {temperature}
      </span>

      {/* Crescent moon */}
      <div className="absolute left-[157px] top-[69px] h-[52px] w-[52px]">
        <div className="absolute inset-[2px] rounded-full bg-[#F2B91B]" />

        <div className="absolute -right-[1px] -top-[3px] h-[46px] w-[46px] rounded-full bg-[#F7F8FA]" />
      </div>
    </div>
  );
}

export default CurrentWeather;