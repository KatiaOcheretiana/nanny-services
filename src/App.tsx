import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { lazy } from "react";

const HomePage = lazy(() => import("./pages/Home/Home"));
const Nannies = lazy(() => import("./pages/Nannies/Nannies"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/nannies" element={<Nannies />} />
        <Route path="/favorites" element={<h1>Favorites</h1>} />
      </Route>
      <Route path="*" element={<h1>Home</h1>} />
    </Routes>
  );
}

export default App;
