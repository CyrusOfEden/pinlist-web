import "firebase/auth"
import "firebase/messaging"
import "firebase/storage"
import "firebase/remote-config"
import "firebase/analytics"
import "firebase/functions"

import firebase from "firebase/app"

// Client
export const client = firebase

// App
export const app = firebase.initializeApp({
  apiKey: "AIzaSyB2vs-ui9JDaWO3B5APk-B7mTgq3-1ajcU",
  authDomain: "volume-pinlist.firebaseapp.com",
  databaseURL: "https://volume-pinlist.firebaseio.com",
  projectId: "volume-pinlist",
  storageBucket: "volume-pinlist.appspot.com",
  messagingSenderId: "261346201971",
  appId: "1:261346201971:web:e25bade14ed5cc44eeb506",
  measurementId: "G-KB084NXVRP",
})

// Analytics
export const analytics = firebase.analytics()

// Storage
export const storage = firebase.storage()

// Remote Config
export const config = firebase.remoteConfig()
config.defaultConfig = {}
config.settings = {
  fetchTimeoutMillis: 5 * 1000, // 5 seconds
  minimumFetchIntervalMillis: 60 * 60 * 1000, // 1 hour
}

// Auth
export const auth = firebase.auth()

// Functions
if (process.env.NODE_ENV === "development") {
  firebase.functions().useFunctionsEmulator("http://localhost:5001")
}
export const rpc = (name: string) => firebase.functions().httpsCallable(name)
