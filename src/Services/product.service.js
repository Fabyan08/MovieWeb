import axios from "axios";

// Ini untuk tampilkan semua product
export const getMovie = (callback) => {
  axios
    .get(
      "https://api.themoviedb.org/3/trending/all/week?api_key=f8d0dccf140f8bb785d7d9b067b28ce3"
    )
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

// Ini untuk detail Movie
export const getDetailMovie = (id, callback) => {
  axios
    .get(
      `https://api.themoviedb.org/3/tv/82856/credits?api_key=f8d0dccf140f8bb785d7d9b067b28ce3/${id}`
    )
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
