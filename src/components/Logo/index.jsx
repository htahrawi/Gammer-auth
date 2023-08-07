import React from "react";
const LogoGammer = ({ color, className, path1, path2 }) => {
  return (
    <div className={`logo_div`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="95"
        height="103"
        viewBox="0 0 95 103"
        fill="none"
      >
        <path fillRule="evenodd" clipRule="evenodd" d={path1} fill={color} />
        <path fillRule="evenodd" clipRule="evenodd" d={path2} fill={color} />
      </svg>
      <span className={className}>Gamers</span>
    </div>
  );
};
export default LogoGammer