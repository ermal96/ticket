
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import { UserAuth, FirebaseError } from './../types';
import { auth } from "../firebase-config";



export const login = async (user: UserAuth, rejectWithValue: any) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, user.email, user.password);

        return userCredential.user;

    } catch (err) {
        return rejectWithValue((err as FirebaseError).message as string)
    }

}

export const register = async (user: UserAuth, rejectWithValue: any) => {
    try {

        const userCredential = await createUserWithEmailAndPassword(auth, user.email, user.password);

        console.log(userCredential)

        return userCredential.user;

    } catch (err) {
        return rejectWithValue((err as FirebaseError).message as string)
    }

}