/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import firebase from 'firebase';
import { DrawerNav } from './src/components/navs/navigators';
import SplashScreen from './src/components/SplashScreen';

export default class App extends Component<> {


  constructor(props){
    super(props);
    this.state = {
        timePassed: false,
    };
  }

  componentWillMount(){

    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: 'AIzaSyCSjp6i9w8uaeWQtqB9RD-WzcX4dd-K1v0',
        authDomain: 'twitter-6edbb.firebaseapp.com',
        databaseURL: 'https://twitter-6edbb.firebaseio.com',
        projectId: 'twitter-6edbb',
        storageBucket: 'twitter-6edbb.appspot.com',
        messagingSenderId: '471065315757'
      });
    } 
  }

  componentDidMount() {
    setTimeout( () => {
      this.setTimePassed();
    },500);
  }

  setTimePassed() {
      this.setState({timePassed: true});
  }

  render() {
    if (!this.state.timePassed) {
      return <SplashScreen />;
    } else {
        return <DrawerNav />;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
