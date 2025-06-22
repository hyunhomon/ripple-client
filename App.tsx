import React from 'react';
import HomePage from '@pages/HomePage';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainNavigator from './src/ui/navigation/MainNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LoginPage from '@pages/LoginPage';
import WaitingDebatePage from '@pages/WaitingDebatePage';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  WaitingDebate: {player_id: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginPage} />
            <Stack.Screen name="Home" component={MainNavigator} />
            <Stack.Screen name="WaitingDebate" component={WaitingDebatePage} />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default App;
