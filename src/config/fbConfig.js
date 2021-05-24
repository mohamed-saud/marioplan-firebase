import * as firebase from "firebase";
// import "firebase/fiestore";
// import "firebase/aruth";
// import "firebase/firebase-database"

// Replace this with your own config details
export var config = {
  apiKey: "AIzaSyDeOIu23U1Upb1A9-tG8pCqEdQtphqfi3k",
  authDomain: "marioplan-net-ab71b.firebaseapp.com",
  projectId: "marioplan-net-ab71b",
  storageBucket: "marioplan-net-ab71b.appspot.com",
  messagingSenderId: "104315384336",
  appId: "1:104315384336:web:6850948591fc058bb1d095",
  measurementId: "G-TX8X6FYZN9",
};
firebase.initializeApp(config);

//firebase.firestore().settings();

export default firebase;
