import React from "react";

export const useSubmit = () => {
  const onSubmit = (data: object) => {
    console.log(data);
  };

  return onSubmit;
};
