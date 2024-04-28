import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { Outlet, useLocation } from "react-router-dom";
import { NavigatioHomePage } from "./components/Navigation/NavigatioHomePage";

export const Layout = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" && <NavigatioHomePage />}

      <Suspense fallback={<p>loading///</p>}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
