import React, { useState } from "react";
import { NavLink } from "react-router-dom";



function Movies({ data }) {

  return (
    <ul>
      <div className=" card grid grid-cols-3 max-w-[1200px] gap-4 gap-x-10 max-w:grid-cols-1 ">
        {data.Search &&
          data.Search.map((mov) => {
            const { imdbID } = mov;
            return (
              <div
                key={imdbID}
                className="card w-96 bg-red-900  shadow-xl h-[640px]"
              >
                <figure className="px-10 pt-10">
                  <img
                    src={mov.Poster}
                    alt="Shoes"
                    className="rounded-xl w-[300px] h-[380px]"
                  />
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
                  <NavLink to={`readmore/${imdbID}`}>
                    {""}
                    <button className="btn btn-neutral text-white">
                      Read More
                    </button>
                  </NavLink>
                </div>
              </div>
            );
          })}
      </div>
    </ul>
  );
}

export default Movies;
