import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCt56dtzgmXOc7X9EC-cCHJXS-sgoC7w10',
	authDomain: 'whitelist-develop.firebaseapp.com',
	projectId: 'whitelist-develop',
	storageBucket: 'whitelist-develop.appspot.com',
	messagingSenderId: '147656100669',
	appId: '1:147656100669:web:aadd7df349028f35db1354',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
