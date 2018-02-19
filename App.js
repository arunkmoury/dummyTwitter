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
import { Welcome } from './src/screens/Welcome';
import TabNav, { Home } from './src/screens/Home';
import DrawerNav from './src/screens/Profile';
import StackNav from './src/screens/Welcome';

export default class App extends Component<> {
  render() {
    return (
        <StackNav />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
