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
                <>
                    <OneMovie movie={movie} />
                </>
            ) : (
                ""
            )}
        </div>
    );
};

export default Movie;
