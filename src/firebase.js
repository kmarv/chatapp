import firebase from "firebase/app"
import "firebase/auth"

export const auth = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional

    apiKey: "AIzaSyCCTKcYFNMa_R0jTBE6gKxFAkGrD_JB-oM",
    authDomain: "chatapp-55255.firebaseapp.com",
    projectId: "chatapp-55255",
    storageBucket: "chatapp-55255.appspot.com",
    messagingSenderId: "202988540571",
    appId: "1:202988540571:web:0dd317b40dfba4bed82c3e",
    measurementId: "G-B2JG31ETES"
  
}).auth();