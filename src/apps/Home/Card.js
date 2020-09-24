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
    <div class="card">
      <div class="card-img">
        <img
          src="https://gumlet.assettype.com/newslaundry%2F2020-09%2Fd73649c8-ca54-4581-bd0c-d99fbcae470c%2FVaranasi_Covid_Economy_AI.jpg"
          alt="img"
        />
      </div>
      <div class="card-content">
        <h2 class="card-headline">{story.story.headline}</h2>
        <div class="card-expand">
          <p>{story.story.subheadline}</p>
        </div>
        <div class="card-meta">
          <button className="like" onClick={toogleLike}>
            {like ? "💗" : "❤"}
          </button>
          <a href={story.story.url} className="read">
            Read More →
          </a>
        </div>
      </div>
    </div>
  );
}
