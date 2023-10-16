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
        <div className="  ml-auto mr-auto mx-auto px-4 flex items-center justify-center ">
          <h1 className="text-4xl font-mono font-extrabold  text-black ">
            Netflix
          </h1>
         
        </div>
      </NavLink>
    </div>
  );
}

export default Header;
