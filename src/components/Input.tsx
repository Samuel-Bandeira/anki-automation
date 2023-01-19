import React from "react";

interface InputI {
  key: number;
  type: string;
}

const Input = ({ type }: InputI) => {
  return <input type={type} className="mb-2 border border-black" />;
};

export default Input;
