import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Grid, Row, Container } from 'native-base';
import { StackNavigator } from 'react-navigation';
import TabNav from './Home';

export class Welcome extends Component {
    render(){
        return (
            <Container>
                    <Grid>
                        <Row size={3}>
                            <Text style={styles.welcomeStyle}>Welcome to Dummy Twitter</Text>
                        </Row>
                        <Row size={2}>
                            <Button title="Login" style={{width: 100}} onPress={() => this.props.navigation.navigate('Home')} />
                        </Row>
                    </Grid>
            </Container>
        );
    }
}

const StackNav = StackNavigator({
    Welcome: {
        screen: Welcome,
    },
    TabNav: {
        screen: TabNav,
    },
});

export default StackNav;

const styles = StyleSheet.create({
    welcomeStyle: {
        justifyContent: 'center',
        alignSelf: 'center',
    },
    loginStyle: {
        justifyContent: 'center',
        alignSelf: 'center',
    }
});