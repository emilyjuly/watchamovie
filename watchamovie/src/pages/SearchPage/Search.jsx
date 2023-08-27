import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import apiMovieService from "../../services/apiMovieService";
import MovieCard from "../../components/MovieCard/MovieCard";

import "./styles.css";
import { BiArrowBack } from "react-icons/bi";

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
      <div className="back-container">
        <Link to="/" className="back">
          <BiArrowBack />
        </Link>
      </div>
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
            <div className="loader-bar bar-1"></div>
            <div className="loader-bar bar-2"></div>
            <div className="loader-bar bar-3"></div>
            <div className="loader-bar bar-4"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
