import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {NavigationActions} from 'react-navigation';
import { connect } from 'react-redux';
import { logout } from '../actions';
import Header from '../components/Header';

class Search extends Component {

    componentWillMount() {
        this.props.navigation.setParams({
            name: this.props.user.displayName,
            logout: this.props.logout,
        })
    }

    logout(params){
        params.logout();
        NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Welcome' }),
            ]
        })
    }

    static navigationOptions =  ({navigation}) =>{
        const params = navigation.state.params || {};
        return {
        title: 'Search',
        header: <Header 
                headerTitle={navigation.state.routeName} 
                name={params.name}
                onButtonPress={() =>{ new Home().logout(params);navigation.navigate('Welcome') } // calling non static method from static method
                }
                profilePress={() => navigation.navigate('DrawerOpen')}
            />,
        }
    };

    render(){
        return (
            <View>
                <Text>Search</Text>
            </View>
        );
    }
}

mapStateToProp = ({auth}) => {
    return {
        user: auth.user,
    }
}

export default connect(mapStateToProp, {logout})(Search);