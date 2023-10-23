import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const Category = ({ genres, onGenreSelect, selectedGenreId }) => {
  return (
    <div className="pl-2 md:pl-16">
      <h1 className="font-bold text-2xl font-roboto text-gray mt-4">
        Browse by Category
      </h1>

      <div className="mt-4">
        <Swiper
          spaceBetween={20} // Adjust the spacing between slides
          slidesPerView={4} // Adjust this based on your layout
        >
          {/* Slide for "All" */}
          <SwiperSlide>
            <li
              className={`text-gray2 text-center text-xl font-semibold hover:text-white hover:bg-secondary p-2 rounded-full ${
                selectedGenreId === null ? "bg-secondary text-white" : ""
              }`}
            >
              <a href="#" onClick={() => onGenreSelect(null)}>
                All
              </a>
            </li>
          </SwiperSlide>

          {/* Slides for individual genres */}
          {Object.entries(genres).map(([genreId, genreName]) => (
            <SwiperSlide key={genreId}>
              <li
                className={`text-gray2 text-center  text-xl font-semibold hover:text-white hover:bg-secondary p-2 rounded-full ${
                  selectedGenreId === genreId ? "bg-secondary text-white" : ""
                }`}
              >
                <a href="#" onClick={() => onGenreSelect(genreId)}>
                  {genreName}
                </a>
              </li>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Category;

// export default Category;
