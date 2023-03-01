import { useSelector } from "react-redux";

const Paginator = ({ onGetNewPage }) => {
  const { previous, next, results } = useSelector((state) => state.pokemons);
  console.log("prev", previous, "next", next);
  console.log(results.length);
  const handlePaginator = (page) => {};

  return (
    <div className="paginator">
      <button onClick={() => handleP(previous)} disabled={!previous}>
        Previous
      </button>
      <p>page: 1</p>
      <button
        onClick={() => onGetNewPage(next)}
        disabled={results.length > 151}
      >
        Next
      </button>
    </div>
  );
};

export default Paginator;
