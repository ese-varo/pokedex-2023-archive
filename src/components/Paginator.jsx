import { useDispatch, useSelector } from "react-redux";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { decrementPage, incrementPage } from "../features/pokemonSlice";

const Paginator = () => {
  const page = useSelector((state) => state.pokemons.page);
  const dispatch = useDispatch();

  return (
    <div className="paginator">
      <button
        className="paginator-prev-button"
        onClick={() => dispatch(decrementPage())}
        disabled={page < 2}
      >
        <FaAngleDoubleLeft />
      </button>
      <p className="paginator-label">{page} of 8</p>
      <button
        className="paginator-next-button"
        onClick={() => dispatch(incrementPage())}
        disabled={page > 7}
      >
        <FaAngleDoubleRight />
      </button>
    </div>
  );
};

export default Paginator;
