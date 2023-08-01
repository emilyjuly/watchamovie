import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiMovieService from "../../services/apiMovieService";

import "./styles.css";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async () => {
    const movie = await apiMovieService.getOnlyMovie(id);
    setMovie(movie);
  };

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    })
  }

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className="movie-page">
      {movie ? <>
        <img
          src={
            movie.poster_path !== null
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : `\popcorn.png`
          }
          alt={movie.title}
        />
        <h2>{movie.title}</h2>
        <p className="tagLine">{movie.tagLine}</p>
        <div className="info">
          <h3>Orçamento</h3>
          <p>{formatCurrency(movie.budget)}</p>
        </div>
        <div className="info">
          <h3>Receita</h3>
          <p>{formatCurrency(movie.revenue)}</p>
        </div>
        <div className="info">
          <h3>Duração</h3>
          <p>{movie.runtime} min</p>
        </div>
        <div className="info description">
          <h3>Descrição</h3>
          <p>{movie.overview}</p>
        </div>
      </> : <div className="loader">
        <div className="loader-bar bar-1"></div>
        <div className="loader-bar bar-2"></div>
        <div className="loader-bar bar-3"></div>
        <div className="loader-bar bar-4"></div>
      </div>}
    </div>
  )
};

export default Movie;
