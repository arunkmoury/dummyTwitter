import React, { Component } from 'react';
import {View, Text, Button, Image, StyleSheet, Animated, TouchableWithoutFeedback} from 'react-native';
import SearchInput from './SearchInput';

import {
    logout
} from '../actions';

class Header extends Component {

    logoutPressed() {
        this.props.onButtonPress();
    }
    
    render(){
        // const headerHeight = this.state.scrollY.interpolate({
        //     inputRange: [0, 120],
        //     outputRange: [120, 0],
        // })
        //console.log(this.props.user);
        return (
            <Animated.View style={styles.container}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableWithoutFeedback onPress={this.props.profilePress} >
                        <Image
                            source={require('../../assets/avatar.png')}
                            style={{ width: 40, height: 40, borderRadius: 40/2, marginLeft: 15}}
                        />
                    </TouchableWithoutFeedback>
                    <Text>{this.props.name}</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    {(this.props.headerTitle==='Search')?
                        <SearchInput />: <Text>{this.props.headerTitle}</Text>}
                </View>
                <Button style={{justifyContent: 'flex-end'}} title="Logout" onPress={this.logoutPressed.bind(this)} />
            </Animated.View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        //position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'lightskyblue',
        height: 100,
        overflow: 'hidden',
        flexDirection: 'row',
        alignItems: 'center',
    }
})

export default Header;