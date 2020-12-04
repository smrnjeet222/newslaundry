import React, { useEffect, useState } from "react";
import Grid from "./apps/Home/Grid";
import Nav from "./apps/Nav";

const App = () => {
  const [stories, setStories] = useState([]);
  const [search, setSearch] = useState("");
  const [filterStories, setFilterStories] = useState([]);
  const [loading, setloading] = useState(true);

  const getNews = async () => {
    const response = await fetch(
      "https://nl-static-site-assets.s3.ap-south-1.amazonaws.com/reports.json"
    );
    const data = await response.json();
    setStories(data.items);
    setFilterStories(data.items);
    // console.log(data.items);
    setloading(false);
  };

  useEffect(() => {
    getNews();
  }, []);

  const handleFilter = () => {
    setFilterStories(
      stories.filter((story) => {
        let text = search.replace(/\s/g, "").toLowerCase();
        if (text === "") {
          return true;
        }
        let headline = story.story.headline;
        return headline.toLowerCase().indexOf(text) !== -1;
      })
    );
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
    handleFilter();
  };

  const getSearch = (e) => {
    e.preventDefault();
    handleFilter();
  };

  return (
    <div className="App">
      <Nav search={search} updateSearch={updateSearch} getSearch={getSearch} />
      {loading ? (
        <div className="loader">Loading.......</div>
      ) : (
        <Grid stories={filterStories} />
      )}
    </div>
  );
};

export default App;
