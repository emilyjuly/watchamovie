import { db } from "../firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";

class firebaseService {
  static async createSearch(search) {
    try {
      const { data } = await addDoc(collection(db, "searchs"), {
        content: search,
        date_created: Date(),
      });
      return data;
    } catch (error) {
      return error;
    }
  }

  static async getSearchs() {
    const ref = collection(db, "searchs");

    const snapshot = await getDocs(ref);

    const data = [];

    snapshot.forEach((doc) => {
      data.push(doc.data().content);
    });

    return data;
  }
}

export default firebaseService;
