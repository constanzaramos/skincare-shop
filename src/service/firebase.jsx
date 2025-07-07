// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdCCWB4eeMQ8jZC5ZJScsZqY0HtUNioss",
  authDomain: "skincare-shop-e19f3.firebaseapp.com",
  projectId: "skincare-shop-e19f3",
  storageBucket: "skincare-shop-e19f3.firebasestorage.app",
  messagingSenderId: "430952192739",
  appId: "1:430952192739:web:6001f942bf29980911c3d6"
};

// Initialize Firebase
const App = initializeApp(firebaseConfig);

export const dataBase = getFirestore(App);
