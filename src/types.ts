export type UserRole = 'ADMIN' | 'USER';

export type UserAuth = {
    email: string,
    password: string,
    role?: UserRole
}

export type AuthState = {
    loading: boolean,
    loggedIn: boolean,
    error?: string,
    user?: {
        email: string,
        role?: UserRole
    }

}

export type FirebaseAuthResponse = {
    email: string,
    role?: UserRole
}

export type FirebaseError = {
    code: number,
    message: string
}