import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Welcome from '../../screens/Welcome';
import DrawerNav from '../../screens/Profile';

const StackNav = StackNavigator({
    Welcome: {
        screen: Welcome,
    },
    DrawerNav: {
        screen: DrawerNav,
    }
},
{
    initialRouteName: Welcome,
    headerMode: 'none'
});

export default StackNav;