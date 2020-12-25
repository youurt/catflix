import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyBzYqtKr2_GGjmc6D1BLBZ6MLB-EBWBocA',
  authDomain: 'catflix-f6367.firebaseapp.com',
  projectId: 'catflix-f6367',
  storageBucket: 'catflix-f6367.appspot.com',
  messagingSenderId: '978420050340',
  appId: '1:978420050340:web:19f02eeddd023acdfcb931',
};
const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
