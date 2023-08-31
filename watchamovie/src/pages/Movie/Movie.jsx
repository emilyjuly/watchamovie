import OneMovie from "../../components/OneMovie";

import "./styles.css";
import { useEffect, useState } from "react";
import apiMovieService from "../../services/apiMovieService";
import { useParams } from "react-router-dom";


const Movie = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    const getMovie = async () => {
        const movie = await apiMovieService.getOnlyMovie(id);
        setMovie(movie);
    };

    useEffect(() => {
        getMovie();
    }, []);
    return (
        <div className="movie-page">
            {movie ? (
                <><OneMovie movie={movie} />
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
