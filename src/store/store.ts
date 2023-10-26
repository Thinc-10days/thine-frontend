import { authReducer } from "./AuthSlice";
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { productReducer } from "./ProductSlice";

const reducer = combineReducers({
    auth: authReducer,
    product: productReducer
})

const store = configureStore({
    reducer: reducer
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store