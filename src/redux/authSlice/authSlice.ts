import { IUser, USER_TYPE } from '@models/user.model'
import { createSlice } from '@reduxjs/toolkit'

interface IAuthInitialState {
    user: IUser
    isUserLogin: boolean
    userType: USER_TYPE
}

const initialState: IAuthInitialState = {
    user: {} as IUser,
    isUserLogin: false,
    userType: USER_TYPE.ADMIN
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUserDetails: (state, actions) => {
            state.user = actions.payload
        },
        setIsUserLogin: (state, actions) => {
            state.isUserLogin = actions.payload
        },
        setUserType: (state, actions) => {
            state.userType = actions.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setUserDetails, setIsUserLogin, setUserType } = authSlice.actions

export default authSlice.reducer