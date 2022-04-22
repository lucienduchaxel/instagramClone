// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDDHEX_cbX7QVdPzvzQJJqwCOWSJaviDrQ',
  authDomain: 'my-instagram-5877d.firebaseapp.com',
  projectId: 'my-instagram-5877d',
  storageBucket: 'my-instagram-5877d.appspot.com',
  messagingSenderId: '446354986852',
  appId: '1:446354986852:web:7d6951502bc6c7dd418c71',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
