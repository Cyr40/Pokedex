




function NavBar({pokemonIndex, setPokemonIndex, pokemonList}) {

  const handleClickNext = () => {
    setPokemonIndex(pokemonIndex+1)
  }
  const handleClickBack = () => {
   setPokemonIndex(pokemonIndex-1)
  }
  return (
    <div>
{ (pokemonIndex > 0) ? (<button onClick={handleClickBack}>Back</button>): ""}
{(pokemonIndex < pokemonList.length - 1) ? (<button onClick={handleClickNext}>Next</button>) : "" }
</div>
 )
}
 export default NavBar;