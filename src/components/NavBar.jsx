




function NavBar({pokemonIndex, pokemonList, setPokemonIndex}) {

  const changePokemon = ((pokemonIndex) =>{
    setPokemonIndex(pokemonIndex); 
    
  }); 

  return(
  <ul>
    {pokemonList.map((pokemon, pokemonIndex) => ( 
    <button key={pokemon.name} onClick={() => changePokemon(pokemonIndex)}>{pokemon.name}</button>  
  ))}
  </ul>
 )
}
 export default NavBar;


//  const handleClickNext = () => {
//   setPokemonIndex(pokemonIndex+1)
// }
// const handleClickBack = () => {
//  setPokemonIndex(pokemonIndex-1)
// }
// return (
//   <div>
// { (pokemonIndex > 0) ? (<button onClick={handleClickBack}>Back</button>): ""}
// {(pokemonIndex < pokemonList.length - 1) ? (<button onClick={handleClickNext}>Next</button>) : "" }
// </div>
// )