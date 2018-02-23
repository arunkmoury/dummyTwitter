import React, { Component } from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    } from 'react-native';
import firebase from 'firebase';
import Input from '../components/Input';
import Spinner from '../components/Spinner';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            errorMessage: '',
            isloading: false,
        };
        this.onLoginSuccess = this.onLoginSuccess.bind(this);
    }
    onLoginSuccess(){
        this.setState(
            {
                email: '',
                password: '',
                errorMessage: '',
                isloading: false,
            },
            () => { console.log(this.state.isloading) }
        );
        this.setState({isloading: false});
        this.props.buttonPress();
    }

    renderButton(){
        if(this.state.isloading){
            return <Spinner />;
        }else{
            return (
                <TouchableOpacity style={styles.button} onPress={this.buttonPressed.bind(this)} >
                    <Text style={styles.buttonText}>{this.props.userAction}</Text>
                </TouchableOpacity>
            );
        }
    }

    buttonPressed(){
        const { name, email, password, isloading } = this.state;

        this.setState({errorMessage: '', isloading: true});

        if(this.props.userAction==='Login'){
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(()=>{
                    console.log("sign in");
                    this.onLoginSuccess();
                })
                .catch((error) => {
                    let errorCode = error.code;
                    if(errorCode==='auth/user-not-found'){
                        console.log(this.state.errorMessage+' user not found');
                        this.setState({errorMessage: 'authentication failed'});
                    }else if(errorCode==='auth/wrong-password'){
                        console.log(this.state.errorMessage+' wrong password');
                        this.setState({errorMessage: 'authentication failed'});
                    }else{
                        console.log(this.state.errorMessage);
                        this.setState({errorMessage: 'authentication failed'});
                    }
                });
        }
        //User Sign Up
        else{
            firebase.auth().createUserWithEmailAndPassword(email, password);
        }
        
    }

    render(){
        return (
            <View style={styles.container}>
                
                <Input 
                    placeholder="Email" 
                    keyboardType="email-address"
                    value={this.state.email}
                    onChangeText={(email)=> this.setState({email})}
                />
                <Input 
                    placeholder="Password" 
                    keyboardType="default"   
                    secureTextEntry={true}
                    value={this.state.password}
                    onChangeText={(password)=> this.setState({password})}
                />
                {this.renderButton()}
                <Text>{this.state.errorMessage}</Text>
            </View>
        );
    }
}

export default Login;

const styles = StyleSheet.create({
    container : {
      flexGrow: 1,
      justifyContent:'center',
      alignItems: 'center'
    },
  
    inputBox: {
      width:300,
      backgroundColor:'#9575cd',
      borderRadius: 20,
      paddingHorizontal:16,
      fontSize:16,
      color:'#ffffff',
      marginVertical: 10
    },
    button: {
        width:300,
        backgroundColor:'#ff3d00',
        borderRadius: 20,
        marginVertical: 10,
        paddingVertical: 13
    },
    facebookButton: {
        width:300,
        backgroundColor:'#4267b2',
        borderRadius: 20,
        marginVertical: 10,
        paddingVertical: 13
    },
    buttonText: {
      fontSize:16,
      fontWeight:'500',
      color:'#ffffff',
      textAlign:'center'
    }
    
  });