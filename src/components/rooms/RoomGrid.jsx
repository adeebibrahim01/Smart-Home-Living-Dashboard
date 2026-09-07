import RoomCard from "./RoomCard";

function RoomGrid({ rooms = [] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {rooms.map((room) => (
        <RoomCard key={room.id} {...room} />
      ))}
    </div>
  );
}

export default RoomGrid;