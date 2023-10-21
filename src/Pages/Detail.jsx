import Nav from "../Components/Nav/Index";
import Footer from "../Components/Footer/Index";
import { getDetailMovie } from "../Services/product.service";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
const Detail = () => {
  const { id } = useParams();
  const [movie, SetMovie] = useState({});
  useEffect(() => {
    getDetailMovie(id, (data) => {
      SetMovie(data);
    });
    console.log(movie);
  }, [id]);
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  const formatNumber = (number) => {
    if (typeof number === "number" && !isNaN(number)) {
      if (number >= 1e9) {
        const billionValue = number / 1e9;
        return billionValue % 1 === 0
          ? billionValue.toFixed(0) + " billion"
          : billionValue.toFixed(2) + " billion";
      } else if (number >= 1e6) {
        const millionValue = number / 1e6;
        return millionValue % 1 === 0
          ? millionValue.toFixed(0) + " million"
          : millionValue.toFixed(2) + " million";
      }
    }

    // Handle the case when the number is not a valid number
    return "N/A"; // You can replace this with a different message or value
  };
  return (
    <>
      <Nav />
      <div className="relative">
        {/* <div className="bg-black/30 md:bg-black/30 w-full absolute h-36 md:h-[560px]" /> */}
        {Object.keys(movie).length > 0 && (
          <div className="absolute pl-4 md:pl-10 mt-10 md:mt-20 z-10">
            <h1 className="text-white text-4xl font-bold md:text-6xl">
              {movie.title}
            </h1>
            <div className="flex space-x-40">
              <div className="w-5 md:w-10 flex">
                <img src="/assets/icon/Star 1.png" alt="" />
                <img src="/assets/icon/Star 1.png" alt="" />
                <img src="/assets/icon/Star 1.png" alt="" />
                <img src="/assets/icon/Star 1.png" alt="" />
                <img src="/assets/icon/Star 5.png" alt="" />
              </div>
              <div>
                <h1 className="text-white  text-lg font-semibold">
                  {movie.popularity}
                </h1>
              </div>
            </div>

            <div className="w-fit ">
              <h1 className="text-white font-semibold md:text-2xl">
                {movie.overview}
              </h1>
            </div>
            <div className="md:flex mt-2 space-y-3 md:space-y-0 md:space-x-5">
              <div>
                <button className="bg-primary md:py-3 p-3 md:px-10 text-white rounded-lg font-bold text-2xl">
                  Watch Trailer
                </button>
              </div>
              <div>
                <button className="border-2 border-white py-3 px-10 text-white rounded-lg font-bold text-2xl">
                  Add to Watchlist
                </button>
              </div>
            </div>
          </div>
        )}
        ;
        <div className="brightness-50 ">
          <img
            src={"https://image.tmdb.org/t/p/w500/" + movie.backdrop_path}
            className="bg-cover h-96 w-full"
            alt=""
          />
        </div>
        <div className="flex md:pl-16 text-xl mt-5">
          <a
            href=""
            className="hover:bg-secondary rounded-full py-2 px-5 hover:font-bold hover:text-white"
          >
            Overview
          </a>
          <a
            href=""
            className="hover:bg-secondary rounded-full py-2 px-5 hover:font-bold hover:text-white"
          >
            Characters
          </a>
          <a
            href=""
            className="hover:bg-secondary rounded-full py-2 px-5 hover:font-bold hover:text-white"
          >
            Review
          </a>
        </div>
        <div className="flex  pl-3 md:pl-16 items-center justify-between">
          <h1 className="font-bold text-4xl w-60 shadow-sm">Synopsis</h1>
          <hr className="border border-slate-500 w-full ml-12 mr-16 my-4" />
        </div>
        <div className=" pl-3 md:pl-16 text-2xl w-fit    mt-2">
          <h1>{movie.overview}</h1>
        </div>
        <div className="flex  pl-3 md:pl-16 items-center justify-between">
          <h1 className="font-bold text-4xl w-72 shadow-sm">Movie Info</h1>
          <hr className="border border-slate-500 w-full ml-5 mr-16 my-4" />
        </div>
        <div className=" pl-3 md:pl-16 text-2xl w-[1400px] mt-10">
          <ul>
            <li>
              <b>Release Date :</b> {formatDate(movie.release_date)}
            </li>
            <li>
              <b>Language :</b> {movie.original_language}
            </li>
            <li>
              <b>Pupularity :</b> {movie.popularity}
            </li>
            <li>
              <b>Budget :</b> {formatNumber(movie.budget)}
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Detail;
