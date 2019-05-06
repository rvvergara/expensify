import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAYHlbBAcByEshcB8qKl8uh08dMri1DWhI',
  authDomain: 'expensify-48e5e.firebaseapp.com',
  databaseURL: 'https://expensify-48e5e.firebaseio.com',
  projectId: 'expensify-48e5e',
  storageBucket: 'expensify-48e5e.appspot.com',
  messagingSenderId: '404045962273',
  appId: '1:404045962273:web:e0a4b4bb2f67bd20',
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

// database.ref('expenses').push({
//   description: 'Food',
//   amount: 6514,
//   createdAt: 6554117,
//   note: 'Lunch',
// });

database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_changed', snapshot => console.log(snapshot.key, snapshot.val()));

// database.ref('expenses').on('child_added', snapshot => console.log(snapshot.key, snapshot.val()));

// database.ref('expenses').push({
//   description: 'Learning',
//   amount: 22667,
//   createdAt: 1125547,
//   note: 'Books',
// });

database.ref('expenses/-LeAXpF4JifXvq-pCGaC').remove();

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
