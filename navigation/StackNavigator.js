import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Search from '../screens/Search';
import About from '../screens/About';

const Stack = createNativeStackNavigator();

const homeOptionStyle = {
  headerShown: false,
};

const searchOptionStyle = {
  headerShown: true,
};

const aboutOptionStyle = {
  headerShown: true,
};


const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeStack" component={Home} options={homeOptionStyle} />
    </Stack.Navigator>
  );
};

const SearchStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SearchStack" component={Search} options={searchOptionStyle} />
    </Stack.Navigator>
  );
};

const AboutStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AboutStack" component={About} options={aboutOptionStyle} />
    </Stack.Navigator>
  );
};


export {
    HomeStackNavigator,
    AboutStackNavigator,
    SearchStackNavigator
};
