import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from '../components/Header';

class Search extends Component {
    static navigationOptions =  ({navigation}) =>({
        title: 'Search',
        header: <Header headerTitle={navigation.state.routeName}/>,
    });

    render(){
        return (
            <View>
                <Text>Search</Text>
            </View>
        );
    }
}

export default Search;