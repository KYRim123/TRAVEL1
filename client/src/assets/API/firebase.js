// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDXcgP8Kg5rW9WPS-MdLNdOlImlQNITmrI",
  authDomain: "data-9dce4.firebaseapp.com",
  databaseURL: "https://data-9dce4-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "data-9dce4",
  storageBucket: "data-9dce4.appspot.com",
  messagingSenderId: "230739217577",
  appId: "1:230739217577:web:35258f6b64079fa81dedb8",
  measurementId: "G-1JXCP70FMW"
};


const app = initializeApp(firebaseConfig);
export const Database = getDatabase(app);