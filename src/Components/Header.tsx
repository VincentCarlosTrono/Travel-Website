import React, { useContext, useEffect, useState } from "react";
import HeaderMobile from "./HeaderMobile";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "src/ContextAPI/ThemeContext";
import { HeaderListInterface } from "src/types";

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

  const { isDarkmode, setIsDarkmode } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

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
        (scroll || !isPathnameHome) &&
        "bg-white dark:bg-darkgreen text-green1 dark:text-green4  shadow-md"
      }`}
    >
      <div className="container flex justify-between">
        <Link to="/">
          <h1 className="cursor-pointer font-semibold">Travel</h1>
        </Link>
        <div className="flex gap-4 items-center">
          <ul className="md:flex gap-16  hidden">
            {HeaderLists.map((HeaderList: HeaderListInterface) => {
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

          <button
            className="md:hidden block"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <box-icon
              color={
                isDarkmode
                  ? isDarkmode && "white"
                  : isPathnameHome
                  ? " white"
                  : "black"
              }
              name="grid-alt"
            ></box-icon>
          </button>
          {isOpen && <HeaderMobile isOpen={isOpen} setIsOpen={setIsOpen} />}
          <button
            onClick={() => {
              setIsDarkmode(!isDarkmode);
            }}
          >
            {isDarkmode ? (
              <div className="cursor-pointer px-3 py-2">
                <box-icon color="white" name="sun" />
              </div>
            ) : (
              <div className="cursor-pointer px-3 py-2">
                <box-icon
                  color={scroll || !isPathnameHome ? "black" : "white"}
                  name="moon"
                />
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
