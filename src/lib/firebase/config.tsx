const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyASX_F0QNte7BX7PHH__kdLCxFqa_YbTgg",
  authDomain: "where-can-i-play.firebaseapp.com",
  projectId: "where-can-i-play",
  storageBucket: "where-can-i-play.appspot.com",
  messagingSenderId: "581176185054",
  appId: "1:581176185054:web:ea10229ed2903175c6324f",
};

const FirebaseApp = initializeApp({
  credential: applicationDefault()
});

export default FirebaseApp;