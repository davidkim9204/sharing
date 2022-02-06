import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import About from '../screens/About';

const Stack = createNativeStackNavigator();

const homeOptionStyle = {
  headerShown: false,
};

const aboutOptionStyle = {
  headerShown: true,
};


const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={homeOptionStyle} />
    </Stack.Navigator>
  );
};

const AboutStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="About" component={About} options={aboutOptionStyle} />
    </Stack.Navigator>
  );
};


export {
    HomeStackNavigator,
    AboutStackNavigator,
};
