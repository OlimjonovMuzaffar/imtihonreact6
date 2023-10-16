import { NavLink, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";


function ReadMore() {
  const id1 = useParams();
  const id = id1.id;
  const { data, isPending, error } = useFetch(
    `https://www.omdbapi.com/?i=${id}&apikey=263d22d8`
  );
  console.log(data);
  if (isPending) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto mt-[100px]  ">
      {data && (
        <div className="card  bg-red-600 readmore lg:card-side  shadow-xl shadow-[black]">
          <figure>
            <img
              className=" readmoreimg ml-7 rounded-lg"
              src={data.Poster}
              alt="Album"
            />
          </figure>
          <div className="card-body gap-y-2">
            <h2 className="text-xl font-sans font-extrabold   ">
              {data.Title}
            </h2>
            <h2 className="text-xl font-sans font-extrabold   ">
              {data.Released}
            </h2>

            <h2 className="text-xl font-sans font-extrabold   ">
              {data.Language}
            </h2>
            <h2 className="text-xl font-sans font-extrabold   ">
              {data.Ratings[0].Value}
            </h2>

            <h2 className="text-xl font-sans font-extrabold  ">
              {data.Country}
            </h2>

            <h2 className="text-xl font-sans font-extrabold  ">
              {data.Runtime}
            </h2>
            <h2 className="text-xl font-sans font-extrabold  ">
              {data.Plot}
            </h2>
            <div className="card-actions justify-end"></div>
          </div>

          <NavLink to="/">
            <button className=" buttton btn btn-neutral">Menu</button>
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default ReadMore;
