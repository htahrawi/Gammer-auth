import React  from "react";
import "./style.css";

const StrengthPassword = ({strength}) =>  {
        return (
            <div className={`strength ${strength}`}>
                <div className="strength_bar">
                    <div className={`strength_bar_fill`}></div>
                </div>
                <p>
                    {strength === "weak"
                        ? "Weak! try to make it stronger"
                        : strength === "medium"
                            ? "Not bad but you know you can do it better"
                            : strength === "strong"
                                ? "strong"
                                : ""}
                </p>
            </div>
        );
    }
export default StrengthPassword