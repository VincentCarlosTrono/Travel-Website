import React from "react";
import Place1 from "../Media/img/place1.jpg";
import Place2 from "../Media/img/place2.jpg";
import Place3 from "../Media/img/place3.jpg";
import Place4 from "../Media/img/place4.jpg";
import Place5 from "../Media/img/place5.jpg";

const Places = () => {
  const PlaceCards = [
    {
      image: Place1,
      name: "Bali",
      location: "Indonesia",
      price: "$2499",
    },
    {
      image: Place2,
      name: "Bora Bora",
      location: "Polinesia",
      price: "$1599",
    },
    {
      image: Place3,
      name: "Hawaii",
      location: "EEUU",
      price: "$3499",
    },
    {
      image: Place4,
      name: "Whitehaven",
      location: "Australia",
      price: "$2499",
    },
    {
      image: Place5,
      name: "Hvar",
      location: "Croacia",
      price: "$1999",
    },
  ];

  return (
    <div className="grid-container" id="place">
      <div className="container">
        <div className="">
          <div>
            {PlaceCards.map((PlaceCard: any) => {
              const { image, name, location, price } = PlaceCard;
              return (
                <div>
                  <img src={image} alt="placeimages" />
                  <h1>{name}</h1>
                  <p>{location}</p>
                  <h2>{price}</h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Places;
