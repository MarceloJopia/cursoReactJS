import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDpLZJMUGZMzcqi9ErN_GeicV5SjZ3FlEY",
  authDomain: "productos-ecommerce-coderhouse.firebaseapp.com",
  projectId: "productos-ecommerce-coderhouse",
  storageBucket: "productos-ecommerce-coderhouse.appspot.com",
  messagingSenderId: "344827891965",
  appId: "1:344827891965:web:93654e5b490a4800ee2e94"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)