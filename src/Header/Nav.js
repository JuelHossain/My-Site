import { HStack } from "@chakra-ui/react";
import React from "react";
import { AiFillHome, AiFillProject } from "react-icons/ai";
import { BiChat } from "react-icons/bi";
import { BsChatLeftTextFill, BsChatSquareDots, BsChatSquareDotsFill, BsFillExclamationSquareFill } from "react-icons/bs";
import { CgEditUnmask } from "react-icons/cg";
import { GrContact } from "react-icons/gr";
import { MdContactPage } from "react-icons/md";
import { NavLink } from "react-router-dom";
import useAdmin from "./../Hooks/useAdmin";
import Logout from "./Logout";
const Nav = ({ small }) => {
  const { status } = useAdmin();
  const pages = [
    {
      name: "Home",
      link: "/",
      icon: <AiFillHome />,
    },
    {
      name: "Skills",
      link: "/skills",
      icon: <CgEditUnmask />,
    },
    {
      name: "Projects",
      link: "/projects",
      icon: <AiFillProject />,
    },
    {
      name: "About",
      link: "/about",
      icon: <BsFillExclamationSquareFill className="text-sm" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <BsChatSquareDotsFill className="text-sm " />,
    },
  ];
  if (small) {
    return (
      <HStack display={["flex", "flex", "none"]} className=" w-full">
        {pages.map((page, index) => (
          <NavLink
            key={index}
            to={page.link}
            className={({ isActive }) =>
              isActive
                ? "bg-yellow-400 shadow-md font-bold py-1 dark:text-zinc-900  flex flex-col items-center sm:flex-row sm:gap-2 flex-1 sm:items-center sm:justify-center"
                : "hover:bg-yellow-400 shadow hover:shadow-md font-bold  py-1 dark:text-zinc-50 dark:hover:text-zinc-900 dark:bg-gray-700 dark:shadow-gray-700 flex flex-col items-center sm:flex-row sm:gap-2 flex-1 sm:items-center sm:justify-center"
            }
          >
            {page.icon}
            <p className="text-[8px] sm:text-sm">{page.name}</p>
          </NavLink>
        ))}
        {status && <Logout />}
      </HStack>
    );
  } else {
    return (
      <HStack display={["none", "none", "flex"]}>
        {pages.map((page, index) => (
          <NavLink
            key={index}
            to={page.link}
            className={({ isActive }) =>
              isActive
                ? "bg-yellow-400 shadow-md font-bold px-3 py-1 dark:text-zinc-900 "
                : "hover:bg-yellow-400 shadow hover:shadow-md font-bold px-3 py-1 dark:text-zinc-50 dark:hover:text-zinc-900 dark:bg-gray-700 dark:shadow-gray-700 dark:hover:bg-yellow-400"
            }
          >
            {page.name}
          </NavLink>
        ))}
        {status && <Logout />}
      </HStack>
    );
  }
};

export default Nav;
