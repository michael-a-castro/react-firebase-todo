

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB3LLTHeFSWKwPCPAJY-1DO_dw_Wz_fVgg",
    authDomain: "react-todo-app-6c4ea.firebaseapp.com",
    databaseURL: "https://react-todo-app-6c4ea.firebaseio.com",
    projectId: "react-todo-app-6c4ea",
    storageBucket: "react-todo-app-6c4ea.appspot.com",
    messagingSenderId: "1042582801726",
    appId: "1:1042582801726:web:a0cc8899ca7288370d306f",
    measurementId: "G-18VXH9E50E"
});

const db = firebaseApp.firestore();

export default db;