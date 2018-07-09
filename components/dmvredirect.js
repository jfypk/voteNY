import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class DMV_Redirect extends Component {
    _onPressDMVButton = () => {
        console.log("To DMV");
    }

    _onPressContinueButton = () => {
        console.log("To Continue");
        this.props.navigation.navigate('DriverLicenseNo');
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