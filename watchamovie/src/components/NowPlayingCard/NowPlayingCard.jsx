import { FaStar } from "react-icons/fa";
import { MdOutlineLanguage } from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

import "./styles.css";
import { BiCameraMovie } from "react-icons/bi";
import { useEffect, useState } from "react";
import apiMovieService from "../../services/apiMovieService";

const NowPlayingCard = ({ movie, showLink = true }) => {
    const [language, setLanguage] = useState('');

    const getLanguage = async () => {
        const lang = await apiMovieService.getLanguages();
        setLanguage(lang)
    }

    useEffect(() => {
        getLanguage()
    }, [])
    return (
        <div className="movie-card">
            <div className="movie-img">
                <img
                    src={
                        movie.poster_path !== null
                            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                            : `\popcorn.png`
                    }
                    alt={movie.title}
                />
            </div>
            <div className="movie-info">
                <div className="top">
                    <span className="line"></span>
                </div>
                <div className="informations">
                    <div className="upSide">
                        <h2>{movie.title}</h2>
                        <p>
                            <FaStar className="star-icon" />
                            {movie.vote_average}
                        </p>
                        <p>
                            <MdOutlineLanguage className="lang-icon" />
                            {language.length > 0 && (language.map((lang) => (
                                movie.original_language === lang.iso_639_1 ? lang.english_name : ''
                            )))}
                        </p>
                        <p>
                            <BiCameraMovie className="lang-icon" />
                            {(movie.release_date)}
                        </p>
                    </div>

                    <div className="downSide">
                        {showLink && (
                            <Link to={`/movie/${movie.id}`} className="details">
                                See details
                                <div className="icon">
                                    <AiOutlineArrowRight className="svg" />
                                </div>
                            </Link>
                        )}
                    </div>
                </div>
                <div className="base">
                    <span className="line"></span>
                </div>
            </div>
        </div>
    );
};

export default NowPlayingCard;
