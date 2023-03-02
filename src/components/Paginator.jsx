import { useDispatch, useSelector } from "react-redux";
import { decrementPage, incrementPage } from "../features/pokemonSlice";

const Paginator = () => {
  const page = useSelector((state) => state.pokemons.page);
  const dispatch = useDispatch();

  return (
    <div className="paginator">
      <button onClick={() => dispatch(decrementPage())} disabled={page < 2}>
        Previous
      </button>
      <p>page: {page}</p>
      <button onClick={() => dispatch(incrementPage())} disabled={page > 7}>
        Next
      </button>
    </div>
  );
};

export default Paginator;
