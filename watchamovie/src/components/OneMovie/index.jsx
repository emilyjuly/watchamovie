import {
    MdOutlineAttachMoney,
    MdDescription,
    MdOutlineLanguage,
} from "react-icons/md";
import { BiSolidTimeFive, BiCameraMovie, BiArrowBack } from "react-icons/bi";
import { AiOutlineLink } from "react-icons/ai";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import apiMovieService from "../../services/apiMovieService";
import "./styles.css";
import Video from "../Videos";

const OneMovie = ({ movie }) => {
    const [language, setLanguage] = useState("");
    const [video, setVideo] = useState(null);

    const getVideo = async () => {
        const video = await apiMovieService.getVideo(movie.id);
        setVideo(video);
    };

    const getLanguage = async () => {
        const lang = await apiMovieService.getLanguages();
        setLanguage(lang);
    };

    const formatCurrency = (number) => {
        return number.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        });
    };

    useEffect(() => {
        getLanguage();
        getVideo();
    }, []);
    return (
        <>
            <div className="back-container">
                <Link to="/" className="back">
                    <BiArrowBack />
                </Link>
            </div>
            <div className="img_info">
                <div className="movie-img-page">
                    <img
                        src={
                            movie.backdrop_path !== null
                                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                                : `\popcorn.png`
                        }
                        alt={movie.title ? movie.title : ''}
                    />
                </div>
                <div className="movie-informations">
                    <div className="title-info-movie">
                        <div className="info-title">
                            <h2>{movie.title ? movie.title : ''}</h2>
                            <div className="genres-container">
                                {movie.genres.length > 0 ?
                                    movie.genres.map((genre) => (
                                        <div key={genre.id} className="genres">
                                            {`- ${genre.name} -`}
                                        </div>
                                    )) : ''}
                            </div>
                        </div>
                    </div>
                    <div className="another-infos">
                        <div className="infos">
                            <div className="info">
                                <h3>
                                    <MdOutlineLanguage className="info-icon" />
                                    Original language
                                </h3>
                                <p>
                                    {language.length > 0 ?
                                        language.map((lang) =>
                                            movie.original_language === lang.iso_639_1
                                                ? lang.english_name
                                                : ""
                                        ) : ''}
                                </p>
                            </div>
                            <div className="info">
                                <h3>
                                    <MdOutlineAttachMoney className="info-icon" />
                                    Budget{" "}
                                </h3>
                                <p>{formatCurrency(movie.budget ? movie.budget : '')}</p>
                            </div>
                            <div className="info">
                                <h3>
                                    <BiSolidTimeFive className="info-icon" />
                                    Duration{" "}
                                </h3>
                                <p>{movie.runtime ? movie.runtime : ''} min</p>
                            </div>
                            <div className="info ">
                                <h3>
                                    <AiOutlineLink className="info-icon" />
                                    Homepage
                                </h3>
                                <a className="home-page" href={movie.homepage ? movie.homepage : ''} target="_blank">
                                    {movie.homepage ? movie.homepage : ''}
                                </a>
                            </div>
                            <div className="info ">
                                <h3>
                                    <BiCameraMovie className="info-icon" />
                                    Release Date{" "}
                                </h3>
                                <p>{movie.release_date ? movie.release_date : ''}</p>
                            </div>
                        </div>
                        {
                            video ? <div className="video">
                                <Video video={video} />
                            </div> : ''
                        }

                    </div>
                    <div>
                        <div className="info ">
                            <div className="overview">
                                <h3>
                                    <MdDescription className="info-icon" />
                                    Overview{" "}
                                </h3>
                                <p>{movie.overview ? movie.overview : ''}</p>
                            </div>

                        </div>
                        <div className="movie-companies">
                            {movie.production_companies.length > 0 ?
                                movie.production_companies.map((companie) => (
                                    <div key={companie.id} className="companies">
                                        <img
                                            src={`https://image.tmdb.org/t/p/w500${companie.logo_path}`}
                                            alt={companie.name}
                                        />
                                    </div>
                                )) : ''}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default OneMovie;
