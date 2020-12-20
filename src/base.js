import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "YOUR API KEY",
    authDomain: "YOUR AUTH DOMAIN NAME",
    projectId: "ID",
    storageBucket: "BUCKET",
    messagingSenderId: "MSG ID",
    appId: "APP ID",
    measurementId: "M ID"
  };

// initialize firebase
const app = firebase.initializeApp(firebaseConfig);
export default app;
