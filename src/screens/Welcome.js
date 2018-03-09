import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Modal } from 'react-native';
import firebase from 'firebase';
import Login from '../screens/Login';

export default class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
        };
    }

    static navigationOptions = () => ({
        drawerLockMode: 'locked-closed'
      })

    componentWillMount(){
        firebase.initializeApp({
            apiKey: 'AIzaSyCSjp6i9w8uaeWQtqB9RD-WzcX4dd-K1v0',
            authDomain: 'twitter-6edbb.firebaseapp.com',
            databaseURL: 'https://twitter-6edbb.firebaseio.com',
            projectId: 'twitter-6edbb',
            storageBucket: 'twitter-6edbb.appspot.com',
            messagingSenderId: '471065315757'
        });
    }

    render(){
        console.log(this.props);
        return (
            <View style={styles.container}>
                <View style={{flex: 3}}>
                    <Login userAction="Login" buttonPress={() => this.props.navigation.navigate('StackNav')}/>
                </View>
                <View style={styles.signupStyle}>
                    <TouchableOpacity 
                        style={styles.button} 
                        onPress={() => {this.setState({modalVisible: true})}} 
                    >
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity> 
                </View>
                <Modal 
                    visible={this.state.modalVisible}
                    animationType={'fade'}
                    onRequestClose={() => this.setState({modalVisible: false})}
                    position='center'
                >
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignContent: 'center',
                        height: 500
                    }}>
                        <Login userAction="Sign Up" buttonPress={() => this.props.navigation.navigate('Home')} />
                    
                        <Button
                            onPress={()=>this.setState({modalVisible: false})}
                            title="Close Modal"
                        />
                    </View>
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        backgroundColor:'#4fc3f7',
        flex: 1,
        alignItems:'center',
        justifyContent :'center'
    },
    signupStyle: {
        flexGrow: 1,
        alignItems:'flex-start',
        justifyContent :'center',
        paddingVertical:20,
        flexDirection:'row'
    },
    button: {
        width:300,
        backgroundColor:'#ff3d00',
        borderRadius: 20,
        marginVertical: 10,
        paddingVertical: 13
    },
    buttonText: {
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'
    },
});