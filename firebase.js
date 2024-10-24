// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHx_uLyf2MfFJuZBV-9JX_OhfSGTZQPAM",
  authDomain: "speakto-a137e.firebaseapp.com",
  projectId: "speakto-a137e",
  storageBucket: "speakto-a137e.appspot.com",
  messagingSenderId: "559604594373",
  appId: "1:559604594373:web:eebaae186fd13b13ce62ac",
  measurementId: "G-50RT63CSHE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
