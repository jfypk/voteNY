import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { postData } from '../postData';

export default class Gender extends Component {

    _onPressMaleButton = () => {
        let data = {
            "male": "X",
            "female": ""
        };
        postData(data, () => {
            console.log("Gender Male");
            this.props.navigation.navigate('Email');
        });
    }

    _onPressFemaleButton = () => {
        let data = {
            "male": "",
            "female": "X"
        };
        postData(data, () => {
            console.log("Gender Female");
            this.props.navigation.navigate('Email');
        });   
    }

    _onPressSkipButton = () => {
        let data = {
            "male": "",
            "female": ""
        };
        postData(data, () => {
            console.log("Gender Skip");
        this.props.navigation.navigate('Email');
        });     
    }

    render() {
        return(
            <View style={styles.container}>
                <Text>
                    Are you a male or female?
                </Text>
                <Button
                    onPress={this._onPressMaleButton}
                    title="Male"
                />
                <Button
                    onPress={this._onPressFemaleButton}
                    title="Female"
                />
                <Button
                    onPress={this._onPressSkipButton}
                    title="Skip"
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