import React from "react";

const Contact = () => {
  const ContactInfos = [
    {
      title: "About",
      info1: "About Us",
      info2: "Features",
      info3: "New & Blog",
    },
    {
      title: "Company",
      info1: "Team",
      info2: "Plan y Pricing",
      info3: "Become a member",
    },
    {
      title: "Support",
      info1: "FAQs",
      info2: "Support center",
      info3: "Contact Us",
    },
  ];

  return (
    <div className="flex gap-40">
      {ContactInfos.map((ContactInfo: any) => {
        const { title, info1, info2, info3 } = ContactInfo;
        return (
          <div>
            <h1 className="text-2xl py-3 font-semibold text-green2">{title}</h1>
            <div className="max-w-xs text-green3 text-xl">
              <p className="cursor-pointer hover:text-green2">{info1}</p>
              <p className="py-2 cursor-pointer hover:text-green2">{info2}</p>
              <p className="cursor-pointer hover:text-green2">{info3}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Contact;
