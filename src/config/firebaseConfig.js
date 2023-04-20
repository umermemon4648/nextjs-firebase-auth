// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6hU_1m7YBG92EOawOgqqiQ04oYbGFNXk",
  authDomain: "nxtjs-firebase-auth.firebaseapp.com",
  projectId: "nxtjs-firebase-auth",
  storageBucket: "nxtjs-firebase-auth.appspot.com",
  messagingSenderId: "738195959316",
  appId: "1:738195959316:web:ec847d748d0515b6a60101",
  measurementId: "G-C6YHLXTT53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const fbProvider = new FacebookAuthProvider()
export const githubProvider = new GithubAuthProvider()