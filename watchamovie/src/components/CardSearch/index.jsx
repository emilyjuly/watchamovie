import { Link } from "react-router-dom";

import "./styles.css";

const CardSearch = ({ movie, showLink = true }) => {
    return (
        <Link to={`/movie/${movie.id}`} className="movie-card-link">
            <div className="movie-card-search">
                <div className="movie-img-search">
                    <img className="backdrop-search"
                        src={
                            movie.poster_path !== null
                                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                                : ``
                        }
                        alt={movie.title}
                    />
                </div>
                <div className="movie-name">
                    <p className="movie-card-title">{movie.title}</p>
                </div>

            </div>
        </Link>
    );
};

export default CardSearch;
