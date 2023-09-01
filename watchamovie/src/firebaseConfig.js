import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXEyCHHhfpdAL0yl9LqEbMDbNVwtOdCl0",
  authDomain: "watch-a-movie-a255a.firebaseapp.com",
  projectId: "watch-a-movie-a255a",
  storageBucket: "watch-a-movie-a255a.appspot.com",
  messagingSenderId: "747070532423",
  appId: "1:747070532423:web:a5791253439fe7e0f9ba62",
  measurementId: "G-6GQ9HDRPWB",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };
