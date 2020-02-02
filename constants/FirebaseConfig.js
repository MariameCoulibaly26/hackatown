//import * as firebase from 'firebase'
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

  // Your web app's Firebase configuration
export default firebaseConfig = {
    apiKey: "AIzaSyAP0TqVMMkYJgAyPoG8H8jKTL6bkrG29PY",
    authDomain: "hackatown20.firebaseapp.com",
    databaseURL: "https://hackatown20.firebaseio.com",
    projectId: "hackatown20",
    storageBucket: "hackatown20.appspot.com",
    messagingSenderId: "179342446001",
    appId: "1:179342446001:web:97247902a957f51c88c190"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
