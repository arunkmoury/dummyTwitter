import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const drawerScreenText = (props) => {
    return (
        <View style={styles.container}>
            <Text>{props.screenName}</Text>
        </View>
    );
}

export default drawerScreenText;

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
    }
});