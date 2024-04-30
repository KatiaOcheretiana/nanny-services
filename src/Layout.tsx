import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { Outlet, useLocation } from "react-router-dom";
import { Navigation } from "./components/Navigation/Navigation";

export const Layout = () => {
  // const location = useLocation();

  return (
    <>
      {/* {location.pathname === "/" && */}
      <Navigation />

      <Suspense fallback={<p>loading///</p>}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
