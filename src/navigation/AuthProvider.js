import React, { createContext, useState } from 'react';
import { ToastAndroid } from 'react-native';

import auth from '@react-native-firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const showToastWithGravityAndOffset = (message) => {
      ToastAndroid.showWithGravityAndOffset(
        message,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
      );
      return
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: async (email, password) =>{
                    try {
                        await auth().signInWithEmailAndPassword(email, password)
                    } catch (error) {
                        console.log(error);
                    }
                },
                register: async (email, password) => {
                    try {
                      const userCredential = await auth().createUserWithEmailAndPassword(email, password)
                      return userCredential
                    } catch (e) {
                      showToastWithGravityAndOffset(e.message)
                    }
                  },
                  logout: async () => {
                    try {
                      await auth().signOut();
                    } catch (e) {
                      showToastWithGravityAndOffset(e.message)
                    }
                  },
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}