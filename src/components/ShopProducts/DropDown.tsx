import React, { useState } from "react";
import styles from "./DropDown.module.scss";

interface DropDownProps<T> {
  setCurrentOption: React.Dispatch<React.SetStateAction<T>>;
  currentoption: T;
  options: T[];
  width?: string;
}

const DropDown = <T extends string | number>({
  setCurrentOption,
  options,
  ...rest
}: DropDownProps<T>) => {
  const [clicked, setClicked] = useState<boolean>(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleCapture = (event: React.FormEvent<HTMLSelectElement>) => {
    const target = event.target as HTMLSelectElement;
    setCurrentOption(target.value as T);
  };

  return (
    <div onClick={handleClick} {...rest} className={`${styles.container} `}>
      <select onChange={handleCapture}>
        {options.map((option, i) => {
          return (
            <option value={option} style={{ width: "100%" }} key={i}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default DropDown;
