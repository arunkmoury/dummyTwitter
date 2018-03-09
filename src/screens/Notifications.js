import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from '../components/Header';

class Notifications extends Component {
    static navigationOptions =  ({navigation}) =>( {
        title: 'Notice',
        header: <Header headerTitle={navigation.state.routeName}/>,
    });
    render() {
        return (
            <View>
                <Text>Notifications</Text>
            </View>
        );
    }
}

export default Notifications;