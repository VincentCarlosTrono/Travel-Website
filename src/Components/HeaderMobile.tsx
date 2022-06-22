import React from "react";
import { Link } from "react-router-dom";
import { HeaderListInterface, HeaderPropsInterface } from "src/types";

const HeaderMobile = (props: HeaderPropsInterface) => {
  const { isOpen, setIsOpen } = props;

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

  return (
    <ul
      className="block gap-16 md:hidden absolute top-28 w-1/2 h-screen items-center justify-center p-20  right-0 dark:bg-darkgreen bg-white"
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      {HeaderLists.map((HeaderList: HeaderListInterface) => {
        const { list, path } = HeaderList;
        return (
          <Link to={path}>
            <li className="hover:border-b-4 cursor-pointer py-10 items-center justify-center dark:text-green4 text-black">
              {list}
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

export default HeaderMobile;
