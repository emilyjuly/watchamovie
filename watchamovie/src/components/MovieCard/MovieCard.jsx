import React from "react";
import { FaStar } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

import "./styles.css";

const MovieCard = ({ movie, showLink = true }) => {
  return (
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <h2>{movie.title}</h2>
      <p>
        <FaStar className="star-icon" />
        {movie.vote_average}
      </p>
      {showLink && (
        <Link to={`/movie/${movie.id}`} className="details">
          See details
          <div className="icon">
            <AiOutlineArrowRight className="svg" />
          </div>
        </Link>
      )}
    </div>
  );
};

export default MovieCard;
