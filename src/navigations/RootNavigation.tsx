import { NavigationContainer } from '@react-navigation/native';
import { RootState } from '@redux/store';
import React from 'react';
import { useSelector } from 'react-redux';
import { AppStackNavigation, AuthStackNavigation } from './AppStackNavigation';

const RootNavigation = () => {
    const { isUserLogin } = useSelector((state: RootState) => state.auth);

    return (
        <NavigationContainer>
            {isUserLogin ? <AppStackNavigation /> : <AuthStackNavigation />}
        </NavigationContainer>
    );
};

export default RootNavigation;