import React from "react";
import SectionTitle from "../SectionTitle";
import "./style.css";
import LAST_PLAYED from "../../constants/lastPlayed";

const LastPlayed = () => {
  return (
    <div className="last_played">
      <SectionTitle title="last played" />
      {LAST_PLAYED.map((items, index) => (
        <div className="play" key={index}>
          <img src={items.src} alt={items.alt} />
          <p>{items.paragraph}</p>
        </div>
      ))}
    </div>
  );
};
export default LastPlayed;
