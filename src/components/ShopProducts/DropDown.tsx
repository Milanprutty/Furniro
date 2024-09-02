import { useState } from "react";
import styles from "./DropDown.module.scss";

interface DropDownProps<T> {
  setCurrentOption: React.Dispatch<React.SetStateAction<T>>;
  currentOption: T;
  options: T[];
  classname: string;
  width?: string;
}

const DropDown = <T extends string | number>({
  currentOption,
  classname,
  width,
  setCurrentOption,
  options,
  ...rest
}: DropDownProps<T>) => {
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
