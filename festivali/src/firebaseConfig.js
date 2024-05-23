import {getDatabase} from 'firebase/database';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA91Be_4_hYqe8y7qSAAwu6Mxh2Dm8PnaY",
  authDomain: "festivali-7f844.firebaseapp.com",
  databaseURL: "https://festivali-7f844-default-rtdb.firebaseio.com",
  projectId: "festivali-7f844",
  storageBucket: "festivali-7f844.appspot.com",
  messagingSenderId: "511555493495",
  appId: "1:511555493495:web:e04e00b0fe32ece647f072"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
