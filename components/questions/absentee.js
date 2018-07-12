import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class Absentee extends Component {
    _onPressYesButton = async () => {
        fetch('http://localhost:5000/data', { //change URL
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "absentee_check": "X"
            })
        })
        .then(() => {
            console.log("Absentee YES");
        this.props.navigation.navigate('ElectionWorker');
        })
        .catch((error) => {
            console.error(error);
        })
    }

    _onPressNoButton = () => {
        console.log("Absentee NO");
        this.props.navigation.navigate('ElectionWorker');
        
        
    }
    render() {
        return(
            <View style={styles.container}>
                <Text>
                    Do you need to apply for an absentee ballot? 
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