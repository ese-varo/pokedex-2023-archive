import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { update } from "./features/pokemonSlice";
import Paginator from "./Paginator";
import PokemonList from "./PokemonList";

function App() {
  const dispatch = useDispatch();
  const [url, setUrl] = useState(false);

  // oscar.martinez@densitylabs.io
  // add remove functionality
  // styles improve UI/UX
  // push to github

  useEffect(() => {
    const getPokemons = async () => {
      const response = await fetch(
        url || "https://pokeapi.co/api/v2/pokemon/"
      ).then((response) => response.json());
      dispatch(update(response));
    };

    getPokemons();
  }, [url]);

  const onGetNewPage = (url) => {
    setUrl(url);
  };

  return (
    <div className="App">
      <div className="main">
        <div className="pokemon-details">details</div>
        <PokemonList />
      </div>
      <Paginator onGetNewPage={onGetNewPage} />
    </div>
  );
}

export default App;
