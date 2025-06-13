import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import HomePage from '@pages/HomePage';
import ParticipatePage from '@pages/ParticipatePage';
import CreatePage from '@pages/CreatePage';
import SpectatePage from '@pages/SpectatePage';
import GalleryPage from '@pages/GalleryPage';

import NavigationBar from '@components/NavigationComponent';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props: BottomTabBarProps) => (
        <NavigationBar
          activeIndex={props.state.index}
          onPress={(index) => props.navigation.navigate(props.state.routeNames[index])}
        />
      )}
    >
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Participate" component={ParticipatePage} />
      <Tab.Screen name="Create" component={CreatePage} />
      <Tab.Screen name="Spectate" component={SpectatePage} />
      <Tab.Screen name="Gallery" component={GalleryPage} />
    </Tab.Navigator>
  );
};

export default MainNavigator;
