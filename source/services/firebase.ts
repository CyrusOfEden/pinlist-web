import "firebase/auth"
import "firebase/messaging"
import "firebase/storage"
import "firebase/remote-config"
import "firebase/analytics"

import firebase from "firebase/app"

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
export const analytics = firebase.analytics()
export const auth = firebase.auth()
export const configuration = ((config) => {
  config.defaultConfig = {}

  config.settings = {
    fetchTimeoutMillis: 5 * 1000, // 5 seconds
    minimumFetchIntervalMillis: 60 * 60 * 1000, // 1 hour
  }
  return config
})(firebase.remoteConfig())
export const storage = firebase.storage()

export { firebase }
