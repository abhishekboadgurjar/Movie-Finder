import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    if (event.key === 'Enter' && searchQuery.trim()) {
      document.getElementById('search-link').click();
    }
  };

  return (
    <div className="navbar">
      <div className="logo">
        <h1>Movie Finder</h1>
      </div>

      <div className="page-list">
        <NavLink to="/">
          <h4>Home</h4>
        </NavLink>
        <NavLink to="/movies">
          <h4>Movies</h4>
        </NavLink>
        <NavLink to="/series">
          <h4>Web Series</h4>
        </NavLink>
      </div>
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter Movie"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleSearch}
        />
        <Link to={`/search/${searchQuery}`} id="search-link">
          <button>Search</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
