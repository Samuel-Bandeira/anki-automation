import React from "react";
import { UseFormRegister } from "react-hook-form";
import { formValues } from "../interfaces/formValues";

interface InputI {
  index: number;
  type: string;
  register: UseFormRegister<formValues>;
}

const Input = ({ index, type, register }: InputI) => {
  return (
    <input
      type={type}
      className="mb-2 border border-black"
      {...register(`sentences.${index}.text`)}
    />
  );
};

export default Input;
