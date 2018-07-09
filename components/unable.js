import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class Unable extends Component {
    _onPressLearnButton = () => {
        console.log("Unable Learn More");
    }

    _onPressVolunteerButton = () => {
        console.log("Unable Volunteer");
    }

    _onPressHomeButton = () => {
        console.log("Unable Home");
        this.props.navigation.navigate('Home');
    }

    render() {
        return(
            <View style={styles.container}>
                <Text>
                    Sorry!
                </Text>
                <Text>
                    You are ineligible to vote in New York State elections. 
                </Text>
                <Button
                    onPress={this._onPressLearnButton}
                    title="Learn more"
                />
                <Button
                    onPress={this._onPressVolunteerButton}
                    title="Volunteer"
                />
                <Text>
                    Thank you for using VoteNY!
                </Text>
                <Button
                    onPress={this._onPressHomeButton}
                    title="Home"
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