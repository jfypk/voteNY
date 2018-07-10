import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class USCitizen extends Component {
    _onPressYesButton = async () => {
        fetch('http://192.168.0.8:5000/postdata', { //what's the URL...
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "us_citizen_yes": "X",
                "us_citizen_no" : ""
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log("USCitizen YES");
            this.props.navigation.navigate('Birthday');
        })
        .catch((error) => {
            console.error(error);
        });
    }

    _onPressNoButton = () => {
        console.log("USCitizen NO");
        this.props.navigation.navigate('Unable');
        
        
    }

    

    render() {
        return(
            <View style={styles.container}>
                <Text>
                    Are you a US Citizen?
                </Text>
                <Button
                    onPress={this._onPressYesButton}
                    title="Yes"
                />
                <Button
                    onPress={this._onPressNoButton}
                    title="No"
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