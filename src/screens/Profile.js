import React, { Component } from 'react';
import { View, Text, Icon } from 'react-native';
import {Container, Header, Button, Left, Content} from 'native-base';
import { DrawerNavigator } from 'react-navigation';
import Lists from './Lists';
import Moments from './Moments';
import TabNav from './Home';
import drawerContentComponents from '../components/navs/drawerContentComponents';

export class Profile extends Component {
    render(){
        return (
            <Container>
                {/* <Header>
                    <Left><Text>Title</Text>
                        <Icon name='ios-menu' onPress={()=>this.props.navigation.navigate('DrawerOpen')} />
                    </Left>
                </Header> */}
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
        drawerBackgroundColor: 'blue',
        contentComponent: drawerContentComponents,
    } 
);

export default DrawerNav;