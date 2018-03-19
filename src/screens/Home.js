import React, { Component } from 'react';
import { View, Text, ScrollView, Button, Alert, Animated, BackHandler, AsyncStorage, TouchableOpacity } from 'react-native';
import {NavigationActions} from 'react-navigation';
import { connect } from 'react-redux';
import { logout } from '../actions';
import Header from '../components/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';


export class Home extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentWillMount() {
        this.props.navigation.setParams({
            logout: this.props.logout,
        })
        //console.log(this.props)
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

    static navigationOptions = ({navigation}) => {
        const params = navigation.state.params || {};
        return {
            title: 'Home',
            header: <Header 
                    headerTitle={navigation.state.routeName} 
                    onButtonPress={() => {
                        NavigationActions.reset({
                            index: 0,
                            actions: [
                                NavigationActions.navigate({ routeName: 'Welcome' })
                            ]
                          })
                        navigation.navigate('Welcome') 
                    }}
                    profilePress={() => navigation.navigate('DrawerOpen')}
                />,
        }
    };


    alertButton(){
        return(
        Alert.alert(
            'Alert Title',
            "Alert message",
            [
              { text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
          ));
    }

    checkLoginUser (){
        // try{
        //     AsyncStorage.getItem('isLogin').then(user => console.log(user));
        // }catch(error){
        //     console.log(error);
        // }
        return;
    }

    render(){
        return (
            <View 
                style={{height: 1000}}
            >

                <View style={{height: 1000}}>
                    <Text>Home</Text>       
                    <Button title="Logout" onPress={() => this.props.navigation.navigate('Welcome')} />
                </View>
            </View>
        );
    }
}

// const mapDispatch = (dispatch) => ({
//     logout: () => {this.props.logout(),
//         NavigationActions.reset({
//         index: 0,
//         actions: [NavigationActions.navigate({ routeName: "Welcome" })]
//    })}
//   })

// const  LogoutButton = ({logout}) => {
//     return (
//      <TouchableOpacity  style={{height: 50, width: 100}} onPress={() => {console.log(logout)}} >
//        <Text>Logout</Text>
//      </TouchableOpacity>
//     )
// }

mapStateToProp = ({auth}) => {
    return {
        user: auth.user,
    }
}

export default connect(mapStateToProp, {logout})(Home);