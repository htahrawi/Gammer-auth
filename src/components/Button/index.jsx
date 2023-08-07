import React from "react";

const Button = ({ className, onClick, icon, text }) => {
  return (
    <button className={className} type="submit" onClick={onClick}>
      {icon ? <img className="icon" src={icon} alt="icon" /> : ""}
      {text}
    </button>
  );
};

export default Button;
