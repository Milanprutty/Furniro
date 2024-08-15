import { useState } from "react";
import styles from "./DropDown.module.scss";

interface Props {
  currentOption: number | string;
  classname: string;
  width?: string;
  setCurrentOption: React.Dispatch<React.SetStateAction<number>>;
}

const options = [6, 12, 18];

const DropDown = ({
  currentOption,
  classname,
  width,
  setCurrentOption,
  ...rest
}: Props) => {
  const [clicked, setClicked] = useState<boolean>(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div
      onClick={handleClick}
      {...rest}
      className={`${styles.container} ${styles[classname]}`}
    >
      <div className={styles.currentOption} style={{ width: width }}>
        {currentOption}
      </div>
      <div className={clicked ? `  ${styles.open} ` : `${styles.closed}`}>
        <ul className={styles.list}>
          {options.map((option, i) => {
            return (
              <li
                style={{ width: "100%" }}
                onClick={() => setCurrentOption(option)}
                key={i}
              >
                {option}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default DropDown;
