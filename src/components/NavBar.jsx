
// import pokemonCard from "./components/pokemonCard"
import {useState} from 'react'
import PropTypes from "prop-types"


function NavBar({pokemonIndex, pokemonList, setPokemonIndex}) {
    
  
    const handleBeforeClick = () => {
      if (pokemonIndex > 0) {
        setPokemonIndex(pokemonIndex - 1)
      }
    }
    const handleNextClick = () => {
      setPokemonIndex(pokemonIndex +1)
    }


return (
    
    <div>
    
    {pokemonIndex > 0 && <button onClick={handleBeforeClick} > Précédent </button> }
    {pokemonIndex < pokemonList.length - 1 && <button onClick={handleNextClick}> Suivant </button>}

  {/* {pokemonIndex !== 0 && <button onClick={handleBeforeClick} > Précédent </button> }
  {pokemonIndex !== pokemonList.length - 1 && <button onClick={handleNextClick}> Suivant </button>} 
   fonctionne aussi avec !== */}
    </div>
)
}

export default NavBar;