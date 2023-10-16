import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";


function getLocalStoreg() {
  return localStorage.getItem("theme") || "light";
}

function Header() {
  const [dark, setDark] = useState(getLocalStoreg());

  useEffect(() => {
    document.documentElement.dataset.theme = dark;
    localStorage.setItem("theme", dark);
  }, [dark]);
  const setMode = () => {
    setDark((prev) => {
      return prev == "light" ? "coffee" : "light";
    });
  };

  return (
    <div className="bg-red-600 py-5">
      <NavLink to="https://www.netflix.com/uz/">
        <div className="max-w-5xl mx-auto px-4 flex justify-between ">
          <h1 className="text-4xl font-mono font-extrabold mt-12 text-black ">
            Netflix
          </h1>
          <img className="rounded-2xl" src="../imagesLOGO/images.png" alt="" />
        </div>
      </NavLink>
    </div>
  );
}

export default Header;
