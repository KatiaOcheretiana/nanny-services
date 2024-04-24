import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { SyntheticEvent, useState } from "react";
import { auth } from "../../firebase";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        if (auth.currentUser !== null) {
          updateProfile(auth.currentUser, { displayName: name });
        }
      })
      .then(() => {
        console.log("Display name updated successfully");
        setEmail("");
        setName("");
        setPassword("");
      })
      .catch((error) => {
        console.error("Error creating user:", error);
      });
  };

  return (
    <>
      <form onSubmit={register}>
        <h2>create account</h2>
        <input
          type="text"
          placeholder="enter your name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="email"
          placeholder="enter your email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="enter your password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button>create</button>
      </form>
    </>
  );
};
