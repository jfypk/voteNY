import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class VotedBefore extends Component {
    _onPressYesButton = () => {
        console.log("VotedBefore YES");
        this.props.navigation.navigate('LastVoteYear');
    }

    _onPressNoButton = () => {
        console.log("VotedBefore NO");
        this.props.navigation.navigate('Id_Type');
    }
    
    render() {
        return(
            <View style={styles.container}>
                <Text>
                    Have you voted before?
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