/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { store } from './src/redux/store';
import RootNavigation from './src/navigations/RootNavigation';
import { StatusBar, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import SignIn from '@screens/auth/signIn/SignIn';
import SignUp from '@screens/auth/signUp/SignUp';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return ( 
    <Provider store={store}>
      <SafeAreaProvider>
        {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <RootNavigation /> */}
        <SignUp/>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
