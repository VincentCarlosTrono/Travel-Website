import React from "react";
import Button from "./Button";
import Home2 from "../Media/img/home2.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="grid-container bg-home" id="/">
      <div className="container flex items-center text-white relative">
        <div>
          <p className="font-semibold text-2xl">Discover your place</p>

          <h1 className="text-7xl max-w-lg leading-tight ">
            Explore The Best
            <span className="font-bold"> Beautiful Beaches</span>
          </h1>

          <div className="my-12">
            <Link to="/discover">
              <Button title="Explore" />
            </Link>
          </div>
          <div className="flex pt-8 gap-12">
            <div className="hover:opacity-100 opacity-50 cursor-pointer hover:-translate-y-1">
              <box-icon color="white" name="facebook-square" type="logo" />
            </div>
            <div className="hover:opacity-100 opacity-50 cursor-pointer hover:-translate-y-1">
              <box-icon color="white" name="instagram-alt" type="logo" />
            </div>
            <div className="hover:opacity-100 opacity-50 cursor-pointer hover:-translate-y-1">
              <box-icon color="white" name="twitter" type="logo" />
            </div>
          </div>
        </div>
        <div className="flex absolute bottom-20 right-0 justify-between items-center  h-44 max-w-sm p-5 bg-green1 ">
          <div className="w-2/5">
            <h1 className="max-w-7rem font-bold">5 best places to visit</h1>
            <Link to="/discover">
              <button className="flex py-3 hover:gap-5 px-1 gap-2 items-center">
                More <box-icon color="white" name="right-arrow-alt" />
              </button>
            </Link>
          </div>
          <div className="w-3/5 overflow-hidden">
            <img src={Home2} alt="HomeImage2" className="hover:scale-125" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
