import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class Absentee extends Component {
    _onPressYesButton = () => {
        console.log("Absentee YES");
        this.props.navigation.navigate('ElectionWorker');
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