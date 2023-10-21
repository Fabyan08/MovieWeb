import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Detail from "./Pages/Detail";
import MoviePage from "./Pages/Movie";

const router = createBrowserRouter([
  // Array untuk path
  {
    path: "/",
    element: <MoviePage />,
  },
  {
    path: "/movie",
    element: (
      <div>
        <MoviePage />
      </div>
    ),
  },
  {
    path: "/detail/:id",
    element: (
      <div>
        <Detail />
      </div>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
