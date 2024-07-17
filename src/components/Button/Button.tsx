import React from "react";

import "./Button.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, ...rest }: Props) => {
  return (
    <button className="Reusable-Button" {...rest}>
      {children}
    </button>
  );
};

export default Button;
