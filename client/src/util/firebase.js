import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyChSXTSYZm0-EqrOhVbnP9FNopgEifCqu4",
    authDomain: "incridemo.firebaseapp.com",
    projectId: "incridemo",
    storageBucket: "incridemo.appspot.com",
    messagingSenderId: "599759960850",
    appId: "1:599759960850:web:0c378639e025467c15d1cb"
  };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

