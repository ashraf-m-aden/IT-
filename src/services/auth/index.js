import EventEmitter from 'events';
const isloggedIn = 'isLoggedIn';
const Userinfo = 'userinfo';
import firebase from 'firebase';
class Auth extends EventEmitter {
    authToken = null
    userProfile = null
    tokenExpiry = null
    // Login With Firebase
    login(email, password) {


        return firebase.auth().signInWithEmailAndPassword(email, password)

    }

    async signUp(email, password) {


        return firebase.auth().createUserWithEmailAndPassword(email, password).then(async (authResult) => {
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