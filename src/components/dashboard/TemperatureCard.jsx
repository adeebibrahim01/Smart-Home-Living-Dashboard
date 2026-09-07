import { Thermometer } from "lucide-react";
import Card from "../common/Card";

function TemperatureCard({
  temperature = 24,
  humidity = 45,
}) {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-neutral-400">Temperature</p>

          <p className="mt-2 text-4xl font-semibold">
            {temperature}°
          </p>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-neutral-100">
          <Thermometer size={20} />
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between text-xs text-neutral-400">
        <span>Humidity</span>
        <span className="font-medium text-neutral-700">
          {humidity}%
        </span>
      </div>
    </Card>
  );
}

export default TemperatureCard;