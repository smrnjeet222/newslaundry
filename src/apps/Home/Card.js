import React, { useState, useEffect } from "react";

export default function Card({ story }) {
  const [like, setLike] = useState(false);

  const ID = `${story.id}`;

  useEffect(() => {
    let localLike = "true" === localStorage.getItem(ID);
    setLike(localLike);
  }, [ID]);

  const toogleLike = () => {
    setLike((prev) => !prev);
    localStorage.setItem(ID, !like);
  };

  return (
    <div className="card">
      <div className="card-img">
        <img
          src={`https://gumlet.assettype.com/${story.story["hero-image-s3-key"]}`}
          alt="img"
        />
      </div>
      <div className="card-content">
        <h2 className="card-headline">{story.story.headline}</h2>
        <div className="card-expand">
          <p>{story.story.subheadline}</p>
        </div>
        <div className="card-meta">
          <button className="like" onClick={toogleLike}>
            {like ? "💖" : "🤍"}
          </button>
          <div className="author">{story.story["author-name"]}</div>
          <a href={story.story.url} className="read">
            Read More →
          </a>
        </div>
      </div>
    </div>
  );
}
