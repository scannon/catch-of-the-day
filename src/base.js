import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAGhrMN-7HRD-Nqb2rm8TWF7WCGjqEYeJY",
  authDomain: "catch-of-the-day-sean-cannon.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-sean-cannon-default-rtdb.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
