// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBz9PxaG-6fhmMNlcM5pPUloO0jPbSJxHg",
  authDomain: "linkedin-adf62.firebaseapp.com",
  projectId: "linkedin-adf62",
  storageBucket: "linkedin-adf62.appspot.com",
  messagingSenderId: "300315939875",
  appId: "1:300315939875:web:6edfb4261f8506a8eccd96",
  measurementId: "G-B8B4X747YE",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
