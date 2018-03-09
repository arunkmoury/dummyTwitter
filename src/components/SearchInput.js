import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

class SearchInput extends Component {
    render(){
        return (
            <View style={styles.containerStyle}>
                <TextInput underlineColorAndroid="transparent" style={{width: 200, alignItems: 'center', flex: 1}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        borderColor: 'black',
        borderWidth: 1,
        width: 250,
        borderRadius: 25,
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default SearchInput;