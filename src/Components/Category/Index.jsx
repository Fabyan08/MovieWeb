import React, { useState } from "react";

const Category = ({ genres, onGenreSelect, selectedGenreId }) => {
  return (
    <div className="pl-2 md:pl-16">
      <h1 className="font-bold text-2xl text-slate-400 mt-4">
        Browse Category
      </h1>
      <div className="mt-4">
        <ul className="flex flex-wrap gap-4">
          <li
            className={`text-slate-400 text-xl font-semibold hover:text-white hover:bg-secondary p-2 rounded-full ${
              selectedGenreId === null ? "bg-secondary text-white" : ""
            }`}
          >
            <a href="#" onClick={() => onGenreSelect(null)}>
              All
            </a>
          </li>
          {Object.entries(genres).map(([genreId, genreName]) => (
            <li
              key={genreId}
              className={`text-slate-400 text-xl font-semibold hover:text-white hover:bg-secondary p-2 rounded-full ${
                selectedGenreId === genreId ? "bg-secondary text-white" : ""
              }`}
            >
              <a href="#" onClick={() => onGenreSelect(genreId)}>
                {genreName}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Category;
