// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCefrA__UTorUuaJXA-4QFMQfHXKQqJkqQ",
  authDomain: "todoapp-f5366.firebaseapp.com",
  projectId: "todoapp-f5366",
  storageBucket: "todoapp-f5366.appspot.com",
  messagingSenderId: "914926355384",
  appId: "1:914926355384:web:373e7c38468315eaab854d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)