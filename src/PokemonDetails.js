import useFetch from "./useFetch";
import { useHistory, useParams } from "react-router-dom";

const PokemonDetails = () => {
  const { id } = useParams();
  const { data, isPending } = useFetch(
    "https://pokeapi.co/api/v2/pokemon/" + id
  );

  return (
    <div className="pokemon-details">
      {isPending && <div>Loading...</div>}

      {data && (
        <article>
          <h2>{data.name}</h2>
          <div>
            <img src={data.sprites.back_default} alt="" />
          </div>
          <div>Weight: {data.weight}</div>
          <div>Height: {data.height}</div>
        </article>
      )}
    </div>
  );
};

export default PokemonDetails;
