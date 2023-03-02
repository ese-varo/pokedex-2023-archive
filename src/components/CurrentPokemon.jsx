import { MdCatchingPokemon } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const CurrentPokemon = ({ children, name }) => {
  const navigate = useNavigate();

  return (
    <div
      className="current-pokemon card"
      onDoubleClick={() => navigate(`/pokemon/${name}`)}
    >
      {children}
      <p className="current-pokemon-label">
        <MdCatchingPokemon className="current-pokemon-icon" />
        &nbsp;&nbsp;{name}
      </p>
    </div>
  );
};

export default CurrentPokemon;
