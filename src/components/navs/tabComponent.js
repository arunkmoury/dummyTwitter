import React, { Component } from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {NavigationActions} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class tabComponent extends Component{
    navigateToScreen = ( route ) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }
    render(){
        return(
            <View style={styles.container}>
                <ScrollView horizontal contentContainerStyle={styles.contentContainer}>
                    <View style={styles.tabStyle}>
                        <Icon name='home' size={30} onPress={this.navigateToScreen('Home')} />
                    </View>
                    <View style={styles.tabStyle}>
                        <Icon name='magnify' size={30} onPress={this.navigateToScreen('Search')} />
                    </View>
                    <View style={styles.tabStyle}>
                        <Icon name='bell-outline' size={30} onPress={this.navigateToScreen('Notifications')} />
                    </View>
                    <View style={styles.tabStyle}>
                        <Icon name='message' size={30} onPress={this.navigateToScreen('Message')} />
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default tabComponent;

const styles= StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: 'yellow',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#c5e1a5',
    },
    tabStyle: {
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1,
        height:'100%',
        flex: 1,

    },
    contentContainer: {
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flex: 1
    }
})