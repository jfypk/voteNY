import React, { Component } from 'react';
import { Picker, Button, TextInput, StyleSheet, Text, View } from 'react-native';
import { postData } from '../postData';

export default class ResiAddress extends Component {
    constructor(props) {
        super(props);
        this.state = { address1: '',
                       apt: '',
                       city: '',
                       county: '',
                       zipCode: ''
                     };
    }

    _onPressContinueButton = () => {
        data = {
            "resi_address" : this.state.address1,
            "resi_apt#": this.state.apt,
            "resi_city" : this.state.city,
            "resi_county" : this.state.county,
            "resi_zip" : this.state.zipCode
        }
        postData(data, () => {
            console.log("ResiAddress Continue");
            this.props.navigation.navigate('DifferentMail');
        });
    }
    
    render() {
        return(
            <View style={styles.container}>
                <Text>
                    What is the address of where you live?
                </Text>
                <TextInput
                    onChangeText={(address1) => this.setState({address1})}
                    value={this.state.address1} placeholder={'Address (No P.O. Box)'}
                />
                <TextInput
                    onChangeText={(address2) => this.setState({address2})}
                    value={this.state.address2} placeholder={'Apartment #'}
                />
                <TextInput
                    onChangeText={(city) => this.setState({city})}
                    value={this.state.city} placeholder={'City/Town/Village'}
                />
                <TextInput
                    onChangeText={(zipCode) => this.setState({zipCode})}
                    value={this.state.zipCode} placeholder={'Zip Code'} maxLength={5}
                />
                <Picker
                    selectedValue={this.state.county}
                    style={{ height: 50, width: 100 }}
                    onValueChange={(itemValue, itemIndex) => this.setState({county: itemValue})}>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
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