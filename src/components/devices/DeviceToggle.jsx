import Toggle from "../common/Toggle";

function DeviceToggle({ active, onChange, label }) {
  return (
    <Toggle
      checked={active}
      onChange={onChange}
      label={`${label} toggle`}
    />
  );
}

export default DeviceToggle;