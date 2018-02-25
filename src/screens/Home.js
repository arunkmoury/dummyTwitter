import React, { Component } from 'react';
import { View, Text, ScrollView, Button, Alert } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Search from './Search';
import Message  from './Message';
import Notifications from './Notifications';
// import Icon from "react-native-vector-icons/FontAwesome";
import tabBarComponent from '../components/navs/tabComponent';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export class Home extends Component {
    static navigationOptions = {
        title : 'Home',
        tabBarIcon: () => (<Icon name='home' size={30} onPress={this.navigateToScreen('Home')} />),
    }

    alertButton(){
        return(
        Alert.alert(
            'Alert Title',
            "Alert message",
            [
              { text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
          ));
    }

    render(){
        return (
        <View style={{flexDirection: 'row'}}>
                        <Text>Home</Text>
                        <Button onPress={this.alertButton.bind(this)} title="Alert" />
            </View>
        );
    }
}

const routeConfigs = {
    Home: {
        screen: Home,
    },
    Search: {
        screen: Search,
    },
    Notifications: {
        screen: Notifications,
    },
    Message: {
        screen: Message,
    },
}

const tabNavigatorConfig = {
    // tabBarComponent: tabBarComponent,
    tabBarPosition: 'top',
    lazy: true,
    tabBarOptions: {
        activeTintColor: 'yellow',
        inactiveTintColor: 'gray',
        style: {
            backgroundColor: '#8e24aa',
          },
        activeBackgroundColor: 'green',
    },
}

const TabNav = TabNavigator(routeConfigs, tabNavigatorConfig);

export default TabNav;