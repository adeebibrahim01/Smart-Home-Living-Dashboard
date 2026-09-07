import { ArrowUpRight, DoorOpen } from "lucide-react";
import Card from "../common/Card";
import RemoteImage from "../common/RemoteImage";

function RoomCard({
  name,
  devices = 0,
  temperature,
  image,
}) {
  return (
    <Card className="group relative min-h-48 overflow-hidden p-5">
      {image && (
        <RemoteImage
          src={image}
          alt={`${name} interior`}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      <div className="relative z-10 flex h-full min-h-36 flex-col justify-between text-white">
        <div className="flex items-start justify-between">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md">
            <DoorOpen size={20} />
          </div>

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100">
            <ArrowUpRight size={17} />
          </div>
        </div>

        <div>
          <h3 className="font-semibold">{name}</h3>

          <div className="mt-1 flex items-center gap-2 text-xs text-white/70">
            <span>{devices} devices</span>
            <span>•</span>
            <span>{temperature}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default RoomCard;