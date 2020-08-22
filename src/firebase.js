import firebase from 'firebase';
  
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCBHYXEAgR9pMgTR-_UxTd8gCHOu1rf_DA",
    authDomain: "insta-clone-cc105.firebaseapp.com",
    databaseURL: "https://insta-clone-cc105.firebaseio.com",
    projectId: "insta-clone-cc105",
    storageBucket: "insta-clone-cc105.appspot.com",
    messagingSenderId: "382700893138",
    appId: "1:382700893138:web:40ef3c999cf451c6aece0b",
    measurementId: "G-Y63DVRS5W2" 
});

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db, auth, storage };