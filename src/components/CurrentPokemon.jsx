const CurrentPokemon = ({ imageUrl }) => {
  if (!imageUrl) return null;

  return (
    <div className="current-pokemon">
      <img src={imageUrl} alt="Current Pokemon" />
    </div>
  );
};

export default CurrentPokemon;
