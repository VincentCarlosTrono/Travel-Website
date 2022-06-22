import React from "react";
import About1 from "../Media/img/about1.jpg";
import About2 from "../Media/img/about2.jpg";
import Button from "../Components/Button";
import Subscription from "src/Components/Subscription";
import Logos from "src/Components/Logos";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="grid-container paddingY" id="about">
      <div className="container">
        <div className=" md:flex gap-5 items-center justify-between ">
          <div>
            <h1 className="md:text-5xl text-4xl md:max-w-lg dark:text-white ">
              More Information About The Best Beaches
            </h1>

            <p className="md:py-10 py-5 text-sm md:text-md max-w-lg text-green3">
              You can find the most beatiful and pleasant places at the best
              prices with special discounts, you choose the place we will guide
              you all the way to wait, get your place now.
            </p>
            <Link to="/place">
              <Button title="Reserve a place" />
            </Link>
          </div>
          <div className="flex justify-center items-center gap-4 py-8">
            <div className="overflow-hidden my-20">
              <img
                className="hover:scale-110 md:h-2.5 h-40 cursor-pointer "
                src={About1}
                alt="AboutImage1"
              />
            </div>
            <div className="overflow-hidden">
              <img
                className=" hover:scale-110 md:h-1/2 h-32  cursor-pointer "
                src={About2}
                alt="AboutImage2"
              />
            </div>
          </div>
        </div>
        <div className="paddingY">
          <Subscription />
        </div>
        <div>
          <Logos />
        </div>
      </div>
    </div>
  );
};

export default About;
