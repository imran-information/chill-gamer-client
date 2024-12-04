// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAgX2IbFgmag17BMN7L0OcJ0VJbT8aS6X4",
    authDomain: "cill-gamer.firebaseapp.com",
    projectId: "cill-gamer",
    storageBucket: "cill-gamer.firebasestorage.app",
    messagingSenderId: "879176852763",
    appId: "1:879176852763:web:82d96f4170772fb731dfbe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);