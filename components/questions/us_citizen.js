import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { postData } from '../postData';

export default class USCitizen extends Component {
    _onPressYesButton = async () => {
        data = {
                    "us_citizen_yes": "",
                    "us_citizen_no" : "X"
                }
        postData(data, () => {
            console.log("USCitizen YES");
            this.props.navigation.navigate('Birthday');
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