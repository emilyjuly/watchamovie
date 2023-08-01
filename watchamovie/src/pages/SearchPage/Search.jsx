import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import apiMovieService from "../../services/apiMovieService";
import MovieCard from "../../components/MovieCard/MovieCard";

import "./styles.css";

const Search = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  const getMovies = async () => {
    const movies = await apiMovieService.movieSearch(query);
    setMovies(movies);
  };

  useEffect(() => {
    getMovies();
  }, [query]);

  return (
    <div className="container">
      <h2 className="query-text-title">
        Results for: <span className="query-text">{query}</span>
      </h2>
      <div className="movies-container">
        {movies.length > 0 ? (
          movies.map((movie) => {
            return <MovieCard movie={movie} key={movie.id} />;
          })
        ) : (
          <div className="loader">
            Loading
            <span></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
