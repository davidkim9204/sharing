import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import CardComponent from '../components/CardComponent';

const Home = ({ navigation }) => {

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {

    setLoading(false);
    _getData();

  }, []);

  const _getData = () => {

    if(refreshing) {
      setData([])
    }
    const url = 'https://jsonplaceholder.typicode.com/photos?_limit=10&_page=' + page;
    fetch(url)
      .then(r => r.json())
      .then(new_data => {
        setData(data.concat(new_data))
        setPage(page + 1)
      })
    setRefreshing(false);
    setLoading(true);
  };

  const _renderItem = ({ item }) => (
      <CardComponent 
        navigation={ navigation }
        data={ item } 
      />
  );

  const _handleLoadMore = () => {
    _getData();
  };

  const _handleRefresh = () => {
    setRefreshing(true);
    setPage(1);
    _getData();
  };

  if(!loading) {
    return (
      <View style={styles.home}>
        <Text>Loading ... </Text>
      </View>
    );

  } else {
    return (
      <View style={styles.container}>
        <Header
        centerComponent={{
          text: 'Sharing Project',
          style: styles.headerComponent,
        }}
        containerStyle={styles.headerContainer}
        />
        <FlatList
          data={data}
          renderItem={_renderItem}
          keyExtractor={(item, index) => item.id}
          onEndReached={_handleLoadMore}
          onEndReachedThreshold={1}
          refreshing={refreshing}
          onRefresh={_handleRefresh}
        />
        <TouchableOpacity style={styles.button}>
          <Icon name='edit' size={30} color='#01a699' />
        </TouchableOpacity>
      </View>
    );

  }
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
  button: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    position: 'absolute',
    bottom: 10,
    right: 10,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 100,
  },
});

export default Home;
