import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDLmACbpYrVlBkWr4yRwed1NE8ZHzFu8Ok",
  authDomain: "web-shopper.firebaseapp.com",
  projectId: "web-shopper",
  databaseURL: "https://web-shopper.firebaseio.com",
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
  return auth.signInWithPopup(authProvider);
};

export const signInWithEmailAndPassword = async (email, password) => {
  try {
    const user = await auth.signInWithEmailAndPassword(email, password);
    return user;
  } catch (error) {
    console.log("Error in signin with email and password!!!", error);
    return false;
  }
};

export const signUpWithEmailAndPassword = async (
  email,
  password,
  displayName
) => {
  try {
    const userAuth = await auth.createUserWithEmailAndPassword(email, password);
    await createUserProfileDocument(userAuth.user, { displayName });
  } catch (error) {
    console.log("Error in sign-up with email and password!!!", error);
    return false;
  }
  return true;
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdDate = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdDate,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userRef;
};

export default firebase;
