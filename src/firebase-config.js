// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcbHaI64SFFzhPNc9BFaplyVlJ7E45aDA",
  authDomain: "transformationsba.firebaseapp.com",
  projectId: "transformationsba",
  storageBucket: "transformationsba.appspot.com",
  messagingSenderId: "478525633836",
  appId: "1:478525633836:web:062a1042712cd093192889",
  measurementId: "G-CLW1M38PP5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);