
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDIXYby8ZYs4cUoUv4QCy9hjXNjVyF42Ng",
	authDomain: "festival-4808f.firebaseapp.com",
	projectId: "festival-4808f",
	storageBucket: "festival-4808f.appspot.com",

	messagingSenderId: "373610534544",

	appId: "1:373610534544:web:2bba6ebbfa30a482486a15"
};

             // Initialize Firebase 
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

