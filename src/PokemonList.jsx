import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PokemonList = () => {
  const pokemons = useSelector((state) => state.pokemons.results);
  const navigate = useNavigate();

  return (
    <ul className="pokemon-list">
      {pokemons.map((pokemon) => (
        <li key={pokemon.name}>
          <button
            className="pokemon-btn"
            onClick={() => navigate(`/pokemon/${pokemon.id}`)}
          >
            {pokemon.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default PokemonList;
