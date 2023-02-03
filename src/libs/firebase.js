import fb from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBtY1lQhD9sQe6h9y7XT5GGvEpYWNoDOEA",
  authDomain: "tsec-hacks-e862f.firebaseapp.com",
  projectId: "tsec-hacks-e862f",
  storageBucket: "tsec-hacks-e862f.appspot.com",
  messagingSenderId: "683985696378",
  appId: "1:683985696378:web:17744077b6438eb4d46dc3",
};

if (!fb.apps.length) {
  fb.initializeApp(firebaseConfig);
} else {
  fb.app(); // if already initialized, use that one
}

export const firebase = fb;
export const firestore = fb.firestore();
