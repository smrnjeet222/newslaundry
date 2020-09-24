import React from "react";
import Card from "./Card";

export default function Grid({ stories }) {
  return (
    <div className="stories">
      {stories.map((story) => (
        <Card key={story.id} story={story} />
      ))}
    </div>
  );
}
