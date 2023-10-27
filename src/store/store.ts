import { authReducer } from "./AuthSlice";
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { productReducer } from "./ProductSlice";
import { cartReducer } from "./CartSlice";

const reducer = combineReducers({
    auth: authReducer,
    product: productReducer,
    cart: cartReducer
})

const store = configureStore({
    reducer: reducer
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store