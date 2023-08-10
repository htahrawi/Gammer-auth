import React from "react";

import "./style.css";
import { useThemeContext } from "../../contexts/ThemeContext";

const SectionTitle = ({title}) =>{
    const {theme} = useThemeContext();
    return <h4 className={`SectionTitle_${theme}`}>{title}</h4>;
}

export default SectionTitle