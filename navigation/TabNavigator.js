import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';

import {
    HomeStackNavigator,
    SearchStackNavigator,
    AboutStackNavigator,
} from './StackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Home') {
            return (
              <Icon
                name={focused ? 'home' : 'home-outline'}
                size={size}
                color={color}
                type="ionicon"
              />
            );
          } else if (route.name === 'Search') {
            return (
              <Icon
                name={focused ? 'search' : 'search-outline'}
                size={size}
                color={color}
                type='ionicon'
              />
            );

          } else if (route.name === 'About') {
            return (
              <Icon
                name={focused ? 'document-text' : 'document-text-outline'}
                size={size}
                color={color}
                type="ionicon"
              />
            );
          } 
        },
      })}
      tabBarOptions={{
        activeTintColor: '#00aced',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{ tabBarBadge: null, headerShown: false, }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStackNavigator}
        options={{ tabBarBadge: null, headerShown: false, } }
      />
      <Tab.Screen
        name="About"
        component={AboutStackNavigator}
        options={{ tabBarBadge: null, headerShown: false, } }
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
