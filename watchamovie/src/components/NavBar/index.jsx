import { Link } from "react-router-dom";

import "./styles.css";

const NavBar = () => {
    return (
        <nav id="navbar">
            <Link to="/" className="logo-space">
                <img src="/popcorn.png" alt="popcorn" className="logo" />
                <div className="title">Watch a movie</div>
            </Link>
        </nav>
    );
};

export default NavBar;
