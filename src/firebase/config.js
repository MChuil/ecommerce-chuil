import { initializeApp } from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyD7Ms_kY64do12pVU8km3TVCyKE_aT37hY",
    authDomain: "ecommerce-aab18.firebaseapp.com",
    projectId: "ecommerce-aab18",
    storageBucket: "ecommerce-aab18.appspot.com",
    messagingSenderId: "896388292689",
    appId: "1:896388292689:web:bd3976fa1a5c406608d870"
};

const app = initializeApp(firebaseConfig)

const initFirebase = ()=> app

export {
    initFirebase
}