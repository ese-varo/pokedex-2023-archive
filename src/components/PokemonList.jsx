import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { archive } from "../features/pokemonSlice";
import RemoveButton from "./RemoveButton";

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
        <div key={pokemon.name} className="pokemon-thumbnail card">
          <button
            className="details-button"
            onClick={(e) => handleOnClick(e.detail, pokemon)}
          >
            {pokemon.name}
          </button>
          <RemoveButton onClick={() => dispatch(archive(pokemon.name))} />
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
