import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';


const Search = ({ navigation }) => {
  return (
    <View style={styles.home}>
        <Text>Search</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: { flex: 1 },
    home: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
    },
});

export default Search;
