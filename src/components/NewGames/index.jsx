import React from "react";

import SectionTitle from "../SectionTitle";
import game1 from "../../assets/game1.png";
import game2 from "../../assets/game2.png";
import game3 from "../../assets/game3.png";

import "./style.css";

const NewGames = () =>  {
    return (
      <section className="NewGames">
        <SectionTitle title="NEW GAMES " />
        <div className="game__Container " >
        <img src={game1} alt='game' />
        <img src={game2} alt='game' />
        <img src={game3} alt='game' className="last_game"/>
        </div>
      </section>
    );
  }

export default NewGames