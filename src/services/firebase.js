import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyAS_cpWxwqCtufsKnmZRcsBeDqmXZWAPJY",
    authDomain: "hgv-react.firebaseapp.com",
    databaseURL: "https://hgv-react.firebaseio.com",
    projectId: "hgv-react",
    storageBucket: "hgv-react.appspot.com",
    messagingSenderId: "629666576110",
    appId: "1:629666576110:web:056fa38d809e1ce82c25ff",
    measurementId: "G-5Q68PGB60R"
};
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();
// Initialize Firebase
// const provider = firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

// export const signInWithGoogle = () => {
//     auth.signInWithPopup(provider);
// }