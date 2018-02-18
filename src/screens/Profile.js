import React from 'react';
import { View, Text } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import Lists from './Lists';
import Moments from './Moments';
import TabNav from './Home';

export const Profile = () => {
    return (
        <View>
            <Text>Profile</Text>
        </View>
    );
}

const DrawerNav = DrawerNavigator({
    TabNav: { screen: TabNav },
    Profile: { screen: Profile },
    Lists: { screen: Lists},
    Moments: { screen: Moments },
});

export default DrawerNav;