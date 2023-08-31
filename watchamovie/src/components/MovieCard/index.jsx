import { Link } from "react-router-dom";
import Avatar from 'react-avatar';
import "./styles.css";

const MovieCard = ({ movie, showLink = true }) => {
    return (
        <Link to={`/movie/${movie.id}`} className="movie-card-link">
            <div className="movie-card">
                <div className="movie-img">
                    <span className="movie-card-overlay">
                        <Avatar className='avatar' src={
                            movie.poster_path !== null
                                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                                : `popcorn.png`
                        } size="110" round={true} alt={movie.title} />

                    </span>
                    <img className="backdrop"
                        src={
                            movie.backdrop_path !== null
                                ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
                                : `popcorn.png`
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

export default MovieCard;
