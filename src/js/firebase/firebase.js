import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
  database as default,
  firebase,
  googleAuthProvider,
};

// database.ref('expenses').push({
//   description: 'Food',
//   amount: 6514,
//   createdAt: 6554117,
//   note: 'Lunch',
// });

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', snapshot => console.log(snapshot.key, snapshot.val()));

// database.ref('expenses').on('child_added', snapshot => console.log(snapshot.key, snapshot.val()));

// database.ref('expenses').push({
//   description: 'Learning',
//   amount: 22667,
//   createdAt: 1125547,
//   note: 'Books',
// });

// database.ref('expenses/-LeAXpF4JifXvq-pCGaC').remove();

// database.ref('expenses/-LeAXpF4JifXvq-pCGaC').update({
//   description: 'Offering and gifts',
// });

// const onChange = (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val(),
//     });
//   });
//   console.log(expenses);
// };

// database.ref('expenses')
//   .on('value', onChange);
