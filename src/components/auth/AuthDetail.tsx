import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../firebase";
import nanniesService from "../../services/nannies.service";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const AuthDetails = () => {
  const [authUser, setAuthUser] = useState<any>(null);
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        console.log(user);

        setUserName(user?.displayName || "");
      } else {
        setAuthUser(null);
        setUserName("");
      }
    });
    return () => {
      listen();
    };
  }, []);

  const mutation = useMutation({
    mutationFn: nanniesService.logOut,
    onError: () => {
      toast.error("Something went wrong. Please try again.");
    },
  });

  return (
    <>
      {authUser && (
        <div>
          <h3>{userName}</h3>
          <button onClick={() => mutation.mutate()}>Sign out</button>
        </div>
      )}
    </>
  );
};
