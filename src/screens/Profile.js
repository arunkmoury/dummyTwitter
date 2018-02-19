import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Container, Header, Button, Left, Content} from 'native-base';
import { DrawerNavigator } from 'react-navigation';
import Lists from './Lists';
import Moments from './Moments';
import TabNav from './Home';
import drawerContentComponents from '../components/navs/drawerContentComponents';
import Icon from 'react-native-vector-icons/FontAwesome';

export class Profile extends Component {
    render(){
        return (
            <Container>
                <View style={{ width: '100%', height: 50}}>
                    <Icon 
                        name='bars' 
                        size={30} 
                        onPress={()=>this.props.navigation.navigate('DrawerOpen')}
                        style={{paddingLeft: 10, paddingTop: 10}} 
                    />
                </View>
                <Content contentContainerStyle={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text>Profile screen</Text>
                </Content>
            </Container>
        );
    }
}

const DrawerNav = DrawerNavigator(
    {
        TabNav: { 
            screen: TabNav,
        },
        Profile: { 
            screen: Profile ,
        },
        Lists: { screen: Lists},
        Moments: { screen: Moments },
    },
    {
        drawerBackgroundColor: '#98eef3',
        contentComponent: drawerContentComponents,
    } 
);

export default DrawerNav;