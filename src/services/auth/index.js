import EventEmitter from 'events';
const isloggedIn = 'isLoggedIn';
const Userinfo = 'userinfo';
import firebase from 'firebase';
class Auth extends EventEmitter {
    authToken = null
    userProfile = null
    tokenExpiry = null
    // Login With Firebase
    async login(email, password) {


        await firebase.auth().signInWithEmailAndPassword(email, password).then(async (authResult) => {
            // this.tokenExpiry = new Date();
            // localStorage.setItem(loginExpiryKey, this.tokenExpiry);

            localStorage.setItem(isloggedIn, 'true');
            localStorage.setItem(Userinfo, JSON.stringify({
                displayName: authResult.user.displayName,
                email: authResult.user.email,
                id: authResult.user.uid,
                photoURL: authResult.user.photoURL,
            }))
        })

    }

    async signUp(email, password) {


        await firebase.auth().createUserWithEmailAndPassword(email, password).then(async (authResult) => {
            // this.tokenExpiry = new Date();
            // localStorage.setItem(loginExpiryKey, this.tokenExpiry);

            localStorage.setItem(isloggedIn, 'true');
            localStorage.setItem(Userinfo, JSON.stringify({
                displayName: authResult.user.displayName,
                email: authResult.user.email,
                id: authResult.user.uid,
                photoURL: authResult.user.photoURL,
            }))
        })

    }

    async Logout() {
        await firebase.auth().signOut()
    }

}

export default new Auth();