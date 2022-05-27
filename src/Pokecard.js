import React from "react";

import "./Pokecard.css";
import Data from "./Data.js";

const Pokecard = ({ pokelist }) => {
  return (
    <div className="pokecards">
      {Data.map((item, index) => {
        const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
          index + 1
        }.png`;
        return (
          <div className="pokecard">
            <div className="head">
              <div className="head-name">
                <p className="pokeno">{index + 1}</p>
                <p className="pokename">{item.name}</p>
              </div>
              <div className="type">
                <img src={require("./image/grass.png")} alt="Grass" />
              </div>
            </div>
            <div className="pokemon-img">
              <img src={image} alt="001" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Pokecard;
