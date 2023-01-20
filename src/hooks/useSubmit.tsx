import React from "react";
import axios from "axios";
import { formValues } from "../interfaces/formValues";

export const useOnSubmit = () => {
  const onSubmit = async (data: formValues) => {
    const response = await axios.post("http://localhost:8080/", data);
    console.log("RESP FROM SERVER", response.data);
  };

  return onSubmit;
};
