import React from "react";
import './style.css'

export const H1 = ({ text }) => {
  return <h1>{text}</h1>;
};

export const H2 = ({ text }) => {
  return <h2  className="welcome">{text}</h2>;
};

export const Body = ({ text }) => {
  return <p className="typography_p">{text}</p>;
};

export const Body3 = ({ className = "", children }) => {
    return (
        <p className={`body3 ${className}`}>{children}</p>
    )
}
export const Label = ({ text }) => {
  return <label>{text}</label>;
};


