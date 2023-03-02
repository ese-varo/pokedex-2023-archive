import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { baseUrl } from "../App";
import PokemonPrimaryImg from "./PokemonPrimaryImg";

const PokemonDetails = () => {
  const { pokemonName } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getPokemon = async () => {
      const response = await fetch(baseUrl + pokemonName).then((response) =>
        response.json()
      );
      setPokemon(response);
    };

    getPokemon();
  }, [pokemonName]);

  if (!pokemon) {
    return <div>Not found</div>;
  }

  return (
    <div>
      <h2>Pokemon Details</h2>
      <p>Pokemon name {pokemon.name}</p>
      <PokemonPrimaryImg
        imageUrl={pokemon.sprites.front_default}
        name={pokemon.name}
      />
      <p>Base Experience: {pokemon.base_experience}</p>
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <button onClick={() => navigate("/")}>Go back</button>
    </div>
  );
};

export default PokemonDetails;
