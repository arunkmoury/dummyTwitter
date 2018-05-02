import React from 'react';
import{ View, Text } from 'react-native';

// Navigators
import { DrawerNavigator, StackNavigator, TabNavigator } from 'react-navigation'

// Drawer Screens
import Lists from '../../screens/Lists';
import Moments from '../../screens/Moments';
import Welcome from '../../screens/Welcome';
import Profile from '../../screens/Profile';
import drawerContentComponents from './drawerContentComponents';

// Tab Screens
import Home from '../../screens/Home';
import Search from '../../screens/Search';
import Notifications from '../../screens/Notifications';
import Message from '../../screens/Message';






//TabNav
const routeConfigs = {
    Home: {
        screen: Home,
        navigationOptions: ({navigation}) => {
            showLabel: false;
            tabBarIcon: ({ focused, tintColor }) => {
                return <Ionicons name='ios-information-circle' size={25} color={tintColor} />;
            }
            tabBarOptions: {
                showIcon: true;
                showLabel: false;
            }
        }
    },
    Search: {
        screen: Search,
        navigationOptions: {    
            title: 'Search'
            }
    },
    Notice: {
        screen: Notifications,
        navigationOptions: {
            title: 'Notice'
            }
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
    header: 'screen'
}
export const TabNav = TabNavigator(routeConfigs, tabNavigatorConfig);
export const StackNav = StackNavigator({TabNav: { screen: TabNav }});

export const DrawerNav = DrawerNavigator (
    {
        Welcome: { screen: Welcome},
        Lists: { screen: Lists},
        Moments: { screen: Moments },
        Profile: { 
            screen: Profile,
            navigationOptions: ({navigation}) => ({
                header: <View><Text>Profile Page</Text></View>
            })
        },
        StackNav: { screen: StackNav}, // Stack Navigator to get Header on each Tabs
    },
    {
        initialRouteName: 'Welcome',
        drawerBackgroundColor: '#98eef3',
        contentComponent: drawerContentComponents,
    }
);