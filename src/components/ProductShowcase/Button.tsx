import { SetStateAction } from "react";
import style from "./Button.module.scss";

// Extending HTMLAttributes for div, not ButtonHTMLAttributes
interface Props extends React.HTMLAttributes<HTMLDivElement> {
  type: "count" | "normal"; // Restrict 'type' to 'count' or 'normal'
  children?: React.ReactNode;
  setCount?: React.Dispatch<SetStateAction<number>>;
  count?: number;
}

const Button = ({ type, children, setCount, count = 1, ...rest }: Props) => {
  const handleUpdateCount = (operator: "addition" | "subtraction") => {
    if (operator === "addition") {
      setCount?.(count + 1); // Use optional chaining
    } else if (operator === "subtraction" && count > 1) {
      setCount?.(count - 1); // Use optional chaining
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
