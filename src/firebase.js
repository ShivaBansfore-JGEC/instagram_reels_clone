import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

firebase.initializeApp(
    {
        apiKey: "AIzaSyDm8VZLHJq_VMpHMxiGK7K6NWsgGoSP3p8",
        authDomain: "intagram-reels.firebaseapp.com",
        projectId: "intagram-reels",
        storageBucket: "intagram-reels.appspot.com",
        messagingSenderId: "29241078412",
        appId: "1:29241078412:web:9c0659175df1754495c1a9"
      }    
)

export const auth = firebase.auth();

const firestore = firebase.firestore();

export const database={
    user:firestore.collection('users'),
    getCurrentTimeStamp:firebase.firestore.FieldValue.serverTimestamp
}

export const storage = firebase.storage();

export default firebase;