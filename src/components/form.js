import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged } from '../actions';
import Input from './Input';

class Form extends Component {
    
    render(){
        return(
            <View>
                <Input
                    placeholder="Email"
                    keyboardType="email-address"
                    value={this.props.email}
                    onChangeText={(text) => this.props.emailChanged(text)}
                />
                <Input
                    placeholder="Password"
                    value={this.props.password}
                    onChangeText={(text) => this.props.passwordChanged(text)}
                    secureTextEntry
                />
            </View>
        )
    }
}

const mapStateToProps = ({ auth }) => {
    return {
        email: auth.email,
        password: auth.password,
        error: auth.error,
        loading: auth.loading
    }
} 

export default connect(mapStateToProps, { emailChanged, passwordChanged })(Form);