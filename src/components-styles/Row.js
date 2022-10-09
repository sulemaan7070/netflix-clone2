import React, { useEffect, useState } from "react";

import axios from "../axios";
import "./Row.css";

function Row({ title, fetchUrl, isLargeRow }) {
  const base_url = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchdata() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchdata();
  }, [fetchUrl]);
  console.log(movies);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(
          (movie) =>
            (isLargeRow && movie.poster_path) ||
            (!isLargeRow && movie.backdrop_path && (
              <img
                className={`row__poster ${isLargeRow && `row__posterLarge`}`}
                key={movie.id}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            ))
        )}
      </div>
    </div>
  );
}

export default Row;
