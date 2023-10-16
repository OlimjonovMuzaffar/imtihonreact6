import { useParams } from "react-router-dom";
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
        <div className="card w-96 bg-red-600 shadow-xl items-center flex ml-[400px]">
          <div className="card-body">
            <h2 className="text-xl font-sans font-extrabold text-white">
              Title:{" "}
              <span
                className="text-lg font-mono text-white 
            "
              >
                {data.Title}
              </span>
            </h2>
            <h2 className="text-xl font-sans font-extrabold text-white">
              Released:{" "}
              <span
                className="text-lg font-mono text-white 
            "
              >
                {data.Released}
              </span>
            </h2>

            <h2 className="text-xl font-sans font-extrabold text-white">
              Langueage:{" "}
              <span
                className="text-lg font-mono text-white 
            "
              >
                {data.Language}
              </span>
            </h2>
            <h2 className="text-xl font-sans font-extrabold text-white">
              Rating:{" "}
              <span
                className="text-lg font-mono text-white 
            "
              >
                {data.Ratings[0].Value}
              </span>
            </h2>

            <h2 className="text-xl font-sans font-extrabold text-white">
              Country:{" "}
              <span
                className="text-lg font-mono text-white 
            "
              >
                {data.Country}
              </span>
            </h2>

            <h2 className="text-xl font-sans font-extrabold text-white">
              Runtime: {""}
              <span className="text-lg font-mono text-white">
                {data.Runtime}
              </span>
            </h2>
            <p className="text-xl font-sans font-extrabold text-white">
              Plot:
              <span className="text-sm font-mono text-white"> {data.Plot}</span>
            </p>
          </div>
          <figure>
            <img className="rounded mb-5" src={data.Poster} alt="Shoes" />
          </figure>
        </div>
      )}
    </div>
  );
}

export default ReadMore;
