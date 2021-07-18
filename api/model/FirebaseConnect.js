var firebase = require("firebase/app")
const { database } = require("firebase/app");
//dependencies of firebase authentication
require("firebase/auth");
// dependencies of firebase firestore
require("firebase/firestore");
require("firebase/analytics");
// Your web app’s Firebase configuration
var firebaseConfig = {
    /*apiKey: "AIzaSyAs9EsuTIwvopbAxDNpCbxvfXmk-lUEkx4",
    authDomain: "ownwebsite-62bf2.firebaseapp.com",
    databaseURL: "https://ownwebsite-62bf2.firebaseio.com",
    projectId: "ownwebsite-62bf2",
    storageBucket: "ownwebsite-62bf2.appspot.com",
    messagingSenderId: "351965737654",
    appId: "1:351965737654:web:d9141819a1ca63f547ac17",
    measurementId: "G-79Y1RVNQNG"*/
    apiKey: "AIzaSyAs9EsuTIwvopbAxDNpCbxvfXmk-lUEkx4",
    authDomain: "ownwebsite-62bf2.firebaseapp.com",
    projectId: "ownwebsite-62bf2",
    storageBucket: "ownwebsite-62bf2.appspot.com",
    messagingSenderId: "351965737654",
    appId: "1:351965737654:web:d9141819a1ca63f547ac17"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
module.exports=firebase;