import { useEffect, useState } from "react";
import apiMovieService from "../../services/apiMovieService";
import MovieCard from "../MovieCard/MovieCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

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

    const handleDragStart = (e) => e.preventDefault();

    const items = trendingMovies.map((movie) => (
        <div className="carousel-item" key={movie.id}>
            <img
                src={movie.imageUrl}
                onDragStart={handleDragStart}
                role="presentation"
            />
            <MovieCard movie={movie} />
        </div>
    ));

    const renderCustomPrevButton = ({ isDisabled }) => (
        <div className="btn-area-left">
            <button
                className={`custom-prev-button ${isDisabled ? "disabled" : ""}`}
                onClick={() => !isDisabled && carousel.slidePrev()}
            >
                <FaChevronLeft className="svg-arrow" />
            </button>
        </div>
    );

    const renderCustomNextButton = ({ isDisabled }) => (
        <div className="btn-area-rigth">
            <button
                className={`custom-next-button ${isDisabled ? "disabled" : ""}`}
                onClick={() => !isDisabled && carousel.slideNext()}
            >
                <FaChevronRight className="svg-arrow" />
            </button>
        </div>
    );

    let carousel;

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
            <p className="description-title">
                Drag to the side and see the movies that are trending today!
            </p>

            <AliceCarousel
                mouseTracking
                items={items}
                responsive={{
                    0: { items: 2 },
                    768: { items: 4 },
                    1024: { items: 5 },
                }}
                renderPrevButton={renderCustomPrevButton}
                renderNextButton={renderCustomNextButton}
                onInitialized={(e) => (carousel = e)}
            />
        </div>
    );
};

export default Trending;
