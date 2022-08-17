// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq57tG5FxEBL41Hh5NiZl6bR7tfX5M6zQ",
  authDomain: "backend-e-commerce-reactjs.firebaseapp.com",
  projectId: "backend-e-commerce-reactjs",
  storageBucket: "backend-e-commerce-reactjs.appspot.com",
  messagingSenderId: "1004391483216",
  appId: "1:1004391483216:web:82eea5e799a9b189248e55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)