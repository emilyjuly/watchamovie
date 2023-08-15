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
        </div>
    );
};

export default Home;
