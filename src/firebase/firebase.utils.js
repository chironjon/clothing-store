import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD5IpwW4eO_uik53v9C69NGPeVztFgmf-w",
    authDomain: "crown-data-7cce8.firebaseapp.com",
    databaseURL: "https://crown-data-7cce8.firebaseio.com",
    projectId: "crown-data-7cce8",
    storageBucket: "crown-data-7cce8.appspot.com",
    messagingSenderId: "1009662916203",
    appId: "1:1009662916203:web:b1d3d80d051ef79c06a32e",
    measurementId: "G-8SWRM2REGL"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if(!snapShot.exists) {
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
			console.log('error creating user', error.message);
		}
	}

	return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;