import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '@themes/colors'
import styles from './SignInStyle'
import { useDispatch, useSelector } from 'react-redux'
import { setIsUserLogin } from '@redux/authSlice/authSlice'
import { RootState } from '@redux/store'

const SignIn = () => {
    const dispatch = useDispatch()
    const { isUserLogin } = useSelector((state: RootState) => state.auth)
    console.log("====sdfsfsdf=isUserLogin=", isUserLogin)

    const onLogin = () => {
        console.log("====sdfsfsdf==")
        dispatch(setIsUserLogin(true))
    }

    return (
        <View style={styles.container}>
            <View style={{ width: '100%', alignItems: 'center', paddingHorizontal: 24 }}>
                <Pressable onPress={onLogin} style={{ height: 50, borderRadius: 10, backgroundColor: COLORS.PRIMARY_ORANGE_COLOR, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: COLORS.WHITE }}>Login</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default SignIn
