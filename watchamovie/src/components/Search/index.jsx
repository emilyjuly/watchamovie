import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import firebaseService from "../../services/firebaseService";

import "./styles.css";

const Search = () => {
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState("");
    const [showHistory, setShowHistory] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!search) return;

        await firebaseService.createSearch(search);

        navigate(`/search?q=${search}`);
        setSearch("");
    };

    async function getSearchs() {
        const searchResult = await firebaseService.getSearchs();
        setSearchResult(searchResult);
    }

    useEffect(() => {
        if (showHistory) {
            getSearchs();
        }
    }, [showHistory]);

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
                    <div className="input">
                        <input
                            placeholder="Search a movie"
                            type="text"
                            onClick={() => setShowHistory(true)}
                            onBlur={() => setShowHistory(false)}
                            onChange={(e) => setSearch(e.target.value)}
                            value={search}
                        />
                        <button type="submit" className="btn-search">
                            <AiOutlineSearch className="search-icon" />
                        </button>
                    </div>
                    <div className="history-container">
                        {showHistory && searchResult.length > 0 ? searchResult.map((search) => (
                            <div className="history" key={search}>{search}</div>
                        )) : ''}
                    </div>
                    {search}
                </div>
            </form>
        </div>
    );
};

export default Search;
