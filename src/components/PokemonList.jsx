import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PokemonList = ({ onClick }) => {
  const pokemons = useSelector((state) => state.pokemons.results);
  const navigate = useNavigate();
  const handleOnClick = (clickCount, pokemon) => {
    if (clickCount === 1) {
      onClick(pokemon.url);
    } else if (clickCount === 2) {
      navigate(`/pokemon/${pokemon.name}`);
    }
  };

  return (
    <ul className="pokemon-list">
      {pokemons.map((pokemon) => (
        <li key={pokemon.name}>
          <button
            className="pokemon-btn"
            onClick={(e) => handleOnClick(e.detail, pokemon)}
          >
            {pokemon.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default PokemonList;
