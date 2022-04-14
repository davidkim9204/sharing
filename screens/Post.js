import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import { Avatar, Text, Icon, Button } from 'react-native-elements';
import InputBox from '../components/InputBox';

const Post = ({ route, navigation }) => {

    const { data, otherParam } = route.params;

    return (
        <ScrollView>
            <View style={ styles.container }>
                <View>
                    <View style={styles.profile}>
                        <Avatar 
                            size={styles.avatar.size}
                            source={{ uri: data.url }}
                            key={data.id}
                        />
                        <View style={styles.profileBody}>
                            <Text style={{ color: 'black', fontWeight: "bold" }}>{data.id}</Text>
                            <Text style={{ color: 'grey', fontSize: 10, fontWeight: "bold" }}>04/11 19:33</Text>
                        </View>
                    </View>
                    <View style={styles.title}>
                        <Text h4> {data.title} </Text>
                    </View>
                    <View style={styles.body}>
                        <Text style={styles.text}>  
                        게시글의 내용입니다. 내용을 많이 붙이면 어떻게 될까요? 
                        text-overflow 속성은 display 속성이 블럭 형태인 경우에만 적용됩니다. 
                        즉, inline의 경우는 적용되지 않습니다. 
                        이를 적용하기 위해서는 반드시 아래와 같이 display를 block 또는 inline-block과 같이 설정해야만 적상적으로 작동합니다.
                        </Text>

                    </View>
                    <View style={styles.icon}>
                        <Icon
                            name='heart-outline'
                            type='ionicon'
                            color='red'
                            size={12}
                            style={styles.heart}
                        />
                        <Text style={styles.heart}>1</Text>
                        <Icon
                            name='chatbubble-outline'
                            type='ionicon'
                            color='blue'
                            size={12}
                        />
                        <Text style={styles.chat}>1</Text>
                    </View>
                    <View style={styles.button}>
                        <Button 
                            title="좋아요"
                            icon={{
                                name: 'heart-outline',
                                type: 'ionicon',
                                size: 12,
                                color: 'white',
                            }}
                            iconContainerStyle={{ marginRight: 5 }}
                            titleStyle={{ fontWeight: '700'}}
                            buttonStyle={{
                                backgroundColor: 'rgba(90, 154, 230, 1)',
                                borderColor: 'transparent',
                                borderWidth: 0,
                                borderRadius: 5,
                            }}
                            containerStyle={{
                                width: 60,
                                marginHorizontal: 50,
                                marginVertical: 10,
                            }}
                        />
                    </View>

                </View>

            </View>                   
            
                <InputBox></InputBox>
            
        </ScrollView>

    );

};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor : "white",
        padding: 10
    },
    profile: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop: 8,
        paddingLeft: 10,
    },
    profileBody: {
        flex: 1,
        marginLeft: 5,
    },
    title: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 5,
        marginRight: 5,
        marginTop: 0,
        paddingLeft: 10,
        paddingRight: 10,
    },
    body: {
        flex: 1,
        paddingLeft: 10,
        alignItems: 'flex-start',
    },
    bottom: {
        flex: 1,
    },
    avatar: {
        size : 32,
    },
    text: {
        color: 'black',
        fontSize: 12,
    },
    icon: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        margin: 10
    },
    heart: {
        color: 'red',
        fontSize: 12,
        textAlign: 'center',
        margin: 'auto',
    },
    chat: {
        color: 'blue',
        fontSize: 12, 
        margin: 'auto',
    },
    button: {
        flex: 1,
    }
});

export default Post;