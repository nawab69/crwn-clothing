import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD7WFPLBxEs7QiQSmFbRifggjblboQzC-Q",
    authDomain: "crwn-db-6d03c.firebaseapp.com",
    databaseURL: "https://crwn-db-6d03c.firebaseio.com",
    projectId: "crwn-db-6d03c",
    storageBucket: "crwn-db-6d03c.appspot.com",
    messagingSenderId: "1016144045346",
    appId: "1:1016144045346:web:8f6684bc7c29aa6982f17b",
    measurementId: "G-XGBCVYF7YV"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({promt : 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;