import { Link } from "react-router-dom";

import "./styles.css";

const MovieCard = ({ movie, showLink = true }) => {
    return (
        <Link to={`/movie/${movie.id}`} className="movie-card-link">
            <div className="movie-card">
                <div className="movie-img">
                    <img
                        src={
                            movie.poster_path !== null
                                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                                : `popcorn.png`
                        }
                        alt={movie.title}
                    />
                </div>
            </div>
        </Link>
    );
};

export default MovieCard;
