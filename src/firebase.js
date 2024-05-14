import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase } from "firebase/database";

// const key = process.env.FIREBASE_KEY;

// console.log(key);

export const firebaseConfig = {
  apiKey: "AIzaSyBWgTAltPgrrZkzWnoyFNFDlAQgfh9sw78",
  authDomain: "nanniesservices-2c7b7.firebaseapp.com",
  projectId: "nanniesservices-2c7b7",
  storageBucket: "nanniesservices-2c7b7.appspot.com",
  messagingSenderId: "445526918860",
  appId: "1:445526918860:web:c8ec2a6e515671b3ece469",
  databaseURL:
    "https://nanniesservices-2c7b7-default-rtdb.europe-west1.firebasedatabase.app/",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const database = getDatabase(app);

export async function getCurrentUser() {
  return new Promise((resolve, reject) => {
    if (auth.currentUser) {
      resolve(auth.currentUser);
      return;
    }
    const removeListener = onAuthStateChanged(
      auth,
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
}
