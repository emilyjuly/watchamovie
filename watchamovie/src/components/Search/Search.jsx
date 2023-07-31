import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
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
        <input
          type="text"
          placeholder="Search for a movie"
          className="input"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button type="submit" className="btn">
          <BiSearchAlt className="search-icon" />
        </button>
      </form>
    </div>
  );
};

export default Search;
