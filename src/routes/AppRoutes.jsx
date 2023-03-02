import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import PokemonDetails from "../components/PokemonDetails";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pokemon/:pokemonName" element={<PokemonDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
