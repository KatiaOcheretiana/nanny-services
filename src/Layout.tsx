import { Suspense } from "react";
import { Outlet } from "react-router-dom";
// import { NavigationGest } from "./components/Navigation/NavigationGuest";

export const Layout = () => {
  return (
    <>
      {/* <NavigationGest /> */}
      <Suspense fallback={<p>loading///</p>}>
        <Outlet />
      </Suspense>
      {/* <Toaster top="100" position="top-right" reverseOrder={false} /> */}
    </>
  );
};
