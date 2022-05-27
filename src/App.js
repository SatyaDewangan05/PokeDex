import "./App.css";
import { useState, useEffect } from "react";

import Pokecard from "./Pokecard.js";

const api_url = "https://pokeapi.co/api/v2/pokemon/";
var pokemon_image = "";

function App() {
  const [text, setText] = useState("");

  const [pokelist, setPokelist] = useState([]);

  pokemon_image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokelist.id}.png`;

  const pokemonData = async (title) => {
    const response = await fetch(`${api_url}${title}`);
    const data = await response.json();
    console.log(data);
    setPokelist(data);
    return;
  };

  useEffect(() => {
    pokemonData();
  }, []);

  return (
    <div className="app">
      <div className="navbar">
        <div className="search">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search..."
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              pokemonData(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              pokemonData(text);
            }}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div className="logo">
          <img src={require("./image/pokedex.png")} alt="pokedex" />
        </div>
      </div>
      <div className="search-result">
        {text === "" || pokelist === "not found" ? (
          <Pokecard pokelist={pokelist} />
        ) : (
          <div className="pokecard">
            <div className="head">
              <div className="head-name">
                <p className="pokeno">1</p>
                <p className="pokename">{pokelist.name}</p>
              </div>
              <div className="type">
                <img src={require(`./image/grass.png`)} alt="Grass" />
              </div>
            </div>
            <div className="pokemon-img">
              <img src={pokemon_image} alt="001" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
