import firebase from 'firebase/app';
import 'firebase/firestore'; //for storing the data in Firebase cloud
import 'firebase/auth';

// This config key is created in the Firebase account when register the Web App in the Project created in Firebase
const fbConfig ={
    apiKey: "AIzaSyD1NC1xeLsr1UGXcrmAu1qGl46ntU51L0U",
    authDomain: "crwn-db-89b64.firebaseapp.com",
    projectId: "crwn-db-89b64",
    storageBucket: "crwn-db-89b64.appspot.com",
    messagingSenderId: "808081363475",
    appId: "1:808081363475:web:5e2fb5ca51d0724220a5e6",
    measurementId: "G-2C4VMEFST3"

};

//to 
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        const lastSignedDate = userAuth.metadata.lastSignInTime;
        console.log(lastSignedDate);
        const providerId = userAuth.providerId;

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                lastSignedDate,
                providerId,
                ...additionalData
            });
        }
        catch(error){
            console.log('error creating user : ', error.message);
        }
    }
    return userRef;
    
}

//initialise the firebase app with the given Configuration
firebase.initializeApp(fbConfig);

export const auth=firebase.auth();
export const firestore = firebase.firestore();

//using the Google Authentification
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

//expose this method for use
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;