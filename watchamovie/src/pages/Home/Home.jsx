import NowPlaying from "../../components/NowPlaying/NowPlaying";
import Search from "../../components/Search/Search";
import Trending from "../../components/Trending/Trending";

import "./styles.css";

const Home = () => {
    return (
        <div className="container">
            <div className="topo">
                <Search />
            </div>

            <Trending />
            <NowPlaying />
        </div>
    );
};

export default Home;
