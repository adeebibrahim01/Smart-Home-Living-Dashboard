import Card from "../common/Card";
import DeviceIcon from "./DeviceIcon";
import DeviceToggle from "./DeviceToggle";

function DeviceCard({
  name,
  room,
  type = "light",
  active = false,
  value,
  onToggle,
}) {
  return (
    <Card className="p-5">
      <div className="flex items-start justify-between gap-4">
        <DeviceIcon type={type} active={active} />

        <DeviceToggle
          active={active}
          onChange={onToggle}
          label={name}
        />
      </div>

      <div className="mt-6">
        <h3 className="font-semibold">{name}</h3>

        <p className="mt-1 text-xs text-neutral-400">
          {room}
        </p>
      </div>

      {value && (
        <p className="mt-4 text-sm font-medium">
          {value}
        </p>
      )}
    </Card>
  );
}

export default DeviceCard;