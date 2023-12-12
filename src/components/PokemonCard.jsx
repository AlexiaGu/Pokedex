// import "./App.css";
// import pokemonCard from "./components/pokemonCard"

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