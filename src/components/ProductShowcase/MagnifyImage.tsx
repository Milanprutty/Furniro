import { useCallback, useState } from "react";
import styles from "./ProductSection.module.scss";
interface Props {
  currentImage: string;
}

const MagnifyImage = ({ currentImage }: Props) => {
  const [cursorPos, setCursorPos] = useState({ x: 50, y: 50 });
  const [imagePos, setImagePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const handleMove = useCallback(
    (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
      if (isHovering) {
        const rect = e.currentTarget.getBoundingClientRect();
        const xPos = e.clientX - rect.left;
        const yPos = e.clientY - rect.top;

        let left = (xPos / rect.width) * 100;
        let top = (yPos / rect.height) * 100;

        left = Math.max(0, Math.min(left, 100));
        top = Math.max(0, Math.min(top, 100));

        setCursorPos({ x: xPos, y: yPos });
        setImagePos({ x: left, y: top });
      }
    },
    [isHovering]
  );

  const handleMouseEnter = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    setIsHovering(true);
    const rect = e.currentTarget.getBoundingClientRect();

    setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });

    const left = ((e.pageX - rect.left) / rect.width) * 100;
    const top = ((e.clientY - rect.top) / rect.height) * 100;
    setImagePos({ x: left, y: top });
  };

  const handleLeave = () => {
    setIsHovering(false);
  };

  return (
    <>
      <img
        className={styles.currentImage}
        src={currentImage}
        alt="current Image"
        onMouseMove={handleMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleLeave}
      />
      {isHovering && (
        <div
          className={styles.overlapImg}
          style={{
            backgroundImage: `url(${currentImage})`,
            left: `${cursorPos.x - 90}px`,
            top: `${cursorPos.y - 90}px`,
            backgroundPosition: `${imagePos.x}% ${imagePos.y}%`,
            pointerEvents: "none",
          }}
        ></div>
      )}
    </>
  );
};

export default MagnifyImage;
