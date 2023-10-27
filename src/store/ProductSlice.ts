import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { Product } from '../types/product'
import axios from 'axios'

interface ProductState {
    products: Product[],
    isLoading: boolean,
    error?: unknown
}

const initialState: ProductState = {
    products: [],
    isLoading: false,
}

export const fetchProduct = createAsyncThunk('product/fetchProduct', async () => {
    const resp = await axios.get('http://localhost:3000/product', {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
    try {
        const data: Product[] = resp.data
        console.log(data)
        return data
    } catch (error) {
        throw new Error('error occur')
    }
})

const productSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder
        .addCase(fetchProduct.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchProduct.fulfilled, (state, action) => {
            state.products = action.payload
            state.isLoading = false
        })
        .addCase(fetchProduct.rejected, (state, action) => {
            state.error = action.payload
            state.isLoading = false
            state.products = []
        })
    }
})

export const productReducer = productSlice.reducer
