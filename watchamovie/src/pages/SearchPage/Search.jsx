import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

import apiMovieService from "../../services/apiMovieService";
import CardSearch from "../../components/CardSearch";

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
    <div className="search-page-container">
      <div className="back-container-search">
        <Link to="/" className="back-search">
          <BiArrowBack />
          <p className="query-text-title">
            Results for: <span className="query-text">{query}</span>
          </p>
        </Link>
      </div>

      <div className="movies-container-search">
        {movies.length > 0 ? (
          movies.map((movie) => {
            return <CardSearch movie={movie} key={movie.id} />;
          })
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Search;
