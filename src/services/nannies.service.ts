import { database } from "../firebase";
import { onValue, ref } from "firebase/database";

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
}

export default new NanniesService();
