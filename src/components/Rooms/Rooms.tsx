import Room from "./Room";
import { roomsData } from "./RoomData";
import "./Rooms.scss";

const Rooms = () => {
  return (
    <div className="rooms-container">
      <div className="rooms__header">Browse The Range</div>
      <div className="rooms__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
      <div className="rooms__mapped">
        {roomsData.map((room, i) => {
          return (
            <Room key={i} description={room.description} image={room.image} />
          );
        })}
      </div>
    </div>
  );
};

export default Rooms;
