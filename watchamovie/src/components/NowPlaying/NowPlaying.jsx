import { useEffect, useState } from "react";
import apiMovieService from "../../services/apiMovieService";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "./styles.css";
import NowPlayingCard from "../NowPlayingCard/NowPlayingCard";

const NowPlaying = () => {
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

    const getNowPlayingMovies = async () => {
        const nowPlayingMovies = await apiMovieService.getNowPlayingMovies();
        setNowPlayingMovies(nowPlayingMovies);
    };

    useEffect(() => {
        getNowPlayingMovies();
    }, []);

    return (
        <div className="carousel-container">
            <div className="trending-title">
                <h2>Now Playing</h2>

                <div className="playing">
                    <div className="blueline line-1"></div>
                    <div className="blueline line-2"></div>
                    <div className="blueline line-3"></div>
                    <div className="blueline line-4"></div>
                    <div className="blueline line-5"></div>
                </div>

            </div>
            <p className="description-title">Drag to the side and see the movies that are currently in theaters!</p>

            <Carousel className="carousel-card">
                {nowPlayingMovies.length > 0 && (
                    nowPlayingMovies.map((movie) => (
                        <div key={movie.id}>
                            <NowPlayingCard movie={movie} />
                        </div>
                    ))
                )}
            </Carousel>
        </div>
    );
};

export default NowPlaying;
