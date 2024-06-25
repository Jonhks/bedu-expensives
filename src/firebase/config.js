// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD01VyxPNo-BLOCtIDAHxQ4n7GDrsOst1E",
  authDomain: "react-bedu-users.firebaseapp.com",
  databaseURL: "https://react-bedu-users-default-rtdb.firebaseio.com",
  projectId: "react-bedu-users",
  storageBucket: "react-bedu-users.appspot.com",
  messagingSenderId: "132421330915",
  appId: "1:132421330915:web:831736019ca040c9bfa2d6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
