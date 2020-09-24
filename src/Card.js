import React, { useState, useEffect } from "react";

export default function Card({ story }) {
  const [like, setLike] = useState(false);

  useEffect(() => {
    let localLike = "true" === localStorage.getItem(`${story.id}`);
    setLike(localLike);
  }, [like]);

  const storeLike = () => {
    localStorage.setItem(`${story.id}`, !like);
  };

  const toogleLike = () => {
    setLike((prev) => !prev);
    storeLike();
  };

  return (
    <div style={{ border: "3px solid black", padding: 20 }}>
      <h3>{story.story.headline}</h3>
      <p>{story.story.subheadline}</p>
      <span>
        <a href={story.story.url}>go to story</a>
      </span>
      <small>{story.story.authors[0].name}</small>
      <button onClick={toogleLike}>LIKE {like ? "💖" : "❌"}</button>
    </div>
  );
}
