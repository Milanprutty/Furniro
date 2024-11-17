import { SetStateAction } from "react";
import style from "./Button.module.scss";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  type: string;
  children?: React.ReactNode;
  setCount?: React.Dispatch<SetStateAction<number>>;
  count: number;
}

const Button = ({ type, children, setCount, count, ...rest }: Props) => {
  const handleUpdateCount = (operator: "addition" | "subtraction") => {
    if (setCount) {
      if (operator === "addition") {
        setCount(count + 1);
      } else if (operator === "subtraction" && count > 1) {
        setCount(count - 1);
      }
    }
  };

  return (
    <>
      {type === "count" && (
        <div className={style.container} {...rest}>
          <span onClick={() => handleUpdateCount("subtraction")}>-</span>
          <span style={{ userSelect: "all" }}>{count}</span>
          <span onClick={() => handleUpdateCount("addition")}>+</span>
        </div>
      )}
      {type === "normal" && (
        <div className={style.container2} {...rest}>
          {children}
        </div>
      )}
    </>
  );
};

export default Button;
