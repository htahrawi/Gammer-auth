import React  from "react";

import SectionTitle from "../SectionTitle";

import "./style.css";
import trophy from '../../assets/trophy.png'
import prize from '../../assets/prize.png'
import prizeFrame from '../../assets/prizeFrame.png'

const Trophy = () => {
    return (
      <div className="Trophy">
        <SectionTitle title="most recent trophy" />
        <div className="trophy">
          <img src={trophy} alt="trophy" className="trophy_img" />
          <img src={prize} alt="prize" className="prize" />
          <img src={prizeFrame} alt="frame" className="frame" />
          <p className="desc">
            PERFECT KILL STREAK
            <span className="lower_desc">You are in the 0.5%</span>
          </p>
          <p className="last">
            assassin's creed odyssey
            <span className="last_time">last played: 34 hours ago</span>
          </p>
        </div>
      </div>
    );
  }
export default Trophy