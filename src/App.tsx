import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { lazy } from "react";

const HomePage = lazy(() => import("./pages/Home/Home"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/nannies" element={<h1>Nannies</h1>} />
        <Route path="/favorites" element={<h1>Favorites</h1>} />
      </Route>
      <Route path="*" element={<h1>Home</h1>} />
    </Routes>
  );
}

export default App;
