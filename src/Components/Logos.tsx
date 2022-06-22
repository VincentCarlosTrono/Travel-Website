import React from "react";
import logo1 from "../Media/img/sponsors1.png";
import logo2 from "../Media/img/sponsors2.png";
import logo3 from "../Media/img/sponsors3.png";
import logo4 from "../Media/img/sponsors4.png";
import logo5 from "../Media/img/sponsors5.png";

const Logos = () => {
  const Sponsors = [
    {
      logo: logo1,
    },
    {
      logo: logo2,
    },
    {
      logo: logo3,
    },
    {
      logo: logo4,
    },
    {
      logo: logo5,
    },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-24 py-20  items-center">
      {Sponsors.map((Sponsor: any) => {
        const { logo } = Sponsor;
        return (
          <div className="opacity-50 cursor-pointer hover:opacity-100 ">
            <img src={logo} alt="sponsoorsLogo" />
          </div>
        );
      })}
    </div>
  );
};

export default Logos;
