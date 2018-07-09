import React, { Component } from 'react';
import {Button, StyleSheet, Text, View } from 'react-native';

export default class Home extends Component {
    
    //make sure to bind this method to access this keyword.
    _onPressButton = () => {
        this.props.navigation.navigate('Start');
        console.log("getting started");
    }
    render() {
        return(
            <View style={styles.container}>
                <Text>
                    Vote NY! helps you fill out your New York State Voter Registration Form. Answer some questions and we’ll email you a completed form with your information to print and mail in.
                </Text>
                <Button
                    onPress={this._onPressButton}
                    title="Get Started"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
