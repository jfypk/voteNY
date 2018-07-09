import React, { Component } from 'react';
import { Picker, Button, TextInput, StyleSheet, Text, View } from 'react-native';

export default class MailAddress extends Component {
    constructor(props) {
        super(props);
        this.state = { address1: 'Address or P.O. Box',
                       pobox: 'P.O. Box',
                       city: 'City/Town/Village',
                       zipCode: 'Zip Code'
                     };
    }

    _onPressContinueButton = () => {
        console.log("MailAddress Continue");
        console.log(this.state.address1 + ' ' + this.state.pobox + ' ' + this.state.city + ' ' + this.state.zipCode);
        this.props.navigation.navigate('VotedBefore');
    }
    
    render() {
        return(
            <View style={styles.container}>
                <Text>
                    What is the address of where you live?
                </Text>
                <TextInput
                    onChangeText={(address1) => this.setState({address1})}
                    value={this.state.address1} clearTextOnFocus={true}
                />
                <TextInput
                    onChangeText={(pobox) => this.setState({pobox})}
                    value={this.state.pobox} clearTextOnFocus={true}
                />
                <TextInput
                    onChangeText={(city) => this.setState({city})}
                    value={this.state.city} clearTextOnFocus={true}
                />
                <TextInput
                    onChangeText={(zipCode) => this.setState({zipCode})}
                    value={this.state.zipCode} clearTextOnFocus={true} maxLength={5}
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