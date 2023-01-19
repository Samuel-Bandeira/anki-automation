import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface InputI {
  index: number;
  type: string;
  register: UseFormRegister<FieldValues>;
}

const Input = ({ index, type, register }: InputI) => {
  return (
    <input
      type={type}
      className="mb-2 border border-black"
      {...register(`sentence-${String(index + 1).padStart(2, "0")}`)}
    />
  );
};

export default Input;
