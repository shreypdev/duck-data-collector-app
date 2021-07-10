import React from "react";
import "./Button.scss";

interface ButtonProps {
  text: string;
  rightIcon?: any;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ text, rightIcon, onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <button className="btn" onClick={handleClick}>
      {text}
      {rightIcon && <span className="right-icon">{rightIcon}</span>}
    </button>
  );
};
