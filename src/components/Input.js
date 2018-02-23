import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const Input = ({placeholder, keyboardType, onSubmitEditing, secureTextEntry, value, onChangeText}) => {
    return (
        <View>
            <TextInput 
                style={styles.inputBox} 
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder={placeholder}
                placeholderTextColor = "#ffffff"
                selectionColor="#fff"
                keyboardType={keyboardType}
                onSubmitEditing={onSubmitEditing}
                secureTextEntry={secureTextEntry}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    )
}

export default Input;

const styles = StyleSheet.create({
    inputBox: {
        width:300,
        backgroundColor:'#9575cd',
        borderRadius: 20,
        paddingHorizontal:16,
        fontSize:16,
        color:'#ffffff',
        marginVertical: 10
    },
})