import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAHrC70s148xH9nNQxeIxRa14f-jaEsEz0",
  authDomain: "crown-db-31b3d.firebaseapp.com",
  databaseURL: "https://crown-db-31b3d.firebaseio.com",
  projectId: "crown-db-31b3d",
  storageBucket: "crown-db-31b3d.appspot.com",
  messagingSenderId: "284439797296",
  appId: "1:284439797296:web:40c8744d1a58d4ff8617f5"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if(!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating the user => ', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;