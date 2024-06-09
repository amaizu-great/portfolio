"use client";
import { useState, useEffect } from "react";
import { HambergerMenu, CloseSquare } from "iconsax-react";

const ResponsiveHeader = () => {
  let [headerActive, setheaderActive] = useState(false);
  let [navbar, setNavBar] = useState<HTMLElement | null>(null);

  useEffect(() => {
    let header = document.getElementsByTagName("header")[0];
    navbar = header;
    setNavBar(navbar);
  }, []);

  //functions
  const toggleHeader = () => {
    if(navbar)
    if(navbar.classList.contains("right-full")){
      navbar.classList.remove("right-full")
      navbar.classList.add("right-0")
    }else{
      navbar.classList.remove("right-0")
      navbar.classList.add("right-full")
    }
    if (headerActive) {
      setheaderActive(false);
    } else {
      setheaderActive(true);
    }
  };

  //components
  const ShowNavBar = () => {
    return (
      <button onClick={toggleHeader} className="z-20">
        <HambergerMenu />
      </button>
    );
  };
  const HideNavBar = () => {
    return (
      <button onClick={toggleHeader} className="z-20">
        <CloseSquare />
      </button>
    );
  };

  return (
    <main className="hidden justify-between text-gray-600 px-[5%] py-4 w-full dark:text-gray-100 dark:bg-[#030712] max-md:flex ">
      <h1 className="font-semibold text-[20px] max-md:text-[18px] max-sm:text-[16px]">
        {"<Great />"}
      </h1>
      {headerActive ? <HideNavBar /> : <ShowNavBar />}
    </main>
  );
};

export default ResponsiveHeader;
