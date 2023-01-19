import React from "react";

interface ButtonI {
  text: string;
}
const Button = ({ text }: ButtonI) => {
  return (
    <button className="rounded text-white font-bold bg-orange-500 px-2 py-1">
      {text}
    </button>
  );
};

export default Button;
