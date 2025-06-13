import React from 'react';
import HomePage from '@pages/HomePage';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './src/ui/navigation/MainNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  )
}

export default App;
