"use client";

import useTheme from "@/hooks/use-theme";
import Image from "next/image";
import React, { useState } from "react";
import { LineMdSunnyOutlineToMoonAltLoopTransition } from "../material/ToggleIcon";
import { LineMdMoonAltToSunnyOutlineLoopTransition } from "../material/ToggleIcon2";
import { Icon } from "@iconify/react/dist/iconify.cjs";

const HeaderNav = () => {
  const { isLightTheme, toggleTheme } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col items-center m-5">
      <div>
        <div className="relative">
          <Image
            id="Header"
            draggable="false"
            src={isLightTheme ? "/image3.png" : "/image4.png"}
            alt={isLightTheme ? "headerlight" : "headerdark"}
            width={1000}
            height={400}
            className={`rounded-sm h-auto mb-1 md:mb-2 border-2 pointer-events-none ${
              isLightTheme ? "border-black" : "border-gray-200"
            }`}
          />
          <div className="absolute top-0 left-0 w-full h-full"></div>
        </div>

        <nav
          className={`${
            isLightTheme ? "border-black" : "border-white"
          } hidden sm:flex flex-row border-b-2 md:border-b-4 pb-1 md:pb-4 space-x-0 sm:space-x-4 justify-center text-center w-full`}
        >
          <ul className="flex flex-col sm:flex-row gap-2 sm:gap-12 md:gap-16 text-lg md:text-2xl">
            <li>
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link" href="#home">
                Blog
              </a>
            </li>
            <li>
              <a className="nav-link" href="#home">
                Progress-Reports
              </a>
            </li>
            <li>
              <a className="nav-link" href="#home">
                About
              </a>
            </li>
            <li>
              <button onClick={toggleTheme} className="focus:outline-none">
                {isLightTheme ? (
                  <LineMdMoonAltToSunnyOutlineLoopTransition />
                ) : (
                  <LineMdSunnyOutlineToMoonAltLoopTransition />
                )}
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex">
        <div
          id="sidebarButton"
          className={`fixed left-0 top-[40%] w-auto h-auto mx-5 p-2 ${
            isLightTheme
              ? "bg-gray-100 border-black"
              : "bg-gray-900 border-white"
          } rounded-md border sm:hidden`}
        >
          <div className="flex flex-col gap-2">
            <button onClick={toggleSidebar} className="focus:outline-none">
              <Icon
                icon="cil:hamburger-menu"
                width="1.7rem"
                height="1.7rem"
                style={{ color: isLightTheme ? "black" : "white" }}
              />
            </button>
            <button onClick={toggleTheme} className="focus:outline-none">
              {isLightTheme ? (
                <LineMdMoonAltToSunnyOutlineLoopTransition />
              ) : (
                <LineMdSunnyOutlineToMoonAltLoopTransition />
              )}
            </button>
          </div>
          <div
            id="sidebarMenu"
            className={`fixed top-50 left-0 w-auto h-auto mx-5 transform transition-transform duration-300 ease-in-out ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <ul className="flex flex-col space-y-2 text-lg">
              <li>
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link" href="#home">
                  Blog
                </a>
              </li>
              <li>
                <a className="nav-link" href="#home">
                  Progress-Reports
                </a>
              </li>
              <li>
                <a className="nav-link" href="#home">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
