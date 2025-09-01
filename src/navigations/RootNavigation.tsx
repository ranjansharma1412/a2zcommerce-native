import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AppStackNavigation, AuthStackNavigation } from './AppStackNavigation'

const RootNavigation = () => {
    const [isUserLogin, setIsUserLogin] = useState(false)
    return (
        <NavigationContainer>
            {isUserLogin ?
                <AppStackNavigation /> :
                <AuthStackNavigation />
            }
        </NavigationContainer>
    )
}

export default RootNavigation