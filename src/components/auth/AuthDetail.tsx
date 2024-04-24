import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../firebase";

export const AuthDetails = () => {
  const [authUser, setAuthUser] = useState<any>(null);

  console.log(authUser);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  const userSignedOut = () => {
    signOut(auth)
      .then(() => {
        console.log("success");
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      {authUser ? (
        <div>
          {" "}
          <h3>{authUser.displayName}</h3>{" "}
          <button onClick={userSignedOut}>Sign out</button>
        </div>
      ) : (
        <p>Signed out</p>
      )}
    </>
  );
};
