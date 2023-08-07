import React from "react";

import LastPlayed from "../LastPlayed";
import Trophy from "../Trophy";
import Friends from "../Friends";

import "./style.css";

const InformatioSec = () => {
  return (
    <section className="infoSec">
      <LastPlayed />
      <Trophy />
      <Friends />
    </section>
  );
};

export default InformatioSec;
