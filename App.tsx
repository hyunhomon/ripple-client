import React from 'react';
import HomePage from '@pages/HomePage';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './src/ui/navigation/MainNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LoginPage from '@pages/LoginPage';
import WaitingDebatePage from '@pages/WaitingDebatePage';

const App = () => {
  return (
    <SafeAreaProvider>
      <WaitingDebatePage/>
      {/* <NavigationContainer>
        <MainNavigator />
      </NavigationContainer> */}
    </SafeAreaProvider>
  )
}

export default App;
