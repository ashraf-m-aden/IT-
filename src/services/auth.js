import EventEmitter from "events";
const isloggedIn = "isLoggedIn";
import { db, fb } from "../../db";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
class Auth extends EventEmitter {
  authToken = null;
  userProfile = null;
  tokenExpiry = null;
  // Login With Firebase
  login(email, password) {
    return fb.auth().signInWithEmailAndPassword(email, password);
  }

  async signUp(email, password) {
    return fb
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (authResult) => {
        // this.tokenExpiry = new Date();
        // localStorage.setItem(loginExpiryKey, this.tokenExpiry);
        const user = {
          name: "",
          age: "",
          number: "",
          formations: [],
          profession: "",
          email: authResult.user.email,
          id: authResult.user.uid,
          role: "Student",
        };
        await db.collection("users").doc(user.id).set(user); // cree dans la collection users un document qui a cet id users.id avk les donné "user"
        await authResult.user.sendEmailVerification();
        localStorage.setItem(isloggedIn, "true");
      });
  }

  async Logout() {
    await fb.auth().signOut();
  }

  getUserData(userId) {
    return db.collection("users").doc(userId).get();
  }
  async anonymous() {
    await firebase.auth().signInAnonymously();
  }
}

import { ref } from "vue";
export default new Auth();
