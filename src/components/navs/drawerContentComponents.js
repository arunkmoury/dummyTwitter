import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View, StyleSheet} from 'react-native';

class drawerContentComponents extends Component{
    navigateToScreen = ( route ) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }
    render(){
        return(
            <View style={styles.container}>
                <ScrollView>
                    <View>
                        <Text onPress={this.navigateToScreen('Profile')}>Profile</Text>
                    </View>
                    <View>
                        <Text onPress={this.navigateToScreen('Lists')}>Lists</Text>
                    </View>
                    <View>
                        <Text onPress={this.navigateToScreen('Moments')}>Moments</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles= StyleSheet.create({
    container: {
        alignItems: 'center'
    }
});

export default drawerContentComponents;