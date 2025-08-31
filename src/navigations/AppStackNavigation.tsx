import SignIn from '@screens/auth/signIn/SignIn';
import SignUp from '@screens/auth/signUp/SignUp';
import Settings from '@screens/settings/Settings';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChangePassword from '@screens/auth/changePassword/ChangePassword';
import TabBarNavigation from './TabBarNavigation';

const Stack = createNativeStackNavigator();

export const AuthStackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export const AppStackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="TabNavigation" component={TabBarNavigation} options={{ headerShown: false }} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} />
        </Stack.Navigator>
    );
}
