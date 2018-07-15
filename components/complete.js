import React, { Component } from 'react';
import { Button, TextInput, StyleSheet, Text, View } from 'react-native';

export default class Complete extends Component {

    _onPressEmailButton = () => {
        fetch('https://voteny-api-heroku.herokuapp.com/complete')
        .then(
            function(response) {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                response.status);
                return;
            }
            // Examine the text in the response
            response.json().then(function(data) {
                console.log(data);
            });
            }
        )
        .then(() => { 
            console.log("Complete Email");
            this.props.navigation.navigate('Home');
        })
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });
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