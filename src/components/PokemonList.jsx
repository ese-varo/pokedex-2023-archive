import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { archive } from "../features/pokemonSlice";

const PokemonList = ({ onClick }) => {
  const pokemons = useSelector((state) => state.pokemons.items);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleOnClick = (clickCount, pokemon) => {
    if (clickCount === 1) {
      onClick(pokemon.url);
    } else if (clickCount === 2) {
      navigate(`/pokemon/${pokemon.name}`);
    }
  };

  return (
    <div className="pokemon-list">
      {pokemons.map((pokemon) => (
        <div key={pokemon.name} className="pokemon-thumbnail">
          <button
            className="details-btn"
            onClick={(e) => handleOnClick(e.detail, pokemon)}
          >
            {pokemon.name}
          </button>
          <button
            className="remove-btn"
            onClick={() => dispatch(archive(pokemon.name))}
          >
            remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
