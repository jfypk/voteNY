import React, { Component } from 'react';
import { Alert, Button, TextInput, StyleSheet, Text, View } from 'react-native';
import { postData } from '../postData';

export default class Email extends Component {

    constructor(props) {
        super(props);
        this.state = { email: '',
                       confirmEmail: '' };
        var validEmail = false;
        var confirmedEmail = false;
    }

    _onPressContinueButton = () => {
        confirmedEmail = this.state.email.toLowerCase() === this.state.confirmEmail.toLowerCase();
        if(validEmail && confirmedEmail) {
            let data = {
                "email" : this.state.email
            };
            postData(data, () => {
                console.log("Email Continue");
                this.props.navigation.navigate('ResiAddress');
            });
        } else {
            if(!validEmail) {
                console.log("Invalid Email");
                Alert.alert(
                    'Invalid email addresses',
                    'Please try again.',
                    [
                        {text: 'Ok', onPress: () => console.log('Ok')}
                    ],
                    { cancelable: false }
                );
            } else if (!confirmedEmail) {
                console.log("Unconfirmed Email");
                Alert.alert(
                    "Email addresses don't match",
                    'Please try again.',
                    [
                        {text: 'Ok', onPress: () => console.log('Ok')}
                    ],
                    { cancelable: false }
                );
            }
        }
    }
    
    validate = (text) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        if(reg.test(text) === false) {
            console.log("Email is Not Correct");
            this.setState({email:text});
            validEmail = false;
                return false;
        } else {
            this.setState({email:text});
            validEmail = true;
            console.log("Email is Correct");
        }
    }

    //need a more elegant solution to this...
    validate2 = (text) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        if(reg.test(text) === false) {
            this.setState({confirmEmail:text});
                return false;
        } else {
            this.setState({confirmEmail:text});
        }
    }
    
    render() {
        return(
            <View style={styles.container}>
                <Text>
                    What is your email address?
                </Text>
                <TextInput
                    onChangeText={(text) => this.validate(text)}
                    value={this.state.email} placeholder={"Email"} keyboardType = {"email-address"} autoCapitalize = 'none'
                />
                <TextInput
                    onChangeText={(text2) => this.validate2(text2)}
                    value={this.state.confirmEmail} placeholder={"Confirm email"} keyboardType = {"email-address"} autoCapitalize = 'none'
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