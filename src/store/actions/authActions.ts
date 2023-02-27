import { login, register } from '../../services/authService';
import { UserAuth } from './../../types';
import { createAsyncThunk, } from '@reduxjs/toolkit'


export const loginUser = createAsyncThunk(
    'auth/login',
    async (user: UserAuth, { rejectWithValue }) => {
        return await login(user, rejectWithValue);
    }
)

export const registerUser = createAsyncThunk(
    'auth/register',
    async (user: UserAuth, { rejectWithValue }) => {
        return await register(user, rejectWithValue);
    }
)