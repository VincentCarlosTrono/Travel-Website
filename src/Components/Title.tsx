import React from "react";

const Title = ({ title }) => {
  return (
    <h1 className="py-14 font-semibold text-4xl dark:text-white px-96 text-center">
      {title}
    </h1>
  );
};

export default Title;
