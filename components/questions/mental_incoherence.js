import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class Mental extends Component {
    _onPressYesButton = () => {
        console.log("Mental YES");
        this.props.navigation.navigate('Unable');
    }

    _onPressNoButton = () => {
        console.log("Mental NO");
        this.props.navigation.navigate('OtherVote');
        
        
    }
    render() {
        return(
            <View style={styles.container}>
                <Text>
                    Are you adjudged to be mentally incompetent by a court?
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