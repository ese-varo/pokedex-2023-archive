import { useNavigate, useParams } from "react-router-dom";

const PokemonDetails = () => {
  const { pokemonId } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h2>Pokemon Details</h2>
      <p>Pokemon # {pokemonId}</p>

      <button onClick={() => navigate("/")}>Go back</button>
    </div>
  );
};

export default PokemonDetails;
