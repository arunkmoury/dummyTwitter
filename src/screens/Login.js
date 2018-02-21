import React, { Component } from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    } from 'react-native';

class Login extends Component {
    render(){
        return (
            <View style={styles.container}>
                
                {
                    this.props.type==="Sign Up"?<TextInput 
                    style={styles.inputBox} 
                    underlineColorAndroid='rgba(0,0,0,0)' 
                    placeholder="Name"
                    placeholderTextColor = "#ffffff"
                    selectionColor="#fff"
                    onSubmitEditing={()=> this.email.focus()}
                />:null
                }
                
                <TextInput 
                    style={styles.inputBox} 
                    underlineColorAndroid='rgba(0,0,0,0)' 
                    placeholder="Email"
                    placeholderTextColor = "#ffffff"
                    selectionColor="#fff"
                    keyboardType="email-address"
                    onSubmitEditing={()=> this.password.focus()}
                    ref={(input) => this.email = input}
                />
                <TextInput 
                    style={styles.inputBox} 
                    underlineColorAndroid='rgba(0,0,0,0)' 
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor = "#ffffff"
                    ref={(input) => this.password = input}
                />
                <TouchableOpacity style={styles.button} onPress={this.props.buttonPressed} >
                    <Text style={styles.buttonText}>{this.props.type}</Text>
                </TouchableOpacity>  
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
    buttonText: {
      fontSize:16,
      fontWeight:'500',
      color:'#ffffff',
      textAlign:'center'
    }
    
  });