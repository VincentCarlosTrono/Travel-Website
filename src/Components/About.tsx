import React from "react";
import About1 from "../Media/img/about1.jpg";
import About2 from "../Media/img/about2.jpg";
import Button from "./Button";

const About = () => {
  return (
    <div className="grid-container py-36" id="about">
      <div className="container flex items-center justify-between ">
        <div>
          <h1 className="text-green2 text-5xl max-w-xl">
            More Information About The Best Beaches
          </h1>
          <p className="py-10 text-md max-w-lg text-green3">
            You can find the most beatiful and pleasant places at the best
            prices with special discounts, you choose the place we will guide
            you all the way to wait, get your place now.
          </p>
          <Button title="Reserve a place" />
        </div>
        <div className="flex gap-3 ">
          <div className="overflow-hidden my-20">
            <img
              className="hover:scale-110  cursor-pointer "
              src={About1}
              alt="AboutImage1"
            />
          </div>
          <div className="overflow-hidden">
            <img
              className=" hover:scale-110 cursor-pointer "
              src={About2}
              alt="AboutImage2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
