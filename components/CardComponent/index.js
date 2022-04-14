import React from 'react';
import { View, StyleSheet, TouchableHighlight } from 'react-native';
import { Avatar, ListItem, Text } from 'react-native-elements';

const CardComponent = ({ navigation, data }) => {

    return (
        <View style={styles.container}>
            <TouchableHighlight
                key={data.id}
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={() => {
                    navigation.navigate('PostStack', {
                        data: data
                    });
                }
            }
            >
                <ListItem key={data.id}  bottomDivider> 
                    <Avatar 
                        size={styles.avatar.size}
                        rounded
                        source={{ uri: data.url }}
                        key={data.id} 
                    />
                    <ListItem.Content>
                        <ListItem.Title>{data.title}</ListItem.Title>
                        <ListItem.Subtitle>{data.id}</ListItem.Subtitle>
                        <Text h4> TEST </Text>
                    </ListItem.Content>
                </ListItem>
     
            </TouchableHighlight>
        </View>
    );
};
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 0,
        justifyContent: "center",
        paddingHorizontal: 1
    },
    avatar: {
        size : 64
    },
});


export default CardComponent;