import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { lazy } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "./redux/auth/selectors";

const HomePage = lazy(() => import("./pages/Home/Home"));
const Nannies = lazy(() => import("./pages/Nannies/Nannies"));

function App() {
  const currentUser = useSelector(selectCurrentUser);

  console.log(currentUser);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/nannies" element={<Nannies />} />
        {currentUser && (
          <Route path="/favorites" element={<h1>Favorites</h1>} />
        )}
        <Route path="*" element={<Nannies />} />
      </Route>
    </Routes>
  );
}

export default App;
