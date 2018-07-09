import React, { Component } from 'react';
import { Button, TextInput, StyleSheet, Text, View } from 'react-native';

export default class Email extends Component {
    constructor(props) {
        super(props);
        this.state = { email: 'Email Address' };
    }

    _onPressContinueButton = () => {
        console.log("Email Continue");
        console.log(this.state.email);
        this.props.navigation.navigate('ResiAddress');
    }
    
    render() {
        return(
            <View style={styles.container}>
                <Text>
                    What is your email address?
                </Text>
                <TextInput
                    onChangeText={(email) => this.setState({email})}
                    value={this.state.email} clearTextOnFocus={true}
                />
                <Button
                    onPress={this._onPressContinueButton}
                    title="Continue"
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