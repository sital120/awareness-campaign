import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// import "firebase/compat/storage";

const config = {
  apiKey: "AIzaSyAw1Vcy83UPLWgeg5PGc3UilUAI_kuh_6c",
  authDomain: "awareness-campaign-deaaf.firebaseapp.com",
  projectId: "awareness-campaign-deaaf",
  storageBucket: "awareness-campaign-deaaf.appspot.com",
  messagingSenderId: "113461131056",
  appId: "1:113461131056:web:a9a01936c4a84b16053af5"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export default firebase;
