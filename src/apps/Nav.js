import React from "react";

export default function Nav({ search, updateSearch, getSearch }) {
  return (
    <nav>
      <form onSubmit={getSearch} className="search-form">
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
