// redux store
import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice/authSlice'
import productSlice from './productSlice/productSlice'

export const store = configureStore({
    reducer: {
        auth: authSlice,
        product: productSlice,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch