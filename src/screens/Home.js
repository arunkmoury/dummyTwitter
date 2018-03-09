import React, { Component } from 'react';
import { View, Text, ScrollView, Button, Alert, Animated } from 'react-native';
import Header from '../components/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
export class Home extends Component {

    constructor(props){
        super(props);
        // this.state = {
        //     scrollY: new Animated.Value(0)
        // }
    }
    
    static navigationOptions = ({navigation}) =>( {
        title: 'Home',
        header: <Header headerTitle={navigation.state.routeName}/>,
        
        // headerStyle: {
        //     backgroundColor: 'lightskyblue',
        // },
        headerTintColor: '#fff',
      });

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

    render(){
        // const headerHeight = this.state.scrollY.interpolate({
        //     inputRange: [0, 120],
        //     outputRange: [120, 0],
        // })

        return (
            <ScrollView 
                style={{height: 1000}}
                // onScroll={Animated.event(
                //     [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
                //)}
            >
                <View style={{height: 1000}}>
                <Text>Home</Text>
                <Button onPress={this.alertButton.bind(this)} title="Alert" />
                </View>
            </ScrollView>
        );
    }
}

export default Home;