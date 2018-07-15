import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class DriverLicense extends Component {
    _onPressYesButton = () => {
        console.log("driver license YES");
        this.props.navigation.navigate('DriverLicenseYes');
    }

    _onPressNoButton = () => {
        fetch('http://localhost:5000/start')
        .then(
            function(response) {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                response.status);
                return;
            }
            // Examine the text in the response
            response.json().then(function(data) {
                console.log(data);
            });
            }
        )
        .then(() => { 
            console.log("driver license NO");
            this.props.navigation.navigate('DriverLicenseNo');
        })
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });
    }
    
    render() {
        return(
            <View style={styles.container}>
                <Text>
                    Do you have a NYS driver's license?
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