import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class DMV_Redirect extends Component {
    _onPressDMVButton = () => {
        console.log("To DMV");
    }

    _onPressContinueButton = () => {
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
            console.log("To Continue");
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
                    If you have a NYS driver’s license, it will be easier to fill a voter registration form at the DMV website. 
                </Text>
                <Button
                    onPress={this._onPressDMVButton}
                    title="Take me to DMV Site"
                />
                <Button
                    onPress={this._onPressContinueButton}
                    title="Continue with VoteNY!"
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