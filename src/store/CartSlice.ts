import { createSlice } from "@reduxjs/toolkit";
import { Food } from "../types/product";

export interface Item {
    food: Food,
    quantity: number
    notes?: string
}

interface CartState {
    items: Item[]
}

const initialState : CartState  = {
    items: [] 
}

const cartSlice = createSlice({
    name: 'card',
    initialState: initialState,
    reducers: {
        addToCard: (state, action) => {
            state.items.push(action.payload)
        },
        removeFromCard: (state,action) => {
            state.items = state.items.filter(itme => itme.food.name != action.payload)
        }
    }
})

export const { addToCard , removeFromCard } = cartSlice.actions
export const cartReducer = cartSlice.reducer