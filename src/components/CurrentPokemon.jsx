import { useEffect, useState } from "react";
import { getThumbnailUrl } from "../helpers";

const CurrentPokemon = ({ imageUrl }) => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (imageUrl) {
      setUrl(getThumbnailUrl(imageUrl));
    }
  }, [imageUrl]);

  if (!imageUrl) return null;

  return (
    <div className="current-pokemon">
      <img src={url} alt="Current Pokemon" />
    </div>
  );
};

export default CurrentPokemon;
