import React from "react";

import SectionTitle from "../SectionTitle";
import FriendsPhoto from "../../assets/FRIENDS.png";

import './style.css'

const Friends = () =>  {
    return (
      <div className="friends">
        <SectionTitle title="friends" />
        <img src={FriendsPhoto} alt="Friends"/>
      </div>
    );
  }

  export default Friends