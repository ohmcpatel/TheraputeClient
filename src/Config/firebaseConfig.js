// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDoc, setDoc, doc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBw8PHjga33D3rRrgGakxxeJDSp9cCJwjw",
  authDomain: "therapute-28a65.firebaseapp.com",
  projectId: "therapute-28a65",
  storageBucket: "therapute-28a65.appspot.com",
  messagingSenderId: "51911317619",
  appId: "1:51911317619:web:65109d32a8db4ae95e3206",
  measurementId: "G-NRC0B10GVC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to add a new user
export async function addUser(email, password, username, isActive, therapist) {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        email: email,
        password: password,
        username: username,
        isActive: isActive,
        history: [],
        therapist: therapist
      });
      console.log("User added with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding user: ", e);
    }
  }
  
  // Function to get user by username
  export async function getUserByEmail(email) {
    try {
      const querySnapshot = await getDoc(doc(db, "users", email));
      console.log("query", querySnapshot.exists());
      if (querySnapshot.exists()) {
        return querySnapshot.data();
      } else {
        return null;
      }
    } catch (e) {
      console.error("Error getting user: ", e);
      return null;
    }
  }
  
  // Function to update user's history
  export async function updateUserHistory(username, exerciseId, grade) {
    try {
      const userRef = doc(db, "users", username);
      await setDoc(userRef, { history: { [exerciseId]: { grade: grade } } }, { merge: true });
      console.log("User's history updated!");
    } catch (e) {
      console.error("Error updating user's history: ", e);
    }
  }

  export async function signInUserWithEmailAndPassword(email, password) {
    try {
      const user = await getUserByEmail(email); // Get user data from Firestore
      if (user && user.password === password) { // Check if user exists and password matches
        console.log("User signed in successfully!");
        return true; // Sign in user if password matches
      } else {
        throw new Error(user, user.password, password); // Throw error if password doesn't match
      }
    } catch (error) {
      console.error("Error signing in: ", error);
      throw error;
    }
  }