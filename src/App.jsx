import {useState} from 'react'
import PokemonCard from './components/PokemonCard'
import './App.css'

const pokemonList = [
  {
    name: "Bulbasaur",
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
    name: "Mew",
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0)

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
      <PokemonCard pokemon={pokemonList [pokemonIndex]} />
      {pokemonIndex > 0 && <button onClick={handleBeforeClick} > Précédent </button> }
      {pokemonIndex < pokemonList.length - 1 && <button onClick={handleNextClick}> Suivant </button>}

    {/* {pokemonIndex !== 0 && <button onClick={handleBeforeClick} > Précédent </button> }
    {pokemonIndex !== pokemonList.length - 1 && <button onClick={handleNextClick}> Suivant </button>} 
     fonctionne aussi avec !== */}
      </div>
  )
}


export default App

