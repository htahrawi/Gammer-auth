import React from "react";
import './style.css'

const  BoxWithBgImg = ({children}) => {
        return (
            <div className="box__bg_img">
                {children}
            </div>
        );
    }
export default BoxWithBgImg