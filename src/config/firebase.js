import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';


let firebaseConfig = {
    apiKey: "AIzaSyB4QoVpiHFuw_JGQ2m3H2Y--fbmY7osZag",
    authDomain: "tutchit-b6049.firebaseapp.com",
    databaseURL: "https://tutchit-b6049.firebaseio.com",
    projectId: "tutchit-b6049",
    storageBucket: "tutchit-b6049.appspot.com",
    messagingSenderId: "916974794100",
    appId: "1:916974794100:web:6820a61dc0e49bb4c7e821"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();

  export const firestore = firebase.firestore();

  export const provider = new firebase.auth.GoogleAuthProvider();


  