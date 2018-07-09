import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class Prison extends Component {
    _onPressYesButton = () => {
        console.log("Prison YES");
        this.props.navigation.navigate('Unable');
    }

    _onPressNoButton = () => {
        console.log("Prison NO");
        this.props.navigation.navigate('OtherVote');
        
        
    }
    render() {
        return(
            <View style={styles.container}>
                <Text>
                    Are you in prison or on parole for a felony conviction? 
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