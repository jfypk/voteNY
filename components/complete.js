import React, { Component } from 'react';
import { Button, TextInput, StyleSheet, Text, View } from 'react-native';

export default class Complete extends Component {

    _onPressContinueButton = () => {
        console.log("Complete Email");
        this.props.navigation.navigate('Home');
    }
    
    render() {
        return(
            <View style={styles.container}>
                <Text>
                    Congratulations!
                </Text>
                <Text>
                    You have completed the NYS Voter Registration form, and we will send it to the email address you provided. 
                </Text>
                <Text>
                    We'll email you the form so you can print it out. Please be sure to sign at the bottom of the form before mailing it in. Be sure to mail your form in within 7 days. 
                </Text>
                <Text>
                    Thank you for using VoteNY!
                </Text>
                <Button
                    onPress={this._onPressEmailButton}
                    title="Email me my form"
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