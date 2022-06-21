import React from "react";
import experience1 from "../Media/img/experience1.jpg";
import experience2 from "../Media/img/experience2.jpg";
import Title from "./Title";

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
    <div className=" py-36">
      <Title title="With Our Experience We Will Serve You" />

      <div>
        <div className="px-96 flex justify-center  gap-10">
          {ExperienceDescriptions.map((ExperienceDescription: any) => {
            const { numbers, text } = ExperienceDescription;
            return (
              <div>
                <h1 className="text-green2 text-4xl py-3 dark:text-green4">
                  {numbers}
                </h1>
                <p className=" text-xl text-green3">{text}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="py-14 relative ">
        <div className="flex justify-center overflow-hidden">
          <img
            src={experience1}
            alt="experience1Image"
            className="hover:scale-110 cursor-pointer "
          />
        </div>
        <div className="absolute right-44 bottom-0 overflow-hidden">
          <img
            src={experience2}
            alt="experience2Image"
            className="h-80 hover:scale-110 cursor-pointer "
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
