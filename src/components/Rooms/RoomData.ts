import room1 from "../../assets/rooms1.png";
import room2 from "../../assets/rooms2.png";
import room3 from "../../assets/rooms3.png";

interface room {
  image: string;
  description: string;
}

export const roomsData: room[] = [
  {
    image: room1,
    description: "Dining",
  },
  {
    image: room2,
    description: "Living",
  },
  {
    image: room3,
    description: "Bedroom",
  },
];
