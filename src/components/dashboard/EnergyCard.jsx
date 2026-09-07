import { Zap } from "lucide-react";
import Card from "../common/Card";

function EnergyCard({
  usage = 0,
  percentage = 0,
}) {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-neutral-400">Energy usage</p>
          <p className="mt-2 text-3xl font-semibold">{usage} kWh</p>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black text-white">
          <Zap size={20} />
        </div>
      </div>

      <div className="mt-6 h-2 overflow-hidden rounded-full bg-neutral-100">
        <div
          className="h-full rounded-full bg-black transition-all"
          style={{ width: `${Math.min(Math.max(percentage, 0), 100)}%` }}
        />
      </div>

      <div className="mt-3 flex justify-between text-xs text-neutral-400">
        <span>Today</span>
        <span>{percentage}% of average</span>
      </div>
    </Card>
  );
}

export default EnergyCard;