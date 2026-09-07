import DeviceCard from "./DeviceCard";

function DeviceGrid({ devices = [], onToggle }) {
  if (!devices.length) {
    return (
      <div className="rounded-3xl border border-dashed border-neutral-300 p-8 text-center text-sm text-neutral-400">
        No devices available
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {devices.map((device) => (
        <DeviceCard
          key={device.id}
          {...device}
          onToggle={() => onToggle?.(device.id)}
        />
      ))}
    </div>
  );
}

export default DeviceGrid;