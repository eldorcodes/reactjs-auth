import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAq8H_wtcxpkPpA6oGUCa_Ju5avgx6WTrw",
    authDomain: "react-chatapp-1f70f.firebaseapp.com",
    projectId: "react-chatapp-1f70f",
    storageBucket: "react-chatapp-1f70f.appspot.com",
    messagingSenderId: "1093784227778",
    appId: "1:1093784227778:web:0f955f08d1b8bed122d05b",
    measurementId: "G-V3L2VGGC96"
  };

// initialize firebase
const app = firebase.initializeApp(firebaseConfig);
export default app;