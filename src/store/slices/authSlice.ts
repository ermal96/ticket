import { loginUser, registerUser } from './../actions/authActions';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from "@reduxjs/toolkit"
import { AuthState, FirebaseAuthResponse } from '../../types';

const initialState: AuthState = {
    loading: false,
    loggedIn: false
}

const setLoader = (state: AuthState): void => {
    state.loading = true
    state.error = ''
};

const setLoginRejected = (state: AuthState, action: PayloadAction<string>): void => {
    state.loading = false
    state.error = action.payload;
};

const setLoginFulfilled = (state: AuthState, action: PayloadAction<FirebaseAuthResponse>): void => {
    state.loading = false
    state.user = {
        email: action.payload.email,
        role: action.payload.role
    }

};

const setRegisterRejected = (state: AuthState, action: PayloadAction<string>): void => {
    state.loading = false
    state.loggedIn = false;
    state.error = action.payload;
};

const setRegisterFulfilled = (state: AuthState, action: PayloadAction<FirebaseAuthResponse>): void => {
    state.loading = false
    state.loggedIn = true
    state.user = {
        email: action.payload.email,
        role: action.payload.role
    }
};

export const AuthSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        restoreUser(state, action: PayloadAction<FirebaseAuthResponse>) {
            state.loggedIn = true,
                state.user = {
                    email: action.payload.email,
                    role: action.payload.role
                }
        },

        logoutUser(state) {
            state.loggedIn = false
            state.user = undefined
        },
    },
    extraReducers: {
        // login actions
        [loginUser.pending as unknown as string]: setLoader,
        [loginUser.fulfilled as unknown as string]: setLoginFulfilled,
        [loginUser.rejected as unknown as string]: setLoginRejected,

        // register actions
        [registerUser.pending as unknown as string]: setLoader,
        [registerUser.fulfilled as unknown as string]: setRegisterFulfilled,
        [registerUser.rejected as unknown as string]: setRegisterRejected,
    }
})

export const AuthActions = AuthSlice.actions;

export default AuthSlice.reducer