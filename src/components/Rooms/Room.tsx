import "./Rooms.scss";

interface Props {
  image: string;
  description: string;
}

const Room = ({ image, description }: Props) => {
  return (
    <div className="room">
      <img className="room__image" src={image} alt="room image" />
      <div className="room__description">{description}</div>
    </div>
  );
};

export default Room;
