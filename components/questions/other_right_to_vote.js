import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class OtherVote extends Component {
    _onPressYesButton = () => {
        console.log("OtherVote YES");
        this.props.navigation.navigate('Unable');
    }

    _onPressNoButton = () => {
        console.log("OtherVote NO");
        this.props.navigation.navigate('USCitizen');
        
        
    }
    render() {
        return(
            <View style={styles.container}>
                <Text>
                    Do you claim the right to vote elsewhere?
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