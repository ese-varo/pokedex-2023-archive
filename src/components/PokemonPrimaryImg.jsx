import { useEffect, useState } from "react";
import { getThumbnailUrl } from "../helpers";

const PokemonPrimaryImg = ({ imageUrl, name }) => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (imageUrl) {
      setUrl(getThumbnailUrl(imageUrl));
    }
  }, [imageUrl]);

  if (!imageUrl) return null;

  return (
    <picture>
      {/*
        If for any reason the getThumbnail generated url doesn't work
        the url provided by the main pokemon api is going to be used as a fallback
      */}
      <source srcSet={url} alt={`Pokemon ${name}`} />
      <img src={imageUrl} alt={`Pokemon ${name}`} />
    </picture>
  );
};

export default PokemonPrimaryImg;
