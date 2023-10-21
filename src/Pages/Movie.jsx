import { useState, useEffect } from "react";
import axios from "axios"; // Import axios for API requests
import Banner from "../Components/Banner/Index";
import Category from "../Components/Category/Index";
import Nav from "../Components/Nav/Index";
import Pagination from "../Components/Pagination/Index";
import Footer from "../Components/Footer/Index";
import { Link } from "react-router-dom";

const MoviePage = () => {
  const [movie, setMovie] = useState({ results: [] });
  const [genres, setGenres] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(""); // Add this line
  const [selectedGenreId, setSelectedGenreId] = useState(null);
  const handleGenreSelect = (genreId) => {
    setSelectedGenreId(genreId);
  };

  // Define the itemsPerPage and totalPages based on your data
  const itemsPerPage = 10; // Number of items to display per page
  const totalPages = Math.ceil(movie.total_results / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const searchMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=f8d0dccf140f8bb785d7d9b067b28ce3&query=${searchQuery}`
      )
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.error("Error fetching movie data: ", error);
      });
  };

  useEffect(() => {
    // Fetch the genre data and movie data based on the currentPage
    axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=f8d0dccf140f8bb785d7d9b067b28ce3"
      )
      .then((response) => {
        const genreData = response.data.genres;
        const genreObject = {};
        genreData.forEach((genre) => {
          genreObject[genre.id] = genre.name;
        });
        setGenres(genreObject);
      })
      .catch((error) => {
        console.error("Error fetching genre data: ", error);
      });

    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=f8d0dccf140f8bb785d7d9b067b28ce3&page=${currentPage}&with_genres=${selectedGenreId}`
      )
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.error("Error fetching movie data: ", error);
      });

    axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=f8d0dccf140f8bb785d7d9b067b28ce3"
      )
      .then((response) => {
        const genreData = response.data.genres;
        const genreObject = {};
        genreData.forEach((genre) => {
          genreObject[genre.id] = genre.name;
        });
        setGenres(genreObject);
      })
      .catch((error) => {
        console.error("Error fetching genre data: ", error);
      });

    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=f8d0dccf140f8bb785d7d9b067b28ce3&page=${currentPage}`
      )
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.error("Error fetching movie data: ", error);
      });
  }, [currentPage]);

  const mapGenreNames = (genreIds) => {
    return genreIds.map((genreId) => {
      const genreName = genres[genreId] || "Unknown Genre";
      return genreName;
    });
  };

  return (
    <>
      <Nav onSearch={setSearchQuery} onSearchSubmit={searchMovies} />{" "}
      {/* Pass search functions to Nav */}
      <Banner />
      <Category genres={genres} />
      <div className="mt-10">
        <ul className="grid grid-cols-2 md:grid-cols-5 gap-3 px-10">
          {movie.results &&
            movie.results.length > 0 &&
            movie.results.map((castMember, index) => (
              <li key={index}>
                <div>
                  <Link to={`/detail/${castMember.id}`}>
                    <img
                      src={
                        "https://image.tmdb.org/t/p/w500/" +
                        castMember.poster_path
                      }
                      alt="Movie Poster"
                    />
                  </Link>
                </div>
                <p>{castMember.title}</p>
                <p>{mapGenreNames(castMember.genre_ids).join(", ")}</p>
              </li>
            ))}
        </ul>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={movie.total_pages}
        onPageChange={handlePageChange}
      />{" "}
      {/* Include the Pagination component */} <Footer />
      {/* <div className="mt-96"></div> */}
    </>
  );
};

export default MoviePage;
