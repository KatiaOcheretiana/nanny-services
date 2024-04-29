import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth, database } from "../firebase";
import { onValue, ref } from "firebase/database";
import { UserType } from "../components/Auth/SignUp/SignUp";

class NanniesService {
  async getNanniesData() {
    const dbRef = ref(database, "nannies");
    return new Promise((resolve, reject) => {
      onValue(
        dbRef,
        (snapshot) => {
          const data = snapshot.val();
          resolve(data);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  async register(values: UserType) {
    await createUserWithEmailAndPassword(
      auth,
      values.email,
      values.password
    ).then(() => {
      if (auth.currentUser !== null) {
        updateProfile(auth.currentUser, { displayName: values.name });
      }
    });
  }

  async logIn(values: UserType) {
    await signInWithEmailAndPassword(auth, values.email, values.password);
  }

  async logOut() {
    signOut(auth);
  }
}

const nanniesService = new NanniesService();

export default nanniesService;
