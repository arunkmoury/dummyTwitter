import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from '../components/Header';

class Message extends Component {
    static navigationOptions =  ({navigation}) =>( {
        title: 'Message',
        header: <Header headerTitle={navigation.state.routeName}/>,
    });
    render(){
        return (
            <View>
                <Text>Messgae</Text>
            </View>
        );
    }
}

export default Message;