import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View} from 'react-native';

class drawerContentComponents extends Component{
    navigateToScreen = ( route ) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }
    render(){
        return(
            <View>
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

export default drawerContentComponents;