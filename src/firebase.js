// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOA2g6m2nV2xMGaDuh7uR1GrnTGSs5oaw",
  authDomain: "aysenurertan.firebaseapp.com",
  projectId: "aysenurertan",
  storageBucket: "aysenurertan.appspot.com",
  messagingSenderId: "428740293446",
  appId: "1:428740293446:web:e3d6946055dbc718e3eb47",
  measurementId: "G-PLM3LNC99C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);