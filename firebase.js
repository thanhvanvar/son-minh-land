// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClPdV4-NWmpk6km0bNQM7GBntW-qngs7Y",
  authDomain: "sonkimland-5d255.firebaseapp.com",
  databaseURL: "https://sonkimland-5d255-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sonkimland-5d255",
  storageBucket: "sonkimland-5d255.appspot.com",
  messagingSenderId: "988570975578",
  appId: "1:988570975578:web:d28514de2c9a7080a4c763",
  measurementId: "G-FJJXCZF5VY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);