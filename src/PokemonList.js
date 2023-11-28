import { Link } from "react-router-dom";
const PokemonList = ({ pokemons }) => {
  return (
    <div className="pokemon-list">
      {pokemons.results.map((pokemon) => (
        
        <div className="pokemon-preview" key={pokemon.id}>
          <Link to={`/pokemon/${pokemon.url.slice(0, -1).split("/").pop()}`}>
            <h2>{pokemon.name}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
