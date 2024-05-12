import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./redux/store";
import { getUser } from "./redux/auth/operations";
import { PrivateRoute } from "./PrivateRoute";

const HomePage = lazy(() => import("./pages/Home/Home"));
const Nannies = lazy(() => import("./pages/Nannies/Nannies"));
const Favorites = lazy(() => import("./pages/Favorites/Favorites"));

function App() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/nannies" element={<Nannies />} />
        <Route
          path="/favorites"
          element={
            <PrivateRoute redirectTo="/nannies" component={<Favorites />} />
          }
        />
        <Route path="*" element={<Nannies />} />
      </Route>
    </Routes>
  );
}

export default App;
