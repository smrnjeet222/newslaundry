import React from "react";
import logo from "../assets/logo.png";

export default function Nav({ search, updateSearch, getSearch }) {
  return (
    <nav>
      <a href="https://www.newslaundry.com/">
        <img src={logo} alt="logo" className="logo" />
      </a>
      <form onSubmit={getSearch} className="search">
        <input
          type="text"
          className="search-bar"
          value={search}
          onChange={updateSearch}
          placeholder="Search here ...."
        />
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>
    </nav>
  );
}
