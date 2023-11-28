import { useEffect, useState } from "react";
import PokemonList from "./PokemonList";
import useFetch from "./useFetch";

const Home = () => {
  const [url, setUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon/?limit=40&offset=40"
  );
  const { isPending, data, nextUrl, prevUrl } = useFetch(url);

  return (
    <div className="home">
      {isPending && <div>Loading... </div>}
      {data && <PokemonList pokemons={data} />}
      <div className="pagination-btns">
        {nextUrl && (
          <button
            onClick={() => {
              setUrl(nextUrl);
            }}
          >
            Next
          </button>
        )}

        {prevUrl && (
          <button
            onClick={() => {
              setUrl(prevUrl);
            }}
          >
            Previous
          </button>
        )}
      </div>
    </div>
  );
};
export default Home;
