import React from "react";
import { SignUp } from "./components/auth/SignUp";
import { SignIn } from "./components/auth/SignIn";
import { AuthDetails } from "./components/auth/AuthDetail";

function App() {
  return (
    <>
      <SignUp />
      <SignIn />
      <AuthDetails />
    </>
  );
}

export default App;
