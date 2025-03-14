import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";
import "firebase/compat/auth";

export var config = {
  apiKey: "AIzaSyAkN8jS56yewgvWxHROexKPCPBxJgWAhg4",
  authDomain: "ict-2022.firebaseapp.com",
  projectId: "ict-2022",
  storageBucket: "ict-2022.appspot.com",
  messagingSenderId: "215040538367",
  appId: "1:215040538367:web:3f986d47d5dbb9615b7eca",
  measurementId: "G-3QW447FD9C"
};

// Get a Firestore instance
firebase.initializeApp(config);
export const db = firebase.firestore();
export const storage = firebase.storage();
export const auth = firebase.auth();

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore;
export { Timestamp, GeoPoint };
