/* eslint-disable @typescript-eslint/no-explicit-any */

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

import { UserAuth, FirebaseError } from './../types';
import { auth } from "../firebase-config";



export const login = async (user: UserAuth, rejectWithValue: any) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, user.email, user.password);

        return {
            ...userCredential.user,
            role: userCredential.user.displayName
        };

    } catch (err) {
        return rejectWithValue((err as FirebaseError).message as string)
    }

}

export const register = async (user: UserAuth, rejectWithValue: any) => {
    try {

        const userCredential = await createUserWithEmailAndPassword(auth, user.email, user.password);

        await updateProfile(userCredential.user, {
            displayName: user.role
        })

        return {
            ...userCredential.user,
            role: userCredential.user.displayName
        };

    } catch (err) {
        return rejectWithValue((err as FirebaseError).message as string)
    }

}