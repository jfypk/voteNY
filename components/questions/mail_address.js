import React, { Component } from 'react';
import { Picker, Button, TextInput, StyleSheet, Text, View } from 'react-native';
import { postData } from '../postData';

export default class MailAddress extends Component {
    constructor(props) {
        super(props);
        this.state = { address1: '',
                       pobox: '',
                       city: '',
                       zipCode: ''
                     };
    }

    _onPressContinueButton = () => {
        let data = {
            "mail_address": this.state.address1,
            "mail_po": this.state.pobox,
            "mail_zip": this.state.zipCode,
            "mail_city": this.state.city
        };
        postData(data, () => {
            console.log("MailAddress Continue");
            this.props.navigation.navigate('VotedBefore');
        });
    }
    
    render() {
        return(
            <View style={styles.container}>
                <Text>
                    What is your mailing address?
                </Text>
                <TextInput
                    onChangeText={(address1) => this.setState({address1})}
                    value={this.state.address1} placeholder={'Address or P.O. Box'}
                />
                <TextInput
                    onChangeText={(pobox) => this.setState({pobox})}
                    value={this.state.pobox} placeholder={'P.O. Box'}
                />
                <TextInput
                    onChangeText={(city) => this.setState({city})}
                    value={this.state.city} placeholder={'City/Town/Village'}
                />
                <TextInput
                    onChangeText={(zipCode) => this.setState({zipCode})}
                    value={this.state.zipCode} placeholder={'Zip Code'} maxLength={5} keyboardType = {"number-pad"}
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