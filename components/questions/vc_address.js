import React, { Component } from 'react';
import { Button, TextInput, StyleSheet, Text, View } from 'react-native';
import { postData } from '../postData';

export default class VCAddress extends Component {
    constructor(props) {
        super(props);
        this.state = { address1: '',
                       apt: '',
                       city: '',
                       zipCode: ''
                     };
    }

    _onPressContinueButton = () => {
        let addr = '' + this.state.address1 + ' ' + this.state.apt + ' ' + this.state.city + ' ' + this.state.zipCode;
        let data = {
            "vh_address" : addr
        };
        postData(data, () => {
            console.log("VCAddress Continue");
            this.props.navigation.navigate('VCCounty');
        });
    }

    _onPressNoChangeButton = () => {
        data = {
            "vh_address" : ''
        };
        postData(data, () => {
            console.log("VCAddress No Change");
            this.props.navigation.navigate('VCCounty');
        });
    }
    
    render() {
        return(
            <View style={styles.container}>
                <Text>
                    If your address has changed since the last time you voted, what was your previous address?
                </Text>
                <TextInput
                    onChangeText={(address1) => this.setState({address1})}
                    value={this.state.address1} placeholder={'Address (No P.O. Box'}
                />
                <TextInput
                    onChangeText={(apt) => this.setState({apt})}
                    value={this.state.apt} placeholder={'Apartment #'}
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
                <Button
                    onPress={this._onPressNoChangeButton}
                    title="No Change"
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