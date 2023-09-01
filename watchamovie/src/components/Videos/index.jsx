import ReactPlayer from "react-player";

import "./styles.css"

const Video = ({ video }) => {
    return (
        <div className="player">
            {video[0].key ? <ReactPlayer width='100%'
                height='100%'
                url={`https://www.youtube.com/watch?v=${video[0].key}`}
            /> : ''}
        </div>

    )
}

export default Video;