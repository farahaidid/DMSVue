
import firebase from 'firebase'
import "firebase/storage"
import firebaseApp from 'firebase/app'
import store from '../../store'

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
export const FIREBASE = firebaseApp
export const DB = app.firestore()

const st = app.storage().ref()
export const STORAGE = st


/* FIREBASE AUTH STARTS */

firebase.auth().onIdTokenChanged(function(user) {
  if (user) {
    let u = firebase.auth().currentUser
    console.log(u);
    let obj = {
      uid: u.uid,
      email: u.email,
      displayName: u.displayName,
      photoURL: u.photoURL,
      phoneNumber: u.phoneNumber,
    }
    store.commit("AUTH/SET_FIREBASE_USER",obj)
  }else{
    store.commit("AUTH/CLEAR_AUTH_DATA",null)
    store.commit("ENTRY/CLEAR_ENTRY_DATA",null)
  }
 });

/* FIREBASE AUTH ENDS */