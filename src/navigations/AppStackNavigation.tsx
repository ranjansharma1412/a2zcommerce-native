import SignIn from '@screens/auth/signIn/SignIn';
import SignUp from '@screens/auth/signUp/SignUp';
import Dashboard from '@screens/dashboard/Dashboard';
import Profile from '@screens/profile/Profile';
import Settings from '@screens/settings/Settings';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const AuthStackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="Profile" component={SignUp} />
        </Stack.Navigator>
    );
}

export const AppStackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    );
}
