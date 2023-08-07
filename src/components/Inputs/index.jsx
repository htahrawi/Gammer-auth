import React from "react";
import { Body3 } from "../Typography";
import "./style.css";

const Input = ({
  label,
  value,
  id,
  type,
  placeholder,
  onChange,
  className,
}) => {
  return (
    <div className="input_box">
      <Body3>{label}</Body3>
      <input
        type={type}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={className}
      />
    </div>
  );
};

export default Input;
