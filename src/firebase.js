// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDPz7ZMTEAZ87Il-xQydG7069Smwrc33io",
  authDomain: "whats-app-6d118.firebaseapp.com",
  databaseURL: "https://whats-app-6d118.firebaseio.com",
  projectId: "whats-app-6d118",
  storageBucket: "whats-app-6d118.appspot.com",
  messagingSenderId: "559269419643",
  appId: "1:559269419643:web:53671f8af71ff0d69a60de",
  measurementId: "G-NE24B3HWKQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
