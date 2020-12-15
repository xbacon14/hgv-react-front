import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


const app = firebase.initializeApp({
    apiKey: "AIzaSyAS_cpWxwqCtufsKnmZRcsBeDqmXZWAPJY",
    authDomain: "hgv-react.firebaseapp.com",
    databaseURL: "https://hgv-react.firebaseio.com",
    projectId: "hgv-react",
    storageBucket: "hgv-react.appspot.com",
    messagingSenderId: "629666576110",
    appId: "1:629666576110:web:056fa38d809e1ce82c25ff",
    measurementId: "G-5Q68PGB60R"
});

export const login = async (email, password) => {
    const user = await firebase.auth().signInWithEmailAndPassword(email, password).catch(err => {
        console.log(err);
        return err;
    });
    return user;
}

export const signup = async (email, password) => {
    const user = await firebase.auth().createUserWithEmailAndPassword(email, password).catch(err => {
        console.log(err);
        return err;
    });
    return user;
}

export const logout = async () => {
    return await firebase.auth().signOut();
}

export const auth = app.auth();
export const db = app.firestore();
export const timestamp = firebase.firestore.FieldValue.serverTimestamp();
// db.settings({ timestampsInSnapshots: true });

// //Initialize Firebase
// const provider = firebase.auth.GoogleAuthProvider();
// export const auth = firebase.auth();

// export const signInWithGoogle = () => {
//     auth.signInWithPopup(provider);
// }

