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
            name: this.props.user.displayName,
            logout: this.props.logout,
        })
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

    logout(params){
        params.logout();
        NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Welcome' }),
            ]
        })
    }

    static navigationOptions = ({navigation}) => {
        const params = navigation.state.params || {};
        return {
            title: 'Home',
            header: <Header 
                    headerTitle={navigation.state.routeName} 
                    name={params.name}
                    onButtonPress={() =>{ new Home().logout(params);navigation.navigate('Welcome') } // calling non static method from static method
                    }
                    profilePress={() => navigation.navigate('DrawerOpen')}
                />,
        }
    };

    checkLoginUser (){
        // try{
        //     AsyncStorage.getItem('isLogin').then(user => console.log(user));
        // }catch(error){
        //     console.log(error);
        // }
        return;
    }

    render(){
        console.log(this.props.user)
        return (
            
            <View 
                style={{height: 1000}}
            >
                {/* {(this.props.user!=='')?this.props.navigation.navigate('Welcome'):null} */}
                <View style={{height: 1000}}>
                    <Text>Home</Text>       
                    <Button title="Logout" onPress={() => {
                        NavigationActions.reset({
                            index: 0,
                            actions: [
                                NavigationActions.navigate({ routeName: 'Welcome' })
                            ]
                          });
                        this.props.navigation.navigate('Welcome')}} />
                </View>
            </View>
        );
    }
}

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