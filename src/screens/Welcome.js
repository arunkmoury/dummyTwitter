import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Modal, BackHandler, Alert, Image } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'firebase';
import {
    loginUser,
    clearError,
    signupUser,
    clear
} from '../actions';
import Input from '../components/Input';
import Spinner from '../components/Spinner';
import Form from '../components/form';

class Welcome extends Component {
    constructor(props){
        super(props);
        this.state = {
            modalVisible: false,
        }
        this.renderHome = this.renderHome.bind(this);
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
      }

    handleBackButton = () => {
        Alert.alert(
            'Exit App',
            'Exiting the application?', 
            [
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'}, 
                {text: 'OK', onPress: () => BackHandler.exitApp()}
            ], 
            { cancelable: false }
        )
        return true;
    } 

    static navigationOptions = () => ({
        drawerLockMode: 'locked-closed'
    })

    loginButtonPress() {
        this.props.loginUser(this.props.email, this.props.password);
    }

    renderHome(){
        this.props.navigation.navigate('StackNav');
    }

    renderLoginButton(loading){
        if(loading){
            return <Spinner />;
        }else{
            return (
                <View style={{alignItems: 'center'}}>
                    <TouchableOpacity style={styles.button} onPress={this.loginButtonPress.bind(this)} >
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    {(this.props.error!=='')?this.renderErrorMsg():null}
                    <Text style={{lineHeight: 50}}>OR</Text>
                    <TouchableOpacity style={styles.button} onPress={() => {this.props.clear();this.props.clearError();this.setState({modalVisible: true})}} >
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            );
        }
    }

    renderSignupButton(loading){
        if(loading){
            return <Spinner />;
        }else{
            return (
                <View style={{alignItems: 'center'}}>
                    <TouchableOpacity style={styles.button} onPress={()=>this.props.signupUser(this.props.email, this.props.password)} >
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                    {(this.props.error!=='')?this.renderErrorMsg():null}
                </View>
            );
        }
    }

    renderErrorMsg(){
        return(
            <View>
                <Text>{this.props.error}</Text>
            </View>
        )
    }

    _closeModal(){
        this.props.clear();
        this.setState({
            modalVisible: false
        })
    }

    render() {
        return (
            <View style={styles.container}>
                {(this.props.user)?this.renderHome():null}
                <View style={{flex: 3, justifyContent: 'center'}}>
                    <View style={{width:180, height: 150, overflow: 'hidden', alignSelf: 'center'}}>
                        <Image 
                            source={require('../../assets/Twitter-logo.png')} 
                            style={{flex: 1, height: null, width: null}} 
                        />
                    </View>
                    <Form />
                    {this.renderLoginButton(this.props.loading)}
                </View>
                <Modal 
                    visible={this.state.modalVisible}
                    animationType={'fade'}
                    onRequestClose={this._closeModal.bind(this)}
                    position='center'
                >
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignContent: 'center',
                        alignSelf: 'center',
                        height: 500
                    }}>
                        <Form />
                        {this.renderSignupButton(this.props.loading)}
                        <Button
                            onPress={()=>{
                                this.props.clearError();
                                this.props.clear();
                                this.setState({
                                modalVisible: false
                            })}}
                            title="Close Modal"
                        />
                    </View>
                </Modal>
            </View>
        );
    }
}

mapStateToProp = ({auth}) => {
    return {
        email: auth.email,
        password: auth.password,
        user: auth.user,
        error: auth.error,
        loading: auth.loading,
    }
}

export default connect(mapStateToProp, { loginUser, clearError, signupUser, clear })(Welcome);

const styles = StyleSheet.create({

    container : {
        backgroundColor:'#4fc3f7',
        flex: 1,
        alignItems:'center',
        justifyContent :'center'
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