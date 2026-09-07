import {
  Cloud,
  CloudLightning,
  CloudRain,
} from "lucide-react";

const iconMap = {
  rain: CloudRain,
  storm: CloudLightning,
  cloud: Cloud,
};

function ForecastGrid({ forecasts = [] }) {
  const items = forecasts.slice(0, 6);

  return (
    <div className="grid grid-cols-3 font-[Inter,sans-serif]">
      {items.map((forecast, index) => {
        const Icon = iconMap[forecast.icon] || Cloud;

        return (
          <div
            key={`${forecast.day}-${index}`}
            className="
              relative
              h-[70px]
              overflow-hidden
              bg-white
              px-[4px]
              pt-[10px]
              pb-[8px]
              border-r
              border-b
              border-[#EEF0F2]
            "
          >
            {/* Day */}
            <span
              className="
                absolute
                left-[4px]
                top-[10px]
                text-[8px]
                font-normal
                leading-[9px]
                tracking-[-0.01em]
                text-[#747474]
              "
            >
              {forecast.day}
            </span>

            {/* Weather icon */}
            <div
              className="
                absolute
                right-[8px]
                top-[7px]
                flex
                h-[24px]
                w-[24px]
                items-center
                justify-center
              "
            >
              <Icon
                size={22}
                strokeWidth={1.25}
                className="text-[#A5A6A7]"
              />
            </div>

            {/* Temperature */}
            <span
              className="
                absolute
                left-[4px]
                bottom-[9px]
                text-[17px]
                font-medium
                leading-[17px]
                tracking-[-0.045em]
                text-[#111111]
              "
            >
              {forecast.temperature}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default ForecastGrid;