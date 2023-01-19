import React from "react";

interface ButtonI {
  text: string;
  type: "button" | "submit" | "reset" | undefined;
}

const Button = ({ text, type }: ButtonI) => {
  return (
    <button
      className="rounded text-white font-bold bg-orange-500 px-2 py-1"
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
