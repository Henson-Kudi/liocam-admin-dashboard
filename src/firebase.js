import firebase from 'firebase'
import 'firebase/storage'
import 'firebase/auth'

const {REACT_APP_FIREBASE_PROJECT_ID, REACT_APP_FIREBASE_APP_ID, REACT_APP_FIREBASE_STORAGE_BUCKET, REACT_APP_FIREBASE_LOCATION_ID, REACT_APP_API_KEY, REACT_APP_FIREBASE_AUTH_DOMAIN, REACT_APP_FIREBASE_MESSAGING_SENDER_ID} = process.env

const app = firebase.initializeApp({
  "projectId": 'liocam-a9722',
  "appId": '1:440140514136:web:56b5f9357e87f95981db2d',
  "storageBucket": 'liocam-a9722.appspot.com',
  "locationId": 'us-central',
  "apiKey": 'AIzaSyDryn4fgzmP2TIIXgYoOHUg9X6YdWzSQ9k',
  "authDomain": 'liocam-a9722.firebaseapp.com',
  "messagingSenderId": '440140514136'
});

export default app