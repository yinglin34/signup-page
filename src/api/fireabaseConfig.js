import { initializeApp } from "firebase/app";
import {API_KEY,AUTH_DOMAIN,PROJECT_ID,STORAGE_BUCKET,MESSAGING_SENDER_ID,APP_ID,MEASUREMENT_ID} from "@env"
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: 'AIzaSyCFNuP3-nLCwgGcdVHbwbE0BFf8KigXePw',
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID,
    measurementId: MEASUREMENT_ID
  
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
module.exports = db