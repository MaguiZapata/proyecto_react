
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBZC2IiGe6fAuF0BqoJZFGfkdHaUV5dVeY",
  authDomain: "dorotea-coder.firebaseapp.com",
  projectId: "dorotea-coder",
  storageBucket: "dorotea-coder.appspot.com",
  messagingSenderId: "116604462734",
  appId: "1:116604462734:web:0eb3b867bb31b583984bdf",
  measurementId: "G-GPW4934X37"
};


const app = initializeApp(firebaseConfig);
export const firestoreInit = () => app