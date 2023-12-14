
// import pokemonCard from "./components/pokemonCard"
import {useState} from 'react'
import PropTypes from "prop-types"


function NavBar({pokemonIndex, pokemonList, setPokemonIndex}) {

const handleButton = (index) => {
  setPokemonIndex(index)
}

return (
    
    <div>
     { pokemonList.map((pokemon, index) => (
    <button key={pokemon.name} onClick={() => handleButton(index)} > 
      {pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1)}
    </button>
    
     )
  )
     
    }
  </div>
)

 
 

 
    
  }

export default NavBar;
  
    