import firebase  from 'firebase/compat/app';

import "firebase/compat/auth";
import 'firebase/compat/firestore'
// import "firebase/compat/query";
// import "firebase/compat/onSnapshot";
// import "firebase/compat/collection";
// import { initializeApp } from "firebase/app";
// import { getFirestore} from "firebase/firestore";
// import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAWsg6cxFJU78Wjb9Bm3vQI1BDkbmXpVg4",
    authDomain: "fb-clone-3caa6.firebaseapp.com",
    projectId: "fb-clone-3caa6",
    storageBucket: "fb-clone-3caa6.appspot.com",
    messagingSenderId: "470652509855",
    appId: "1:470652509855:web:f569c5f143e5c0778c0caa",
    measurementId: "G-VFZ94NM7DS"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore() 
  const auth = firebaseApp.auth()
  //  const onSnapshot =firebaseApp.onSnapshot()
  //  const query =firebaseApp.query()
  // const collection =firebaseApp.collection()
  const provider = new firebase.auth.GoogleAuthProvider() 

  // const firebaseApp = initializeApp(firebaseConfig);
  // const db = getFirestore(firebaseApp) 
  // const auth = getAuth()
  // const provider = auth.GoogleAuthProvider() 
  export {auth, db, provider}
 // export {auth, db, provider}
 export default firebase;