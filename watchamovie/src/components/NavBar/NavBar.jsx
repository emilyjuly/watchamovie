import React from "react";
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";

import "./styles.css";

const NavBar = () => {
  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          {" "}
          <img src="/tv.png" alt="popcorn" className="logo" /> Watch a movie
        </Link>
      </h2>
      <form>
        <input type="text" placeholder="Search for a movie" />
        <button type="submit">
          <BiSearchAlt className="search-icon"/>
        </button>
      </form>
    </nav>
  );
};

export default NavBar;
