import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDH0xMT8BzBuIlg10fdxFkT8PeUWGhZUpo",
    authDomain: "lufthansa-6a0a1.firebaseapp.com",
    projectId: "lufthansa-6a0a1",
    storageBucket: "lufthansa-6a0a1.appspot.com",
    messagingSenderId: "553731870710",
    appId: "1:553731870710:web:0a92cc3a456d56adf9c1d7"
};


export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
