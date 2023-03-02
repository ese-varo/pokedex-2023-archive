import { useEffect, useState } from "react";
import { FaBolt, FaRegIdBadge, FaRuler, FaWeight } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { baseUrl } from "../App";
import Attribute from "./Attribute";
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
    <article>
      <article className="details">
        <PokemonPrimaryImg
          imageUrl={pokemon.sprites.front_default}
          name={pokemon.name}
        />
        <h2 className="details-title">Pokemon Details</h2>
        <section className="details-content">
          <Attribute
            header="Name"
            value={pokemon.name}
            icon={<FaRegIdBadge />}
          />
          <Attribute
            header="Base Experience"
            value={pokemon.base_experience}
            icon={<FaBolt />}
          />
          <Attribute
            header="Height"
            value={pokemon.height}
            icon={<FaRuler />}
          />
          <Attribute
            header="Weight"
            value={pokemon.weight}
            icon={<FaWeight />}
          />
        </section>
      </article>
      <footer>
        <button className="primary-button" onClick={() => navigate("/")}>
          Go back
        </button>
      </footer>
    </article>
  );
};

export default PokemonDetails;
