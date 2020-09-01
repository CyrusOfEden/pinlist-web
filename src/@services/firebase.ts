import "firebase/auth"
import "firebase/storage"
import "firebase/functions"

import firebase from "firebase/app"

// Client
export const client = firebase

// App
export const app = firebase.initializeApp({
  apiKey: "AIzaSyAs6kpld3Y98M12rf7bMsRjTkIWMm1Wvjw",
  authDomain: "joyful-shopping.firebaseapp.com",
  databaseURL: "https://joyful-shopping.firebaseio.com",
  projectId: "joyful-shopping",
  storageBucket: "joyful-shopping.appspot.com",
  messagingSenderId: "82279655852",
  appId: "1:82279655852:web:f084a3ec755e9bc6a03209",
  measurementId: "G-52J4QQRL2B",
})

// Storage
export const storage = firebase.storage()

// Remote Config
// export const config = firebase.remoteConfig()
// config.defaultConfig = {}
// config.settings = {
//   fetchTimeoutMillis: 5 * 1000, // 5 seconds
//   minimumFetchIntervalMillis: 60 * 60 * 1000, // 1 hour
// }

// Auth
export const auth = firebase.auth()

// Functions
export const functions = firebase.functions()

if (process.env.NODE_ENV === "development") {
  functions.useFunctionsEmulator("http://localhost:5001")
}
export const rpc = (name: string) => functions.httpsCallable(name)
