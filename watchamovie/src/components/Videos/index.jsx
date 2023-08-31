import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import apiMovieService from "../../services/apiMovieService";

import "./styles.css"

const Video = ({ movie }) => {
    const [video, setVideo] = useState(null);

    const getVideo = async () => {
        const video = await apiMovieService.getVideo(movie.id);
        setVideo(video);
    };

    useEffect(() => {
        getVideo()
    }, []);
    return (
        <div className="player">
            {video ? <ReactPlayer width='100%'
                height='100%'
                url={`https://www.youtube.com/watch?v=${video[0].key}`}
            /> : ''}
        </div>

    )
}

export default Video;