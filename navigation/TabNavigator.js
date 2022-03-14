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
    initialRouteName='Home'
    screenOptions={{
      tabBarActiveTintColor: '#00aced',
      tabBarInactiveTintColor: 'gray',
    }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{ 
          tabBarLabel: 'Home',
          tabBarBadge: null, 
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? 'home' : 'home-outline'}
              size={size}
              color={color}
              type="ionicon"
            />
          )
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStackNavigator}
        options={{ 
          tabBarLabel: 'Search',
          tabBarBadge: null, 
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? 'search' : 'search-outline'}
              size={size}
              color={color}
              type='ionicon'
            />
          )
        }}
      />      
      <Tab.Screen
        name="About"
        component={AboutStackNavigator}
        options={{ 
          tabBarLabel: 'About',
          tabBarBadge: null, 
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? 'document-text' : 'document-text-outline'}
              size={size}
              color={color}
              type="ionicon"
            />
          )
        }}
      />    
</Tab.Navigator>      
  );
};

export default BottomTabNavigator;
