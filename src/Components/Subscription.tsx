import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Subscription = () => {
  return (
    <div className="bg-green1 text-center p-16">
      <h1 className="md:text-4xl text-xl md:px-96 text-white font-semibold">
        Subscribe Our Newsletter
      </h1>

      <p className="md:py-16 py-8 text-sm md:text-xl text-white">
        Subscribe to our newsletter and get a special 30% discount.
      </p>

      <div className="flex justify-center">
        <div className="flex items-center bg-white p-0 md:p-2 max-w-xl">
          <input className="p-3" type="text" placeholder="Enter Email" />
          <Link to="/" className="pr-2">
            <Button title="Subscribe" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
