import React, { Component } from 'react';
import { Button, TextInput, StyleSheet, Text, View } from 'react-native';

export default class VCAddress extends Component {
    constructor(props) {
        super(props);
        this.state = { address1: 'Address (No P.O. Box)',
                       apt: 'Apt. number',
                       city: 'City/Town/Village',
                       county: 'County',
                       zipCode: 'Zip Code'
                     };
    }

    _onPressContinueButton = () => {
        console.log("VCAddress Continue");
        console.log(this.state.address1 + ' ' + this.state.address2 + ' ' + this.state.city + ' ' + this.state.county + ' ' + this.state.zipCode);
        this.props.navigation.navigate('VCCounty');
    }

    _onPressNoChangeButton = () => {
        console.log("VCAddress No Change");
        this.props.navigation.navigate('VCCounty');
    }
    
    render() {
        return(
            <View style={styles.container}>
                <Text>
                    If your address has changed since the last time you voted, what was your previous address?
                </Text>
                <TextInput
                    onChangeText={(address1) => this.setState({address1})}
                    value={this.state.address1} clearTextOnFocus={true}
                />
                <TextInput
                    onChangeText={(address2) => this.setState({address2})}
                    value={this.state.address2} clearTextOnFocus={true}
                />
                <TextInput
                    onChangeText={(city) => this.setState({city})}
                    value={this.state.city} clearTextOnFocus={true}
                />
                <TextInput
                    onChangeText={(zipCode) => this.setState({zipCode})}
                    value={this.state.zipCode} clearTextOnFocus={true}
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