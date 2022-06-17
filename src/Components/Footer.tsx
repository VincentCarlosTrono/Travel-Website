import React from "react";
import Contact from "./Contact";
import Copyright from "./Copyright";

const Footer = () => {
  const FooterIcons = [
    {
      icon: <box-icon name="facebook-square" type="logo" />,
    },
    {
      icon: <box-icon name="twitter" type="logo" />,
    },
    {
      icon: <box-icon name="instagram-alt" type="logo" />,
    },
    {
      icon: <box-icon name="youtube" type="logo" />,
    },
  ];

  return (
    <div className="grid-container py-20 border-t-2 shadow-xl">
      <div className="container">
        <div className="flex justify-between">
          <div>
            <h1 className="text-2xl py-3 font-semibold text-green2">Travel</h1>
            <p className="max-w-xs text-green3 text-xl">
              Travel you choose the destination, we offer you the experience.
            </p>
            <div className="flex py-10 gap-7">
              {FooterIcons.map((FooterIcon: any) => {
                const { icon } = FooterIcon;
                return <div className="flex ">{icon}</div>;
              })}
            </div>
          </div>
          <div>
            <Contact />
          </div>
        </div>
        <div>
          <Copyright />
        </div>
      </div>
    </div>
  );
};

export default Footer;