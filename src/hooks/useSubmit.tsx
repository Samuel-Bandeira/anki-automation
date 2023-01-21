import React from "react";
import axios from "axios";
import { formValues } from "../interfaces/formValues";
import { useNavigate } from "react-router-dom";

export const useOnSubmit = () => {
  const navigate = useNavigate();
  const onSubmit = async (data: formValues) => {
    const response = await axios.post("http://localhost:8080/", data);
    console.log(response);
    navigate("/translate", {
      state: {
        translations: response.data,
      },
    });
  };

  return onSubmit;
};
