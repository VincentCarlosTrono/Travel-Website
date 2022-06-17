import React from "react";
import discover1 from "../Media/img/discover1.jpg";
import discover2 from "../Media/img/discover2.jpg";
import discover3 from "../Media/img/discover3.jpg";
import discover4 from "../Media/img/discover4.jpg";
import Experience from "./Experience";
import Tour from "./Tour";

const Discover = () => {
  const DiscoverImages = [
    {
      image: discover1,
      title: "Bali",
      tours: "24 tours available",
    },
    {
      image: discover2,
      title: "Hawaii",
      tours: "15 tours available",
    },
    {
      image: discover3,
      title: "Hvar",
      tours: "18 tours available",
    },
    {
      image: discover4,
      title: "WhiteHaven",
      tours: "32 tours available",
    },
  ];

  return (
    <div className="grid-container pt-16" id="discover">
      <div className="container py-20">
        <div className="text-center text-5xl px-80">
          <h1 className="py-14">Discover The Most Attractive Places</h1>
        </div>

        <div className="grid grid-cols-4 gap-5">
          {DiscoverImages.map((DiscoverImage: any) => {
            const { image, title, tours } = DiscoverImage;
            return (
              <div className="relative overflow-hidden">
                <img
                  src={image}
                  alt="DiscoverImage"
                  className="hover:scale-110 cursor-pointer"
                />

                <div className="absolute  bottom-0 left-0 p-10 text-white">
                  <h1 className="text-4xl font-semibold">{title}</h1>
                  <p>{tours}</p>
                </div>
              </div>
            );
          })}
        </div>
        <Experience />
        <Tour />
      </div>
    </div>
  );
};

export default Discover;
