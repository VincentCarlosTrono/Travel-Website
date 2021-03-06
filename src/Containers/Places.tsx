import React from "react";
import Button from "src/Components/Button";
import Title from "src/Components/Title";
import Place1 from "../Media/img/place1.jpg";
import Place2 from "../Media/img/place2.jpg";
import Place3 from "../Media/img/place3.jpg";
import Place4 from "../Media/img/place4.jpg";
import Place5 from "../Media/img/place5.jpg";
import { PlaceCardInterface } from "src/types";

const Places = () => {
  const PlaceCards = [
    {
      image: Place1,
      name: "Bali",
      location: "Indonesia",
      price: "$2499",
      favorite: "4,8",
    },
    {
      image: Place2,
      name: "Bora Bora",
      location: "Polinesia",
      price: "$1599",
      favorite: "5,0",
    },
    {
      image: Place3,
      name: "Hawaii",
      location: "EE.UU",
      price: "$3499",
      favorite: "4,9",
    },
    {
      image: Place4,
      name: "Whitehaven",
      location: "Australia",
      price: "$2499",
      favorite: "4,8",
    },
    {
      image: Place5,
      name: "Hvar",
      location: "Croacia",
      price: "$1999",
      favorite: "4,8",
    },
  ];

  return (
    <div className="grid-container justify-between paddingY" id="place">
      <div className="container">
        <Title title="Choose Your Place" />
        <div className="grid-column gap-5 ">
          {PlaceCards.map((PlaceCard: PlaceCardInterface) => {
            const { image, name, location, price, favorite } = PlaceCard;
            return (
              <div className="flex justify-center">
                <div className="relative overflow-hidden ">
                  <img
                    className="cursor-pointer hover:scale-110"
                    src={image}
                    alt="placeimages"
                  />
                  <div className="absolute top-0 right-0 flex items-center font-semibold text-white">
                    <box-icon color="white" name="star" />
                    {favorite}
                  </div>
                  <div className="cards-absolute text-white">
                    <h1 className=" text-3xl py-2 font-semibold">{name}</h1>
                    <p className="text-xl font-semibold">{location}</p>
                    <h2 className="py-3 text-xl font-semibold">{price}</h2>
                  </div>
                  <div className="absolute right-0 bottom-0">
                    <Button
                      title={<box-icon color="white" name="right-arrow-alt" />}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Places;
