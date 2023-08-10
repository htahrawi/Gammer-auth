import React from "react";
import SectionTitle from "../SectionTitle";
import "./style.css";
import LAST_PLAYED from "../../constants/lastPlayed";
import { useThemeContext } from "../../contexts/ThemeContext";

const LastPlayed = () => {
  const {theme} = useThemeContext();
  return (
    <div className="last_played">
      <SectionTitle title="last played" />
      {LAST_PLAYED.map((items, index) => (
        <div className={`play_${theme}`} key={index}>
          <img src={items.src} alt={items.alt} className="last_played_img" />
          <p className="last_played_title">{items.paragraph}</p>
        </div>
      ))}
    </div>
  );
};
export default LastPlayed;
