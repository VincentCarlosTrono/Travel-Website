import React from "react";
import { ButtonPropsInterface } from "src/types";

const Button = (props: ButtonPropsInterface) => {
  const { title } = props;

  return (
    <>
      <button className="bg-green1 py-2 md:py-4 px-4 md:px-8 text-sm md:text-lg text-white font-semibold hover:bg-green2 items-center">
        {title}
      </button>
    </>
  );
};

export default Button;
