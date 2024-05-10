import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import { Navigation } from "./components/Navigation/Navigation";
import { Loader } from "./components/Loader/Loader";

export const Layout = () => {
  return (
    <>
      <Navigation />

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
