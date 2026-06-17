// Firebase Initialization File
// For QuickFix Provider Platform - Hyperlocal Service Marketplace

// Firebase SDK imports (using modular SDK v9+)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
  getFirestore, 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  where, 
  orderBy, 
  limit, 
  doc, 
  updateDoc, 
  deleteDoc, 
  getDoc,
  setDoc,
  serverTimestamp,
  Timestamp,
  arrayUnion,
  arrayRemove
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  sendPasswordResetEmail,
  updateProfile
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { 
  getStorage, 
  ref, 
  uploadBytes, 
  getDownloadURL, 
  listAll, 
  deleteObject 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";

// Your Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcxSH7r6Ct1MuZMt5jf1tGKXSMHYTSEHw",
  authDomain: "quickfix-907c0.firebaseapp.com",
  projectId: "quickfix-907c0",
  storageBucket: "quickfix-907c0.firebasestorage.app",
  messagingSenderId: "539102384460",
  appId: "1:539102384460:web:2d18d7c9622dd29fe63fe9",
  measurementId: "G-PERTC7G5NR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

// Firestore Collection References
const providersCollection = collection(db, "providers");
const jobsCollection = collection(db, "jobs");
const ordersCollection = collection(db, "orders");
const reviewsCollection = collection(db, "reviews");
const earningsCollection = collection(db, "earnings");
const messagesCollection = collection(db, "messages");
const notificationsCollection = collection(db, "notifications");

// Export all Firebase services
export {
  app,
  db,
  auth,
  storage,
  providersCollection,
  jobsCollection,
  ordersCollection,
  reviewsCollection,
  earningsCollection,
  messagesCollection,
  notificationsCollection,
  // Firestore functions
  collection,
  addDoc,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  doc,
  updateDoc,
  deleteDoc,
  getDoc,
  setDoc,
  serverTimestamp,
  Timestamp,
  arrayUnion,
  arrayRemove,
  // Auth functions
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  updateProfile,
  // Storage functions
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  deleteObject
};