import React, { useState, useEffect } from 'react';
import { View, Image, Text, FlatList, StyleSheet } from 'react-native';
// import { Header, Text } from 'react-native-elements';

const Home = ({ navigation }) => {

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {

    setLoading(false);
    _getData();

    return () => _getData();
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
    <View style={{ borderBottomWidth: 1, marginTop: 20 }}>
      <Image source={{ uri: item.url }} style={{ height: 200 }} />
      <Text>{item.title}</Text>
      <Text>{item.id}</Text>
    </View>
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
      <FlatList
        data={data}
        renderItem={_renderItem}
        keyExtractor={(item, index) => item.id}
        onEndReached={_handleLoadMore}
        onEndReachedThreshold={1}
        refreshing={refreshing}
        onRefresh={_handleRefresh}
      />
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
});

export default Home;
