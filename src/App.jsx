import PokemonCard from "./components/PokemonCard";
import PropTypes from "prop-types";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
    
  },
];

PokemonCard.PropTypes = {
  pokemonList: PropTypes.shape ({
  name:PropTypes.string.isRequired,
  imgSrc : PropTypes.string
}),
}

function App() {
  return (
    <div>
      <PokemonCard pokemon={pokemonList[0]} />
    </div>
  )
}

export default App;