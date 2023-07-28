import React, { useEffect, useState } from "react";
import apiMovieService from "../../services/apiMovieService";
import MovieCard from "../../components/MovieCard/MovieCard";

import "./styles.css";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  const getPopularMovies = async () => {
    const popularMovies = await apiMovieService.getPopularMovies();
    setPopularMovies(popularMovies);
  };

  useEffect(() => {
    getPopularMovies();
  }, []);

  return (
    <div className="container">
      <div className="background-container">
        <div className="stars"></div>
      </div>
      <div className="movies-container">
        {popularMovies.length > 0 ? (
          popularMovies.map((movie) => {
            return <MovieCard movie={movie} key={movie.id} />;
          })
        ) : (
          <p>Carregando...</p>
        )}
      </div>
    </div>
  );
};

export default Home;
