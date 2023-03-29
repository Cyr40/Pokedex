
import PokemonCard from "./components/PokemonCard";
import { useState } from "react";

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];
  // let pokemonIndex=pokemonList[0]; 

  // const [pokemonIndex, setPokemonIndex] = useState(pokemonList[0]); 
  // const handleClickNext = () => {
  //   setPokemonIndex(indexPokemon+1)
  // }

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0); 
  
  const handleClickNext = () => {
     setPokemonIndex(pokemonIndex+1)
  }
  const handleClickBack = () => {
    setPokemonIndex(pokemonIndex-1)
  }
  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      {(pokemonIndex > 0) ?(<button onClick={handleClickBack}>Back</button>) : ""}
      {(pokemonIndex < pokemonList.length - 1) ? (<button onClick={handleClickNext}>Next</button>) : "" } 
    </div>
  )
}

export default App;