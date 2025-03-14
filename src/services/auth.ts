const isloggedIn = "isLoggedIn";
import { db, fb } from "../../db";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
class Auth {
  authToken = null;
  userProfile = null;
  tokenExpiry = null;
  // Login With Firebase
  login(email: string, password: string) {
    return fb.auth().signInWithEmailAndPassword(email, password);
  }

  async signUp(email: string, password: string) {
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
          email: authResult?.user?.email,
          id: authResult?.user?.uid,
          role: "Student",
        };
        await db.collection("users").doc(user.id).set(user); // cree dans la collection users un document qui a cet id users.id avk les donné "user"
        await authResult?.user?.sendEmailVerification();
        localStorage.setItem(isloggedIn, "true");
      });
  }

  async Logout() {
    await fb.auth().signOut();
  }

  getUserData(userId:string) {
    return db.collection("users").doc(userId).get();
  }
  async anonymous() {
    await firebase.auth().signInAnonymously();
  }
}

export default new Auth();
