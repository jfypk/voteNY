import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class DifferentMail extends Component {
    _onPressYesButton = () => {
        console.log("DifferentMail YES");
        this.props.navigation.navigate('MailAddress');
    }

    _onPressNoButton = () => {
        console.log("DifferentMail NO");
        this.props.navigation.navigate('VotedBefore');
        
        
    }
    render() {
        return(
            <View style={styles.container}>
                <Text>
                    Is the address where you receive mail different than the address of where you live?
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