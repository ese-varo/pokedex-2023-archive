import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { updateList } from "./features/pokemonSlice";
import Paginator from "./components/Paginator";
import PokemonList from "./components/PokemonList";

const baseUrl = "https://pokeapi.co/api/v2/pokemon/";
function App() {
  const dispatch = useDispatch();
  const [currentPokemon, setCurrentPokemon] = useState(null);
  const [currentPokemonUrl, setCurrentPokemonUrl] = useState(null);
  const page = useSelector((state) => state.pokemons.page);

  // oscar.martinez@densitylabs.io
  // add remove functionality
  // styles improve UI/UX

  useEffect(() => {
    let url = baseUrl;
    if (page !== 1) {
      // implementation to load the corresponding page when user come back from details view
      // e.g. if user doble click on a pokemon of page 4 when they click on 'go back' button in details view the page 4 is loaded
      const offset = (page - 1) * 20;
      url += `?offset=${offset}&limit=20`;
    }
    const getPokemons = async () => {
      const response = await fetch(url).then((response) => response.json());
      dispatch(updateList(response));
      setCurrentPokemonUrl(response.results[0].url);
    };

    getPokemons();
  }, [page]);

  useEffect(() => {
    const getPokemon = async () => {
      const response = await fetch(currentPokemonUrl).then((response) =>
        response.json()
      );
      setCurrentPokemon(response);
    };

    getPokemon();
  }, [currentPokemonUrl]);

  const onClick = useCallback((url) => {
    setCurrentPokemonUrl(url);
  }, []);

  return (
    <div className="App">
      <div className="main">
        <div className="pokemon-details">
          <img
            src={
              currentPokemon ? currentPokemon.sprites.front_default : undefined
            }
            alt="Current Pokemon"
          />
        </div>
        <PokemonList onClick={onClick} />
      </div>
      <Paginator />
    </div>
  );
}

export default App;
