import React, { useContext, useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa6";



function ColorsContainer() {
 
  const colors = ["#0802A3", "#C70039", "#45FFCA", "#9A3B3B"];
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
    <div className="align-element flex justify-between my-10">
      <button onClick={setMode} className="text-3xl">
        {dark === "light" ? <FaMoon /> : <FaSun />}
      </button>

      <div className="flex items-center gap-3">
        {colors.map((color) => {
          return (
            <span
              style={{ backgroundColor: color }}
              className="h-7 w-7 rounded-full cursor-pointer"
              onClick={() => {
                color;
              }}
            ></span>
          );
        })}
      </div>
    </div>
  );
}

export default ColorsContainer;
