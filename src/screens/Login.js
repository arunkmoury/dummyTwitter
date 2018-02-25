import React, { Component } from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Alert,
    Keyboard
    } from 'react-native';
import firebase from 'firebase';
import Input from '../components/Input';
import Spinner from '../components/Spinner';
import AlertMsg from '../components/AlertMsg';

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
                errorMessage: '',
                isloading: false,
            },
            () => { console.log(this.state.isloading) }
        );
        this.props.buttonPress();
    }

    onCreateAccountSuccess(){
        this.setState({
            isloading: false,
            errorMessage: '',
        },() => console.log(this.state.isloading)
        )
        this.props.buttonPress();
    }

    alertMsg = (ErrorMsg) => {
        Keyboard.dismiss();
        Alert.alert(
            'Authentication Failed',
            this.state.errorMessage,
            [
                { 
                    text: 'OK', 
                    onPress: () => {
                        this.setState(
                            {
                                isloading: false,
                            },
                            () => { console.log(this.state.isloading) }
                        );
                    }
                },
            ],
          )
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

    login(){
        const { name, email, password, isloading } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
                .then(()=>{
                    console.log("sign in");
                    this.onLoginSuccess();
                })
                .catch((error) => {
                    let errorCode = error.code;
                    let errorMessage = error.message;
                    if(errorCode==='auth/user-not-found'){
                        this.setState({errorMessage: 'Email not found, Check your email'});
                        // <AlertMsg ErrorMsg={this.state.errorMessage} />
                        this.alertMsg(errorMessage);
                    }else if(errorCode==='auth/wrong-password'){
                        this.setState({errorMessage: 'Wrong password, check your password'});
                        //<AlertMsg ErrorMsg={this.state.errorMessage} />
                        this.alertMsg(errorMessage);
                    }else{
                        this.setState({errorMessage: 'Something went wrong'});
                        console.log(errorCode);
                        //<AlertMsg ErrorMsg={this.state.errorMessage} />
                        this.alertMsg(errorMessage);
                    }
                });
    }

    signup(){
        const { name, email, password, isloading } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(()=> {
                console.log("Account Created")
                this.onCreateAccountSuccess();
            })
            .catch((error) => {
                let errorCode = error.code;
                let errorMessage = error.message;
                switch(errorCode){
                    case 'auth/email-already-in-use':
                        console.log(errorMessage);
                        this.setState({errorMessage: errorMessage});
                        this.alertMsg(errorMessage);
                        break;
                    case 'auth/invalid-email':
                        console.log(errorMessage);
                        this.setState({errorMessage: errorMessage});
                        this.alertMsg(errorMessage);
                        break;
                    case 'auth/weak-password':
                        console.log(errorMessage);
                        this.setState({errorMessage: errorMessage});
                        this.alertMsg(errorMessage);
                        break;
                    default:
                        console.log(errorMessage);
                        this.setState({errorMessage: errorMessage});
                        this.alertMsg(errorMessage);
                }
            })
    }

    buttonPressed(){
        //const { name, email, password, isloading } = this.state;

        this.setState({errorMessage: '', isloading: true});

        if(this.props.userAction==='Login'){
            this.login();
        }
        //User Sign Up
        else{
            this.signup();
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