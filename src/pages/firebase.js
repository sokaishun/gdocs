import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAoDP7BrHh_NwR8uAhA5OCCRa79abAGBKk",
  authDomain: "nextjsdemo-89df7.firebaseapp.com",
  projectId: "nextjsdemo-89df7",
  storageBucket: "nextjsdemo-89df7.appspot.com",
  messagingSenderId: "843862762838",
  appId: "1:843862762838:web:dfc50f3e9048a4c1efa2f7",
  measurementId: "G-CMFZ6LRQ7F"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth =getAuth(app);
const provider = new GoogleAuthProvider();

export {auth,provider};