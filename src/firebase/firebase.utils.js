import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {

  apiKey: "AIzaSyBvNTbDWdDI5pTdZJE67rMQFlt2NR-45c8",

  authDomain: "gym-website-8ac34.firebaseapp.com",

  projectId: "gym-website-8ac34",

  storageBucket: "gym-website-8ac34.appspot.com",

  messagingSenderId: "1077394805375",

  appId: "1:1077394805375:web:112e3cdfd01f5400ae254a",

  measurementId: "G-SETREYQF53"

  
  };

  const docs = null;

  export const getUserSub = async (userAuth) => {
    if (!userAuth) return;

    const userSub = firestore.collection(`users/${userAuth.uid}/subscription`);

    const snapShot = await userSub.get();
    

    snapShot.forEach((doc, ) => {
      docs = doc.data();
      console.log(doc.data())
    })
    console.log(docs)
    return(docs.undefined);
    
  }




export const createrUserSubscription = async (userAuth, packageType,  additionalData) => {
  if (!userAuth) return;

  if (packageType === null) return;

  const userSub = firestore.doc(`users/${userAuth.uid}/subscription/${packageType}`);
    

  const snapShot = await userSub.get();

    if(!snapShot.exists) {
    const createdAt = new Date();
    try{
      await userSub.set({
        createdAt,
        packageType,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating subsription', error.message);
    }
  }

  return userSub;
  

  
}

export const createUserProfileDocument = async (userAuth,  additionalData) => {
  if (!userAuth) return;


  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const  snapShot = await userRef.get();

  if (!snapShot.exists) {
    const {  email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);








export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;