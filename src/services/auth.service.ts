import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { auth, db } from '../../firebaseConfig'
const isloggedIn = 'isLoggedIn'
class AuthService {
  authToken = null;
  userProfile = null;
  tokenExpiry = null;
  // Login With Firebase
  async login (email: string, password: string) {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        const authResult = await auth.signInWithEmailAndPassword(email, password)
        resolve(authResult)
      } catch (error) {
        reject(error)
      }
    })
  }

  async signUp (email: string, password: string) {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then(async (authResult:any) => {
        // this.tokenExpiry = new Date();
        // localStorage.setItem(loginExpiryKey, this.tokenExpiry);
        const user = {
          name: '',
          age: '',
          number: '',
          formations: [],
          profession: '',
          email: authResult?.user?.email,
          id: authResult?.user?.uid,
          role: 'Student'
        }
        await db.collection('users').doc(user.id).set(user) // cree dans la collection users un document qui a cet id users.id avk les donné "user"
        await authResult?.user?.sendEmailVerification()
        localStorage.setItem(isloggedIn, 'true')
      })
  }

  async Logout () {
    await auth.signOut()
  }

  getUserData (userId: string) {
    return db.collection('users').doc(userId).get()
  }

  async anonymous () {
    await auth.signInAnonymously()
  }
}

export default new AuthService()
