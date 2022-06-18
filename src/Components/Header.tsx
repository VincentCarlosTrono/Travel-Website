import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const HeaderLists = [
    {
      list: "Home",
      path: "/",
    },

    {
      list: "Discover",
      path: "/discover",
    },
    {
      list: "About",
      path: "/about",
    },
    {
      list: "Place",
      path: "/place",
    },
  ];

  const location = useLocation();

  const isPathnameHome = location.pathname === "/";

  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  }, []);

  return (
    <div
      className={`grid-container fixed w-full top-0 z-10  py-8 text-xl text-white font-semibold ${
        (scroll || !isPathnameHome) && "bg-white text-green1  shadow-md"
      }`}
    >
      <div className="container flex justify-between">
        <Link to="/">
          <h1 className="cursor-pointer font-semibold">Travel</h1>
        </Link>
        <div className="flex gap-4 items-center">
          <ul className="flex gap-16">
            {HeaderLists.map((HeaderList: any) => {
              const { list, path } = HeaderList;
              return (
                <Link to={path}>
                  <li className="hover:border-b-4 cursor-pointer pb-2 ">
                    {list}
                  </li>
                </Link>
              );
            })}
          </ul>
          <div className="cursor-pointer">
            <box-icon
              color={scroll || !isPathnameHome ? "black" : "white"}
              name="moon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
