import {useState} from 'react'
import PokemonCard from './components/PokemonCard'
import NavBar from './components/NavBar';
import './App.css'
import {useEffect} from 'react'

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
//   Début de la fonction App:
//   Déclarez une fonction nommée `handleAlert` qui affiche une alerte avec le message "hello pokemon trainer :)"
//   Utilisez le hook `useEffect` pour appeler la fonction `handleAlert` lors du montage initial du composant
// Fin de la fonction App
useEffect(
  () => {
    window.alert("hello pokemon trainer :)")
  },
  []
  ) 

  return (
    <div>
      
      <PokemonCard pokemon ={pokemonList[pokemonIndex]}/>
      <NavBar pokemonIndex= {pokemonIndex} pokemonList={pokemonList} setPokemonIndex={setPokemonIndex} />

    </div>
  )
}

export default App

