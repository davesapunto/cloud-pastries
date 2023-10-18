// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDG5m4tn4eIuZfcXQOMWYZemn-secSF31Y",
  authDomain: "cloud-pastries.firebaseapp.com",
  projectId: "cloud-pastries",
  storageBucket: "cloud-pastries.appspot.com",
  messagingSenderId: "682893641469",
  appId: "1:682893641469:web:d74c3d0552a8c473b52094",
  measurementId: "G-WW83ZX613W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const initFirebase = () => {
  return app;
}