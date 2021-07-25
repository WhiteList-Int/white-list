import React, { useState, useEffect, useContext, createContext } from 'react';
import firebase from 'firebase/app';
import "firebase/auth";

var firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
  };

firebase.initializeApp(firebaseConfig);

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticating, setIsAuthenticating] = useState(true);

    const sendSignInLinkToEmail = email => {
        return firebase
          .auth()
          .sendSignInLinkToEmail(email, {
            url: 'http://localhost:3000/', //change this link later in production build
            handleCodeInApp: true,
          })
          .then(() => {
            return true;
        });
    };

    const signInWithEmailLink = (email, code) => {
        return firebase
          .auth()
          .signInWithEmailLink(email, code)
          .then(result => {
            setUser(result.user);
            return true;
        });
    };

    const logout = () => {
        return firebase
          .auth()
          .signOut()
          .then(() => {
            setUser(null);
        });
    };

    useEffect(() => {
        const unsubscribe = firebase
        .auth()
        .onAuthStateChanged(user => {
            setUser(user);
            setIsAuthenticating(false);
        });
        return () => unsubscribe()
    }, []);

    const values ={
        user,
        isAuthenticating,
        sendSignInLinkToEmail,
        signInWithEmailLink,
        logout,
    }

    return (<AuthContext.Provider value={values}>
        {!isAuthenticating && children}
    </AuthContext.Provider>);
}

export default AuthProvider;