import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCLB6rkbe-oC4_TaxISeRlp_J2CoXJaRVc",
  authDomain: "ecommerce-57800-97538.firebaseapp.com",
  projectId: "ecommerce-57800-97538",
  storageBucket: "ecommerce-57800-97538.appspot.com",
  messagingSenderId: "100377450543",
  appId: "1:100377450543:web:b37b82f59aa78766894eda"
};
// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db