import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class NYS_Resident extends Component {
    _onPressYesButton = () => {
        console.log("NYS Resident YES");
        this.props.navigation.navigate('Prison');
    }

    _onPressNoButton = () => {
        console.log("NYS Resident NO");
        this.props.navigation.navigate('Unable');
        
    }
    render() {
        return(
            <View style={styles.container}>
                <Text>
                    Are you a resident of New York state and the county, city, or village for at least 30 days before the election?
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