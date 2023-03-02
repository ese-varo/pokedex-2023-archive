export const getThumbnailUrl = (url) => {
  // this helper creates a url that provides images with a higher quality than the ones provided by the pokedex api
  const baseUrl = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
  let pokemonId = url.split("/").at(-1);
  pokemonId = pokemonId.split(".").at(-2);
  const maskedId = String(pokemonId).padStart(3, "0");

  return baseUrl + maskedId + ".png";
};
