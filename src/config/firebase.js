import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChzNZ3rV3XMgmD8vYSNnaDyJPn_5IsGaY",
  authDomain: "fir-course2-bdb6f.firebaseapp.com",
  projectId: "fir-course2-bdb6f",
  storageBucket: "fir-course2-bdb6f.appspot.com",
  messagingSenderId: "782367104244",
  appId: "1:782367104244:web:c450862e05e0a3347912a1",
  measurementId: "G-PETZ38VJGD",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
