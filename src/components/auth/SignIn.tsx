import { signInWithEmailAndPassword } from "firebase/auth";
import { SyntheticEvent, useState } from "react";
import { auth } from "../../firebase";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const logIn = (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        setEmail("");
        setError("");
        setPassword("");
      })
      .catch((error) => {
        console.error(error);
        setError("couldn't find your account");
      });
  };

  return (
    <>
      <form onSubmit={logIn}>
        <h2>LOg In</h2>

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
        <button>login</button>
        {error && <p>{error}</p>}
      </form>
    </>
  );
};
