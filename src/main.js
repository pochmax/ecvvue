import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import { initializeApp } from "firebase/app";
// import firebase from "firebase";
import firebase from "firebase/compat/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnT0I-PzhxhzkclVL6z9X6qjnn6sGTHtY",
  authDomain: "ecvvue.firebaseapp.com",
  projectId: "ecvvue",
  storageBucket: "ecvvue.appspot.com",
  messagingSenderId: "211808626618",
  appId: "1:211808626618:web:36c455ea14690ef7e6df83",
  measurementId: "G-HZK9Y0N7LF",
};

firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount("#app");

// const db = getFirestore(firebase.initializeApp(firebaseConfig));

// Get a list of cities from your database
export async function getProjets(
  db = getFirestore(firebase.initializeApp(firebaseConfig))
) {
  const projetsCol = collection(db, "projets");
  const projetSnapshot = await getDocs(projetsCol);
  const projetList = projetSnapshot.docs.map((doc) => doc.data());
  return projetList;
}
