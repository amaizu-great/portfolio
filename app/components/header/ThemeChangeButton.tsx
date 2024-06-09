"use client";
import { Sun1, Moon } from "iconsax-react";
import { useState, useEffect } from "react";

const ThemeChangeButton = () => {
  let [theme, setTheme] = useState(true);
  let [parentElement, setParentElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    let element = document.getElementsByTagName("body")[0];
    parentElement = element;
    setParentElement(parentElement);
  }, []);

  //function
  const changeTheme = () => {
    if (parentElement) parentElement.classList.toggle("dark");
    if (theme) {
      setTheme(false);
    } else {
      setTheme(true);
    }
  };

  //components
  const LightTheme = () => {
    return (
      <button className="flex w-full h-fit justify-between">
        <span className="hidden max-md:flex font-light">Switch Theme</span>
        <Sun1 onClick={changeTheme} className="text-gray-100" />
      </button>
    );
  };
  const DarkTheme = () => {
    return (
      <button className="flex w-full h-fit justify-between">
        <span className="hidden max-md:flex font-light">Switch Theme</span>
        <Moon onClick={changeTheme} className="text-gray-600" />
      </button>
    );
  };

  return <>{theme ? <DarkTheme /> : <LightTheme />}</>;
};

export default ThemeChangeButton;
