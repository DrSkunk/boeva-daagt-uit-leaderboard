import firebase from "firebase/app";
import "firebase/database";

export const firebaseConfig = {
  apiKey: "AIzaSyBKd-rnkVZ0lCdmgTlw0VWjgXb_9rTyhos",
  authDomain: "boeva-daagt-uit.firebaseapp.com",
  projectId: "boeva-daagt-uit",
  storageBucket: "boeva-daagt-uit.appspot.com",
  messagingSenderId: "1028231487792",
  appId: "1:1028231487792:web:4ca2724a5c00f40958e8f5",
  databaseURL:
    "https://boeva-daagt-uit-default-rtdb.europe-west1.firebasedatabase.app",
};

firebase.initializeApp(firebaseConfig);

export const database = firebase.database();
