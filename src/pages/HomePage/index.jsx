import React from "react";

import SideBar from "../../components/SideBar";
import User from "../../components/User";
import NewGames from "../../components/NewGames";
import InformatioSec from "../../components/InformatioSec";

import "./style.css";

const HomePage = ({ logout }) => {
  return (
    <div className="home">
      <SideBar />
      <main className="main">
        <User logout={logout} />
        <NewGames />
        <InformatioSec />
      </main>
    </div>
  );
};
export default HomePage;
