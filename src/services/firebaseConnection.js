import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
import 'firebase/compat/storage'


let firebaseConfig = {
    apiKey: "AIzaSyCF3I6dOn5LPuIOOpToNZqVOsStYSnxDG0",
    authDomain: "sistema-c2e39.firebaseapp.com",
    projectId: "sistema-c2e39",
    storageBucket: "sistema-c2e39.appspot.com",
    messagingSenderId: "185486485621",
    appId: "1:185486485621:web:e5d270c61bba58b6b0f03c",
    measurementId: "G-KR5Q6Z1SVS"
  };

  if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig)
  }

  export default firebase