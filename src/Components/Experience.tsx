import React from "react";
import Title from "./Title";
import experience1 from "../Media/img/experience1.jpg";
import experience2 from "../Media/img/experience2.jpg";
import { ExperienceDescriptionInterface } from "src/types";

const Experience = () => {
  const ExperienceDescriptions = [
    {
      numbers: "20",
      text: "Year Experience",
    },
    {
      numbers: "75",
      text: "Complete Tours",
    },
    {
      numbers: "650+",
      text: "Tourist Destination",
    },
  ];

  return (
    <div className="py-16 md:py-36">
      <Title title="With Our Experience We Will Serve You" />

      <div>
        <div className="md:px-96 px-10 flex justify-center  gap-10">
          {ExperienceDescriptions.map(
            (ExperienceDescription: ExperienceDescriptionInterface) => {
              const { numbers, text } = ExperienceDescription;
              return (
                <div>
                  <h1 className="text-green2 text-4xl py-3 dark:text-green4">
                    {numbers}
                  </h1>
                  <p className=" text-sm md:text-xl text-green3">{text}</p>
                </div>
              );
            }
          )}
        </div>
      </div>
      <div className="md:py-14 py-7 relative ">
        <div className="flex justify-center overflow-hidden">
          <img
            src={experience1}
            alt="experience1Image"
            className="hover:scale-110 cursor-pointer "
          />
        </div>
        <div className="absolute right-0 md:right-44 bottom-5 overflow-hidden">
          <img
            src={experience2}
            alt="experience2Image"
            className="md:h-80 h-52 hover:scale-110 cursor-pointer "
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
