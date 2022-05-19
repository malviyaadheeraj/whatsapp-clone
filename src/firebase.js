import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyClEoPs1I6UExotaL94oFLybWZDfRHw7xo",
  authDomain: "whatsapp-clone-b2178.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-b2178-default-rtdb.firebaseio.com",
  projectId: "whatsapp-clone-b2178",
  storageBucket: "whatsapp-clone-b2178.appspot.com",
  messagingSenderId: "800141505090",
  appId: "1:800141505090:web:292f54cf01056560f273db",
  measurementId: "G-1VF4J0JMHT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
