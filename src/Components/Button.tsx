import React from "react";

const Button = (props: any) => {
  const { title } = props;

  return (
    <>
      <button className="bg-green1 py-4 px-8 text-lg text-white font-semibold hover:bg-green2 items-center">
        {title}
      </button>
    </>
  );
};

export default Button;
