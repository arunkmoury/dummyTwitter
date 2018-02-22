import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Search from './Search';
import Message  from './Message';
import Notifications from './Notifications';
import Icon from "react-native-vector-icons/FontAwesome";
import tabBarComponent from '../components/navs/tabComponent';

export const Home = () => {
    return (
        <View style={{flexDirection: 'row'}}>
                        <Text>Home</Text>
            </View>
    );
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
    tabBarComponent: tabBarComponent,
    tabBarPosition: 'top',
    lazy: true,
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        style: {
            backgroundColor: 'blue',
          },
        activeBackgroundColor: 'green',
    },
    navigationOptions: {
        title: 'Tab',
    }

}

const TabNav = TabNavigator(routeConfigs, tabNavigatorConfig);

export default TabNav;