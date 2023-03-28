function PokemonCard() {
  return ( 
<figure>
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
         alt="bulbasaur"></img>
    <figcaption>bulbasaur</figcaption>
</figure>
)
const pokemon =pokemonList[0]; 

}

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
export default PokemonCard;