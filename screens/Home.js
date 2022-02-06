import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Header, Text } from 'react-native-elements';

const Home = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
          <Header
            centerComponent={{
              text: 'Sharing Project',
              style: styles.headerComponent,
            }}
            containerStyle={styles.headerContainer}
          />
          <View style={styles.home}>
            <Text>Home</Text>
          </View>
        </ScrollView>
      );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  home: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerComponent: {
    fontSize: 20,
    color: '#fff',
  },
  headerContainer: {
    justifyContent: 'space-around',
  },
});

export default Home;
