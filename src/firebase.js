import firebase from "firebase/app";
import "firebase/auth"

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAbMRn9cm_3h4MwFvSeTNuV0wB9RY_1MBY",
    authDomain: "amingram-de47f.firebaseapp.com",
    projectId: "amingram-de47f",
    storageBucket: "amingram-de47f.appspot.com",
    messagingSenderId: "729152575381",
    appId: "1:729152575381:web:b76548e5a64a05eb95c89c",
  })
  .auth();
