import React from "react";

const Category = ({ genres }) => {
  const genreNames = Object.values(genres);

  return (
    <div className="pl-2 md:pl-16">
      <h1 className="font-bold text-2xl text-slate-400 mt-4">Browse Category</h1>
      <div className="mt-4">
        <ul className="flex flex-wrap gap-4">
          <li className="text-slate-400 text-xl font-semibold hover:text-white hover:bg-secondary p-2 rounded-full">
            <a href="">All</a>
          </li>
          {genreNames.map((genreName, index) => (
            <li
              key={index}
              className="text-slate-400 text-xl font-semibold hover:text-white hover:bg-secondary p-2 rounded-full"
            >
              <a href="">{genreName}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Category;
