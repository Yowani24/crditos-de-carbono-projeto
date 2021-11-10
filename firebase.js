import * as firebase from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCCg3cfk-aA2G_uhtsRUO8OgUuX3HGJ7HI",
  authDomain: "onearth-app-auth.firebaseapp.com",
  databaseURL: "https://onearth-app-auth-default-rtdb.firebaseio.com",
  projectId: "onearth-app-auth",
  storageBucket: "onearth-app-auth.appspot.com",
  messagingSenderId: "21969791681",
  appId: "1:21969791681:web:97b799fbfc943f57ae8240",
});

export const auth = getAuth(app);

export default firebase;
