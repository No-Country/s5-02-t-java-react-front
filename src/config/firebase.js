// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPZlalwH9lfrvE3MHrkJrocpxg5sGnOqg",
  authDomain: "event-33ce4.firebaseapp.com",
  projectId: "event-33ce4",
  storageBucket: "event-33ce4.appspot.com",
  messagingSenderId: "351199910594",
  appId: "1:351199910594:web:76327b61a7f1228680795b",
  measurementId: "G-94RWHNPWFE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);

