// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLolLNYd8LuYaBcUr6EEBGZQs0BfQdaRA",
  authDomain: "guestbook-7fadc.firebaseapp.com",
  projectId: "guestbook-7fadc",
  storageBucket: "guestbook-7fadc.firebasestorage.app",
  messagingSenderId: "473559051632",
  appId: "1:473559051632:web:7c69d4fc5168338ea4b3b5",
  measurementId: "G-89QCXJ9E04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


const registerWithEmailAndPassword = async (email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        console.log("✅ User created in Firebase:", user);
        return user; 
    } catch (err) {
        console.error("❌ Firebase Error:", err);
        throw err;
    }
}

const loginWithEmailAndPassword = async (email , password) => {
    try{
        const response = await signInWithEmailAndPassword (auth , email , password);
        const user = response.user;
        console.log("User Logged in :" , user);
        return user;
        
    }catch(err){
        console.log(err);
        
    }
}



export {registerWithEmailAndPassword , loginWithEmailAndPassword , auth }