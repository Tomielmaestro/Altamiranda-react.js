// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhcVKc-KZxvTFPZYrVpyE5FQ2poaGXRRs",
  authDomain: "my-ecommerce-alt.firebaseapp.com",
  projectId: "my-ecommerce-alt",
  storageBucket: "my-ecommerce-alt.appspot.com",
  messagingSenderId: "355549907972",
  appId: "1:355549907972:web:ec68f10dcaeef1556a3951",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
