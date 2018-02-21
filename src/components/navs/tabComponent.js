import React, { Component } from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {NavigationActions} from 'react-navigation';

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
                <ScrollView style={{flexDirection: 'row'}}>
                    <View>
                        <Text 
                            onPress={this.navigateToScreen('Home')}
                        >
                            Home
                        </Text>
                    </View>
                    <View>
                        <Text onPress={this.navigateToScreen('Search')}>Search</Text>
                    </View>
                    <View>
                        <Text onPress={this.navigateToScreen('Notifications')}>Notifications</Text>
                    </View>
                    <View>
                        <Text onPress={this.navigateToScreen('Message')}>Message</Text>
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#123456',
    }
})