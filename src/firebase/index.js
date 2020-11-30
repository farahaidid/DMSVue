
import firebase from 'firebase'
import "firebase/storage"
import firebaseApp from 'firebase/app'
import store from '../store'

let config = {
  apiKey: "AIzaSyCYkogFSJDKfYTrsBVEhawApiX24S4K0Go",
  authDomain: "digital-marketing-servicex.firebaseapp.com",
  databaseURL: "https://digital-marketing-servicex.firebaseio.com",
  projectId: "digital-marketing-servicex",
  storageBucket: "digital-marketing-servicex.appspot.com",
  messagingSenderId: "425074983983",
  appId: "1:425074983983:web:87e05475909a38c5baf2da",
  measurementId: "G-WP8H7QZ99W"
}

let app = firebase.initializeApp(config);
export const FIREBASE = app
export const DB = app.firestore()

const st = app.storage().ref()
export const STORAGE = st


/* FIREBASE AUTH STARTS */

app.auth().onIdTokenChanged(function(user) {
  if (!user) {
    store.commit("AUTH/CLEAR_AUTH_DATA",null)
    store.commit("AUTH/LOGOUT")
  }
 });

/* FIREBASE AUTH ENDS */