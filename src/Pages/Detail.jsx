import Nav from "../Components/Nav/Index";
import Footer from "../Components/Footer/Index";
import { getDetailMovie } from "../Services/product.service";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import ScrollToTopButton from "../Components/Top/BacktoTop";

const Detail = () => {
  const [selectedSubmenu, setSelectedSubmenu] = useState("overview");

  const handleSubmenuSelect = (submenu) => {
    setSelectedSubmenu(submenu);
  };

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

    return "N/A";
  };

  // Get Characters
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    const fetchCharacterData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=f8d0dccf140f8bb785d7d9b067b28ce3`
        );
        if (response.ok) {
          const data = await response.json();
          setCharacters(data.cast);
        } else {
          console.error("Failed to fetch character data");
        }
      } catch (error) {
        console.error("Error fetching character data: ", error);
      }
    };

    fetchCharacterData();
  }, [id]);

  const [bestRating, setBestRating] = useState(0); // Initialize the best rating state

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchReviewData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=f8d0dccf140f8bb785d7d9b067b28ce3`
        );
        if (response.ok) {
          const data = await response.json();
          setReviews(data.results);

          // Calculate bestRating based on reviews
          const calculatedBestRating = data.results.reduce(
            (maxRating, review) => {
              return review.author_details.rating > maxRating
                ? review.author_details.rating
                : maxRating;
            },
            0
          );

          // Update the best rating state
          setBestRating(calculatedBestRating);
        } else {
          console.error("Failed to fetch review data");
        }
      } catch (error) {
        console.error("Error fetching review data: ", error);
      }
    };

    fetchReviewData();
  }, [id]);

  useEffect(() => {
    getDetailMovie(id, (data) => {
      SetMovie(data);
    });
  }, [id]);

  return (
    <>
      <Nav />

      <div className="relative ">
        {Object.keys(movie).length > 0 && (
          <div className="absolute space-y-2 md:pt-4 pt-10 md:space-y-10 pl-4 md:pl-10 mt-10 md:mt-20 z-10">
            <h1 className="text-white text-4xl font-bold md:text-6xl">
              {movie.title}
            </h1>
            <div className="flex space-x-40">
              <div className="flex-row flex">
                {Array.from({ length: 10 }, (_, index) => (
                  <img
                    key={index}
                    src="/assets/icon/Star 1.png"
                    alt="star"
                    className="md:w-10 w-6 md:h-10 h-6 mr-1"
                    style={{
                      filter: index < bestRating ? "none" : "grayscale(100%)",
                    }}
                  />
                ))}
              </div>
              <div>
                <h1 className="text-white -ml-24 md:-ml-40  absolute  w-full md:pt-2 text-lg font-semibold">
                  {/* {reviews.length > 0
                      ? Math.max(
                          ...reviews.map(
                            (review) => review.author_details?.rating
                          ),
                          0
                        )
                      : "N/A"}{" "} */}
                  {reviews.length + " Reviews"}
                </h1>
              </div>
            </div>

            <div className="md:w-[1000px] ">
              <h1 className="text-white  md:text-2xl">
                {movie.overview}
              </h1>
            </div>
            <div className="md:flex mt-2 space-y-3 md:space-y-0 md:space-x-5">
              <div>
                <button className="bg-primary hover:scale-110 duration-150 md:py-4 p-3 md:px-10 text-white rounded-lg font-bold text-2xl">
                  Watch Trailer
                </button>
              </div>
              <div>
                <button className="border-2 border-white hover:bg-primary hover:text-white hover:scale-110 duration-150 py-3 px-10 text-white rounded-lg font-bold text-2xl">
                  Add to Watchlist
                </button>
              </div>
            </div>
          </div>
        )}
        
        <div className="brightness-[0.5] ">
          <img
            src={"https://image.tmdb.org/t/p/w500/" + movie.backdrop_path}
            className="bg-cover h-[600px] w-full"
            alt=""
          />
        </div>
        <div className="flex md:pl-16 text-xl mt-5">
          <a
            href="#"
            className={`hover:bg-secondary rounded-full py-2 px-5 hover:font-bold hover:text-white ${
              selectedSubmenu === "overview"
                ? "bg-secondary font-bold text-white"
                : ""
            }`}
            onClick={() => handleSubmenuSelect("overview")}
          >
            Overview
          </a>
          <a
            href="#"
            className={`hover:bg-secondary rounded-full py-2 px-5 hover:font-bold hover:text-white ${
              selectedSubmenu === "characters"
                ? "bg-secondary font-bold text-white"
                : ""
            }`}
            onClick={() => handleSubmenuSelect("characters")}
          >
            Characters
          </a>
          <a
            href="#"
            className={`hover:bg-secondary rounded-full py-2 px-5 hover:font-bold hover:text-white ${
              selectedSubmenu === "review"
                ? "bg-secondary font-bold text-white"
                : ""
            }`}
            onClick={() => handleSubmenuSelect("review")}
          >
            Review
          </a>
        </div>
        {selectedSubmenu === "overview" && (
          <div>
            <div className="flex mt-6 pl-3 md:pl-16 items-center justify-between">
              <div className="w-full">
                <div className="flex items-center justify-center mt-10">
                  <h1 className="font-bold text-4xl w-60 shadow-sm">
                    Synopsis
                  </h1>{" "}
                  <div className="bg-gray2 w-full h-1 rounded-lg ml-16 mr-10"></div>
                </div>
              </div>
            </div>
            <div className=" pl-3 md:pl-16 text-2xl w-fit mt-2">
              <h1>{movie.overview}</h1>
            </div>
            <div className="flex  pl-3 md:pl-16 items-center justify-between">
              <div className="w-full">
                <div className="flex items-center justify-center mt-10">
                  <h1 className="font-bold text-4xl w-60 shadow-sm">
                    Movie Info
                  </h1>{" "}
                  <div className="bg-gray2 w-full h-1 rounded-lg ml-16 mr-10"></div>
                </div>
              </div>
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
            </div>{" "}
          </div>
        )}
        {selectedSubmenu === "characters" && (
          <div className="md:px-24 md:ml-4 mt-10">
            <ul className="grid grid-cols-3 md:grid-cols-8 mx-auto rounded-lg">
              {characters.map((character) => (
                <li
                  key={character.id}
                  className="m-2 hover:scale-110 duration-100 hover:bg-secondary text-center items-center justify-center border-white rounded-xl text-white bg-gradient-to-r from-primary to-secondary shadow-sm p-2"
                >
                  <div>
                    <img
                      src={
                        "https://image.tmdb.org/t/p/w500/" +
                        character.profile_path
                      }
                      alt={character.name}
                      className="w-20 h-20 mx-auto rounded-lg"
                    />
                  </div>
                  <p>{character.name}</p>
                  <p>Role: {character.character}</p>{" "}
                  {/* Display the character's role */}
                </li>
              ))}
            </ul>
          </div>
        )}
        {selectedSubmenu === "review" && (
          <div className="md:px-24  mt-10 px-4 md:flex">
            <ul className=" mx-auto rounded-lg space-y-4 ">
              {reviews.map((review) => (
                <li
                  key={review.id}
                  className="m-2 flex bg-slate-200  p-4 rounded-lg text-lg overflow-auto hover:bg-secondary hover:text-white hover:scale-110 duration-200"
                >
                  <div>
                    <img
                      src={
                        "https://image.tmdb.org/t/p/w500/" +
                        review.author_details.avatar_path
                      }
                      alt={review.username}
                      className="w-full mx-auto"
                    />
                  </div>
                  <div className="ml-4 px-4">
                    <p className="font-semibold text-xl">{review.author}</p>
                    <p>{'"' + review.content + '"'}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <ScrollToTopButton />
      <Footer />
    </>
  );
};

export default Detail;
