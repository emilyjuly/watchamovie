import React from "react";
import { BiSearchAlt } from "react-icons/bi";

import "./styles.css";

const Search = () => {
  return (
    <div>
      <form className="search-container">
        <input type="text" placeholder="Search for a movie" className="input" />
        <button type="submit" className="btn">
          <BiSearchAlt className="search-icon" />
        </button>
      </form>
    </div>
  );
};

export default Search;
