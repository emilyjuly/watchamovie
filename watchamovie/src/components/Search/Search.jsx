import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import "./styles.css";

const Search = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!search) return;

        navigate(`/search?q=${search}`);
        setSearch("");
    };

    return (
        <div>
            <form className="search-container" onSubmit={handleSubmit}>
                <div>
                    <p className="navbar-title">
                        Welcome! <br />{" "}
                        <span className="phrase">
                            What are you looking for to watch today?
                        </span>
                    </p>
                </div>
                <div className="search-input">
                    <input
                        type="text"
                        placeholder="Search for a movie"
                        className="input"
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                    />
                    <button type="submit" className="btn-search">
                        <AiOutlineSearch className="search-icon" />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Search;
