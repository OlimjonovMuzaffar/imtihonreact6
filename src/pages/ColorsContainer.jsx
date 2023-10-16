import React, { useContext, useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa6";
import { useThemeContext } from "../hooks/UseThemContext";

function ColorsContainer() {
  function getLocalStoreg() {
    return localStorage.getItem("theme") || "light";
  }

  const [dark, setDark] = useState(getLocalStoreg());

  useEffect(() => {
    document.documentElement.dataset.theme = dark;
    localStorage.setItem("theme", dark);
  }, [dark]);
  const setMode = () => {
    setDark((prev) => {
      return prev == "light" ? "dark" : "light";
    });
  };

  return (
    <div className=" icons align-element flex justify-between my-10 ">
      <div className="flex items-center gap-3">
        {" "}
        {dark === "light" ? (
          <h1 className="text-black font-mono font-extrabold text-3xl ">
            Movies
          </h1>
        ) : (
          <h1 className="text-white font-mono font-extrabold text-3xl">
            Movies
          </h1>
        )}
      </div>
      <button onClick={setMode} className="text-3xl quyosh">
        {dark === "light" ? (
          <FaMoon className="text-black  " />
        ) : (
          <FaSun className="text-white " />
        )}
      </button>
    </div>
  );
}

export default ColorsContainer;
