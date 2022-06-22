import React from "react";
import Button from "./Button";
import Home2 from "../Media/img/home2.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  const SocMeds = [
    {
      icon: <box-icon color="white" name="facebook-square" type="logo" />,
    },
    {
      icon: <box-icon color="white" name="instagram-alt" type="logo" />,
    },
    {
      icon: <box-icon color="white" name="twitter" type="logo" />,
    },
  ];

  return (
    <div className="grid-container bg-home" id="/">
      <div className="container flex items-center text-white relative">
        <div className="pt-10">
          <p className="font-semibold text-md md:text-2xl">
            Discover your place
          </p>

          <h1 className="text-5xl md:text-7xl max-w-lg leading-tight ">
            Explore The Best
            <span className="font-bold"> Beautiful Beaches</span>
          </h1>

          <div className="my-12">
            <Link to="/discover">
              <Button title="Explore" />
            </Link>
          </div>
          <div className="md:flex md:pt-8 md:gap-12">
            {SocMeds.map(({ icon }) => {
              return (
                <div className="hover:opacity-100 opacity-50 cursor-pointer hover:-translate-y-1">
                  {icon}
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex absolute  bottom-5 md:bottom-20 right-0 justify-between items-center h-28 w-3/4  md:h-44 max-w-sm p-5 bg-green1 ">
          <div className="md:w-2/5">
            <h1 className="md:max-w-7rem  font-bold">5 best places to visit</h1>
            <Link to="/discover">
              <button className="flex py-3 hover:gap-5 px-1 gap-2 items-center">
                More <box-icon color="white" name="right-arrow-alt" />
              </button>
            </Link>
          </div>
          <div className="md:w-3/5 w-40 overflow-hidden">
            <img src={Home2} alt="HomeImage2" className="hover:scale-125" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
