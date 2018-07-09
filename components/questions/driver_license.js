import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class DriverLicense extends Component {
    _onPressYesButton = () => {
        console.log("driver license YES");
        this.props.navigation.navigate('DriverLicenseYes');
    }

    _onPressNoButton = () => {
        console.log("driver license NO");
        this.props.navigation.navigate('DriverLicenseNo');
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