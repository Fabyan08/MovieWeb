import { useState, useEffect } from "react";
import axios from "axios";
import Category from "../Components/Category/Index";
import Nav from "../Components/Nav/Index";
import Pagination from "../Components/Pagination/Index";
import Footer from "../Components/Footer/Index";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ScrollToTopButton from "../Components/Top/BacktoTop";

const MoviePage = () => {
  const [movie, setMovie] = useState({ results: [] });
  const [genres, setGenres] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenreId, setSelectedGenreId] = useState(null);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const searchMovies = () => {
    const genreParam = selectedGenreId ? `&with_genres=${selectedGenreId}` : "";
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=f8d0dccf140f8bb785d7d9b067b28ce3&query=${searchQuery}${genreParam}`
      )
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.error("Error fetching movie data: ", error);
      });
  };

  const handleGenreSelect = (genreId) => {
    setSelectedGenreId(genreId);
    setCurrentPage(1);
  };

  useEffect(() => {
    // Fetch genre data
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

    const genreParam = selectedGenreId ? `&with_genres=${selectedGenreId}` : "";
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=f8d0dccf140f8bb785d7d9b067b28ce3&page=${currentPage}${genreParam}`
      )
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.error("Error fetching movie data: ", error);
      });
  }, [currentPage, selectedGenreId]);

  const mapGenreNames = (genreIds) => {
    return genreIds.map((genreId) => {
      const genreName = genres[genreId] || "Unknown Genre";
      return genreName;
    });
  };

  return (
    <>
      <Nav onSearch={setSearchQuery} onSearchSubmit={searchMovies} />
      <Swiper
        className="w-full md:h-[700px] md:w-full"
        spaceBetween={10}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Pagination]}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="w-full">
          <img
            src="/assets/images/banner.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="w-full">
          <img
            src="/assets/images/banner2.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="w-full">
          <img
            src="/assets/images/banner3.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        {/* Add more slides here */}
      </Swiper>

      {/* <Banner /> */}
      <Category
        genres={genres}
        onGenreSelect={handleGenreSelect}
        selectedGenreId={selectedGenreId}
      />
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
      />
     <ScrollToTopButton />
      <Footer />
    </>
  );
};

export default MoviePage;
