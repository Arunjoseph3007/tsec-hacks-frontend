import fb from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

if (!fb.apps.length) {
  fb.initializeApp(firebaseConfig);
} else {
  fb.app(); // if already initialized, use that one
}

export const firebase = fb;
export const firestore = fb.firestore();
