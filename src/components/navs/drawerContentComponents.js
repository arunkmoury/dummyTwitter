import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View, StyleSheet, Image, ImageBackground} from 'react-native';
import drawerScreenText from '../drawerScreenText';
import Icon from 'react-native-vector-icons/FontAwesome';

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
                    <View style={styles.header}>
                        <ImageBackground source={require('../../../assets/drawer-cover.png')} style={{flex: 1, width: 280}} >
                            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                <Text>Some Text</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={styles.screenContainer}>
                        <View style={styles.screenStyle}>
                            <Icon name='user' size={25} style={styles.iconStyle}/>
                            <Text 
                                onPress={this.navigateToScreen('Profile')}
                                style={styles.screenTextStyle}
                            >
                                Profile
                            </Text>
                        </View>
                        <View style={styles.screenStyle}>
                            <Icon name='list' size={25} style={styles.iconStyle} />
                            <Text 
                                onPress={this.navigateToScreen('Lists')}
                                style={styles.screenTextStyle}
                            >
                                Lists
                            </Text>
                        </View>
                        <View style={styles.screenStyle}>
                            <Icon name='bolt' size={25} style={styles.iconStyle} />
                            <Text 
                                onPress={this.navigateToScreen('Moments')}
                                style={styles.screenTextStyle}
                            >
                                Moments
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles= StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    header: {
        height: 150,
    },
    screenContainer: {
        paddingLeft: 20, 
        paddingTop: 20
    },
    screenStyle: {
        height: 30,
        marginTop: 2,
        paddingLeft: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    screenTextStyle:{
        fontSize: 20,
        marginLeft: 20
    },
    iconStyle: {
        height: 20,
        width: 20
    }
});

export default drawerContentComponents;