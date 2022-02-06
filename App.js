import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import BottomTabNavigator from './navigation/TabNavigator';

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}
