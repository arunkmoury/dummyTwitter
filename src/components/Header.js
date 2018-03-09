import React, { Component } from 'react';
import {View, Text, Button, Image, StyleSheet, Animated} from 'react-native';
import SearchInput from './SearchInput';

class Header extends Component {
    render(){
        // const headerHeight = this.state.scrollY.interpolate({
        //     inputRange: [0, 120],
        //     outputRange: [120, 0],
        // })
        return (
            <Animated.View style={styles.container}>
                <Image
                    source={require('../../assets/avatar.png')}
                    style={{ width: 40, height: 40, borderRadius: 40/2, marginLeft: 15}}
                />
                <View style={{alignItems: 'center'}}>
                    {(this.props.headerTitle==='Search')?
                        <SearchInput />: <Text>{this.props.headerTitle}</Text>}
                </View>
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