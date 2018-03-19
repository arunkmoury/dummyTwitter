import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>
                Twitter
            </Text>
        </View>
    );
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'skyblue',
        flex: 1
    },
    textStyle: {
        fontSize: 40,
        fontWeight: '600'
    }
});