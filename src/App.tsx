import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { lazy, useEffect, useState } from "react";
import { getCurrentUser } from "./firebase";

const HomePage = lazy(() => import("./pages/Home/Home"));
const Nannies = lazy(() => import("./pages/Nannies/Nannies"));

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const currentUser = await getCurrentUser();
        setUser(currentUser);
      } catch (error) {
        // Handle error if any
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();

    // Clean up function
    return () => {
      // Cleanup logic if needed
    };
  }, []);

  console.log(user);

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
