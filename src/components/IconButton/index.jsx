import React from "react";
import "./style.css";

const IconButton = ({ link, icon, alt }) => {
  return (
    <a href={link} className="icon_btn">
      <img src={icon} alt={alt} />
    </a>
  );
};
export default IconButton;
