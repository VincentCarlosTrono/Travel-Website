import React from "react";
import Button from "./Button";

const Subscription = () => {
  return (
    <div className="bg-green1 text-center p-16">
      <h1 className="text-4xl px-96 text-white font-semibold">
        Subscribe Our Newsletter
      </h1>
      <p className="py-16 text-xl text-white">
        Subscribe to our newsletter and get a special 30% discount.
      </p>
      <div className="flex justify-center">
        <div className="bg-white p-2 max-w-xl">
          <input
            className="max-w-full p-5"
            type="text"
            placeholder="Enter Email"
          />
          <Button title="Subscribe" />
        </div>
      </div>
    </div>
  );
};

export default Subscription;
