import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'catflix-f6367.firebaseapp.com',
  projectId: 'catflix-f6367',
  storageBucket: 'catflix-f6367.appspot.com',
  messagingSenderId: '978420050340',
  appId: process.env.REACT_APP_APP_ID,
};
const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
