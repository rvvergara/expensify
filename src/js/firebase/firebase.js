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

database.ref().set({
  name: 'RyanV',
  age: 39,
  isMarried: true,
  location: {
    city: 'Bacoor City',
    country: 'Philippines',
  },
});

// database.ref().set('This is my data');

database.ref('age').set(40);
database.ref('location/city').set('Manila');
database.ref('attributes').set({
  hobbies: ['reading', 'sports', 'coding'],
  height: '5ft 3in',
});
