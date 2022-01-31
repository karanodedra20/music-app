import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKZey8yhnJMdRUsAZln2IWIJ0Wk5Ypppw",
  authDomain: "music-app-5c1d7.firebaseapp.com",
  projectId: "music-app-5c1d7",
  storageBucket: "music-app-5c1d7.appspot.com",
  appId: "1:845449598567:web:616c58f33e536b7449e6c2",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const usersCollection = db.collection("users");

export { auth, db, usersCollection };