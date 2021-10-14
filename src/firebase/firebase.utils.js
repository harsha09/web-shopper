import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDLmACbpYrVlBkWr4yRwed1NE8ZHzFu8Ok",
  authDomain: "web-shopper.firebaseapp.com",
  projectId: "web-shopper",
  storageBucket: "web-shopper.appspot.com",
  messagingSenderId: "1009615667812",
  appId: "1:1009615667812:web:638e404874ac5873485571",
  measurementId: "G-7ENMQX1NBV",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const authProvider = new firebase.auth.GoogleAuthProvider();
authProvider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => {
  console.log("sign-in with google");
  return auth.signInWithPopup(authProvider);
};

export default firebase;
