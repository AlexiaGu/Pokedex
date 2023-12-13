// import "./App.css";
// import pokemonCard from "./components/pokemonCard"

import PropTypes from "prop-types"
import NavBar from "./NavBar"

PokemonCard.propTypes = {
  pokemon : PropTypes.shape ({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string, 
  }).isRequired,
}

function PokemonCard(props) {
  console.log(props)
// const pokemon = pokemonList[1]

return (
  <figure>
    {props.pokemon.imgSrc !== undefined ? <img src={props.pokemon.imgSrc}></img> : <p>???</p>}
    <figcaption>{props.pokemon.name}</figcaption>
  </figure>
)

} 




  
  
  export default PokemonCard;