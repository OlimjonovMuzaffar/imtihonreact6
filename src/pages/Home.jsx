import { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import Movies from "./Movies";
import ColorsContainer from "./ColorsContainer";

function Home() {
 
  const [url, setUrl] = useState(
    `https://www.omdbapi.com/?s=fantastic&apikey=263d22d8`
  );
  const [value, setValue] = useState("");
  const { data, isPending, error } = useFetch(url);

  if (isPending) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Error />
      </div>
    );
  }

  const hendilSubmit = (e) => {
    e.preventDefault();
    setUrl(`https://www.omdbapi.com/?s=${value}&apikey=263d22d8`);
  };

  return (
    <div className="max-w-6xl flex  flex-col max-sm:items-center  mx-auto mt-[100px]  ">
      <ColorsContainer />
      
      <div className="flex max-w-full max-sm:items-start max-md:px-5 max-sm:flex-col max-sm:gap-6 mb-5 justify-between">
        <form onSubmit={hendilSubmit}>
          <label className="relative max-sm:w-full">
            <input
              onChange={(e) => {
                setValue(e.target.value);
              }}
              type="text"
              placeholder="Search Movie"
              className="input input-bordered input-error w-full max-w-xs"
            />
          </label>
        </form>

        <h1 className="text-4xl font-mono font-extrabold mt-[-100px] ">
          MOVIES
        </h1>

        <select
          className="select select-error w-full max-w-xs select-lg "
          onChange={(e) => {
            setUrl(
              `https://www.omdbapi.com/?s=${e.target.value}&apikey=263d22d8`
            );
          }}
        >

          <option className="text3-xl font-serif font-bold" value="fantastic">
            fantastic
          </option>
          <option className="text3-xl font-serif font-bold" value="horror">
            horror
          </option>
          <option className="text3-xl font-serif font-bold" value="cartoons">
            cartoons
          </option>
          <option className="text3-xl font-serif font-bold" value="comedy">
            comedy
          </option>
        </select>
      </div>
      {data && <Movies data={data} />}
    </div>
  );
}

export default Home;
