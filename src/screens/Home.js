import React from 'react';
import { View, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Search from './Search';
import Message  from './Message';
import Notifications from './Notifications';
import Icon from "react-native-vector-icons/FontAwesome";

export const Home = () => {
    console.log("Home");
    return (
        <View>
            <Text>Home</Text>
        </View>
    );
}

const routeConfigs = {
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarIcon: <Icon name={"home"} size={20}/>
        }
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
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
    }
}

const TabNav = TabNavigator(routeConfigs, tabNavigatorConfig);

export default TabNav;