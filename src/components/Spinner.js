import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Spinner = ({size}) => {
    return (
        <View style={styles.spinnerStyle}>
            <ActivityIndicator size="large" />
        </View>
    );
};

export default Spinner;

const styles = StyleSheet.create({
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
}); 