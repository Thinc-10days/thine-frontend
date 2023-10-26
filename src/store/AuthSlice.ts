import { createSlice } from '@reduxjs/toolkit'

interface AuthState {
    authenticated: boolean;
}

const initialState : AuthState = {
    authenticated: localStorage.getItem('token') ? true : false
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        userLogin: (state) => {
            state.authenticated = true
        },
    }
})

export const { userLogin } = authSlice.actions
export const authReducer = authSlice.reducer