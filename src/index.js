import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebase = initializeApp({
    apiKey: "AIzaSyB0rhX72Kv__d8j4bBHY6BUte4crfGmxfk",
    authDomain: "imchat-5101a.firebaseapp.com",
    projectId: "imchat-5101a",
    storageBucket: "imchat-5101a.appspot.com",
    messagingSenderId: "176522722962",
    appId: "1:176522722962:web:3b51f6123e5535b22d704b"
});
const auth = getAuth(firebaseApp);
const db = getFireStore(firebaseApp);


