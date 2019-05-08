import { firebase, googleAuthProvider } from '../firebase/firebase';

const startLogin = () => () => firebase.auth().signInWithPopup(googleAuthProvider);

export {
  startLogin,
};
