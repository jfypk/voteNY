import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class ElectionWorker extends Component {
    _onPressYesButton = () => {
        console.log("ElectionWorker YES");
        this.props.navigation.navigate('Complete');
    }

    _onPressNoButton = () => {
        console.log("ElectionWorker NO");
        this.props.navigation.navigate('Complete');
        
        
    }
    render() {
        return(
            <View style={styles.container}>
                <Text>
                    Would you like to be an Election Day worker?
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