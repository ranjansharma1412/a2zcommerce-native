import { IProduct } from '@models/product.mode'
import { IUser, USER_TYPE } from '@models/user.model'
import { createSlice } from '@reduxjs/toolkit'

interface IProductInitialState {
    products: IProduct[]
}

const initialState: IProductInitialState = {
    products: [] as IProduct[],
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProducts: (state, actions) => {
            state.products = actions.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setProducts } = productSlice.actions

export default productSlice.reducer