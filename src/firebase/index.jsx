// import { auth } from "firebase";
// import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getFirestore, query, getDocs, collection, where, addDoc ​​} from "firebase/firestore";
  

const firebaseConfig = {
  apiKey: "AIzaSyCi2Hf9lP8HgOg5YUWiSmZtthiBhtUlkmY",
  authDomain: "linkedin-clone-309c4.firebaseapp.com",
  projectId: "linkedin-clone-309c4",
  storageBucket: "linkedin-clone-309c4.appspot.com",
  messagingSenderId: "712626746292",
  appId: "1:712626746292:web:356882626e87abd7e238e1",
};

const app = ​​initializeApp(firebaseConfig);
​​const auth = getAuth(app);
​​const db = getFirestore(app);
const Provider = new firebase.auth.GoogleAuthProvider();
const storage = getFirestore.storage();

export { auth, Provider, storage };
export default db;
