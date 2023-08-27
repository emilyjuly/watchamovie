import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import apiMovieService from "../../services/apiMovieService";
import { MdOutlineAttachMoney, MdDescription, MdOutlineLanguage, MdLocalMovies } from 'react-icons/md';
import { BiSolidTimeFive, BiCameraMovie, BiArrowBack } from 'react-icons/bi'
import { AiOutlineLink } from 'react-icons/ai'

import "./styles.css";

const Movie = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    const getMovie = async () => {
        const movie = await apiMovieService.getOnlyMovie(id);
        console.log(movie)
        setMovie(movie);
    };

    const formatCurrency = (number) => {
        return number.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        });
    };

    useEffect(() => {
        getMovie();
    }, []);

    return (
        <div className="movie-page">
            {movie ? (
                <>
                    <div className="back-container">
                        <Link to="/" className="back">
                            <BiArrowBack />
                        </Link>
                    </div>
                    <div className="img_info">

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
                        <div className="movie-informations">
                            <div className="top">
                                <span className="line"></span>
                            </div>
                            <div className="title-info-movie">
                                <div className="info-title"><h2>{movie.title}</h2>
                                    <div className="genres-container">
                                        {movie.genres.length > 0 && movie.genres.map((genre) => (<div key={genre.id} className="genres">
                                            {genre.name}ㅤ
                                        </div>))}
                                    </div>

                                </div>
                            </div>
                            <div className="another-infos"><div className="info">
                                <h3><MdOutlineLanguage className="info-icon" />Original language </h3>
                                <p>{movie.original_language === 'en' ? 'English' : ''}</p>
                            </div>
                                <div className="info">
                                    <h3><MdOutlineAttachMoney className="info-icon" />Budget </h3>
                                    <p>{formatCurrency(movie.budget)}</p>
                                </div>
                                <div className="info">
                                    <h3><BiSolidTimeFive className="info-icon" />Duration </h3>
                                    <p>{movie.runtime} min</p>
                                </div>
                                <div className="info ">
                                    <h3><AiOutlineLink className="info-icon" />Homepage </h3>
                                    <a href={movie.homepage} target="_blank">{movie.homepage}</a>
                                </div>
                                <div className="info ">
                                    <h3><BiCameraMovie className="info-icon" />Release Date </h3>
                                    <p>{movie.release_date}</p>
                                </div>
                                <div className="info ">
                                    <h3><MdDescription className="info-icon" />Overview </h3>
                                    <p>{movie.overview}</p>
                                </div></div>
                            <div className="base">
                                <span className="line"></span>
                            </div>
                        </div>
                    </div>

                    <div className="movie-companies">
                        {movie.production_companies.length > 0 && movie.production_companies.map((companie) => (<div key={companie.id} className="companies">
                            <img src={`https://image.tmdb.org/t/p/w500${companie.logo_path}`} alt={companie.name} />
                        </div>))}
                    </div>
                </>
            ) : (
                <div className="loader">
                    <div className="loader-bar bar-1"></div>
                    <div className="loader-bar bar-2"></div>
                    <div className="loader-bar bar-3"></div>
                    <div className="loader-bar bar-4"></div>
                </div>
            )}
        </div>
    );
};

export default Movie;
