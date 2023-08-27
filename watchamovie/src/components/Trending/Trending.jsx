import { useEffect, useState } from "react";
import apiMovieService from "../../services/apiMovieService";
import MovieCard from "../MovieCard/MovieCard";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "./styles.css";

const Trending = () => {
    const [trendingMovies, setTredingMovies] = useState([]);

    const getTrendingMovies = async () => {
        const trendingMovies = await apiMovieService.getTrendingMovies();
        setTredingMovies(trendingMovies);
    };

    useEffect(() => {
        getTrendingMovies();
    }, []);

    return (
        <div className="carousel-container">
            <div className="trending-title">
                <h2>Trending </h2>

                <div className="playing">
                    <div className="blueline line-1"></div>
                    <div className="blueline line-2"></div>
                    <div className="blueline line-3"></div>
                    <div className="blueline line-4"></div>
                    <div className="blueline line-5"></div>
                </div>

            </div>
            <p className="description-title">Drag to the side and see the movies that are trending today!</p>

            <Carousel className="carousel-card">
                {trendingMovies.length > 0 ? (
                    trendingMovies.map((movie) => (
                        <div key={movie.id}>
                            <MovieCard movie={movie} />
                        </div>
                    ))
                ) : (
                    <div className="loader">
                        <div className="loader-bar bar-1"></div>
                        <div className="loader-bar bar-2"></div>
                        <div className="loader-bar bar-3"></div>
                        <div className="loader-bar bar-4"></div>
                    </div>
                )}
            </Carousel>
        </div>
    );
};

export default Trending;
