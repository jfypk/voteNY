import React, { Component } from 'react';
import { Button, TextInput, StyleSheet, Text, View } from 'react-native';
import { postData } from '../postData';

export default class SSN extends Component {
    constructor(props) {
        super(props);
        this.state = { ssnNumber: '' };
    }

    _onPressContinueButton = () => {
        let data = {
                    "ssn": this.state.ssnNumber
                };
        postData(data, () => {
            console.log("SSN_Number Continue");
            console.log(this.state.ssnNumber);
            this.props.navigation.navigate('Party');
        });
    }
    
    render() {
        return(
            <View style={styles.container}>
                <Text>
                    What are the last four digits of your Social Security Number?
                </Text>
                <TextInput
                    onChangeText={(ssnNumber) => this.setState({ssnNumber})}
                    value={this.state.ssnNumber} maxLength={4} placeholder={'1234'} keyboardType = {"number-pad"}
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