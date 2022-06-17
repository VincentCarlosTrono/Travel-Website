import React from "react";

const Tour = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-3xl">Video Tour</h1>
        <div className="flex justify-center py-12">
          <p className="max-w-lg text-xl text-green3">
            Find out more with our video of the most beautiful and pleasant
            places for you and your family.
          </p>
        </div>
        <video loop autoPlay>
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Tour;
