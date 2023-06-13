import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB2y-qBeHGiT5RsFfkFD2y779LGBrfMHt8",
  authDomain: "react-tescosystem.firebaseapp.com",
  projectId: "react-tescosystem",
  storageBucket: "react-tescosystem.appspot.com",
  messagingSenderId: "600931023478",
  appId: "1:600931023478:web:ed0053bc257115a53efd57"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { firebaseApp, db };

/*
Consideraciones de reglas ❗❗

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // 🅰
    match /users/{document=**} {
      allow read, write: if request.auth != null;
    }
    // 🅱
    match /posts/{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
*/