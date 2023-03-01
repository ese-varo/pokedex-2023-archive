import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import PokemonDetails from "../PokemonDetails";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pokemon/:pokemonId" element={<PokemonDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
