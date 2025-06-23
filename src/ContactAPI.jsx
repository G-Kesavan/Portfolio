import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATK7cK8dSq4tBDZWXlsWUD2dYm6Qv9lyU",
  authDomain: "mr-kesavan.firebaseapp.com",
  projectId: "mr-kesavan",
  storageBucket: "mr-kesavan.firebasestorage.app",
  messagingSenderId: "363917898359",
  appId: "1:363917898359:web:85daa16c29cccea4650c72"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export{db};