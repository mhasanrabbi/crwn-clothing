import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBlEgfncYY5E2kcCIU3Llii8RyF_EAndD8",
  authDomain: "crwn-db-65a65.firebaseapp.com",
  projectId: "crwn-db-65a65",
  storageBucket: "crwn-db-65a65.appspot.com",
  messagingSenderId: "543034943507",
  appId: "1:543034943507:web:45b323ad07ed0af60a77e6"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;