import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Img.css";

function Movies({ data }) {

  return (
    <ul>
     
      <div className=" card grid grid-cols-3 max-w-[1200px] gap-4 gap-x-10 ">
        {data.Search &&
          data.Search.map((mov) => {
            const { imdbID } = mov;
            return (
              <div key={imdbID} className="card w-96 bg-red-900 shadow-xl h-[600px]">
                <figure className="px-10 pt-10">
                  <NavLink to={`readmore/${imdbID}`}>
                    {""}
                    <img
                      src={mov.Poster}
                      alt="Shoes"
                      className="rounded-xl w-[300px] h-[380px]"
                    />
                  </NavLink>
                </figure>
                <div className="card-body items-center text-center">
                  <h3 className="text-1xl font-mono font-semibold text-white">
                    Title: {mov.Title}
                  </h3>
                  <p className="text-xl font-mono text-white">
                    Type: {mov.Type}
                  </p>
                  <h1 className="text-xl font-mono text-white">
                    Year: {mov.Year}
                  </h1>
                  <p className="text-xl font-mono text-white">{data.Actors}</p>
                </div>
              </div>
            );
          })}
      </div>
    </ul>
  );
}

export default Movies;
