// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA0CBChj2U7xHWdTm2aeUnCPtakrg7HnQU",
    authDomain: "p-hero-assignment-10.firebaseapp.com",
    projectId: "p-hero-assignment-10",
    storageBucket: "p-hero-assignment-10.appspot.com",
    messagingSenderId: "373915111045",
    appId: "1:373915111045:web:1f6110d8381141bd3ee3ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;