// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgVhxQNIQuqC_8gJk4T6HfJvVvYJkig6o",
  authDomain: "job-board-6eab1.firebaseapp.com",
  projectId: "job-board-6eab1",
  storageBucket: "job-board-6eab1.appspot.com",
  messagingSenderId: "824437214815",
  appId: "1:824437214815:web:9e26f29872d36f016955ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;