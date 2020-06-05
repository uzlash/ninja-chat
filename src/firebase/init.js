import firebase from "@firebase/app";
import "@firebase/firestore";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAn6OLgyIzxlPSYt0SteyG7SZlYDfDFnWA",
  authDomain: "ninja-chat-3cd66.firebaseapp.com",
  databaseURL: "https://ninja-chat-3cd66.firebaseio.com",
  projectId: "ninja-chat-3cd66",
  storageBucket: "ninja-chat-3cd66.appspot.com",
  messagingSenderId: "640125790736",
  appId: "1:640125790736:web:b916a2d779e65b0a46f895"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// firebaseApp.firestore.settings({ timestampsInSnapshots: true });

export default firebaseApp.firestore();
