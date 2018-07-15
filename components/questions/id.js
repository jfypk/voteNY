import React, { Component } from 'react';
import { Picker, Button, StyleSheet, Text, View } from 'react-native';
import { postData } from '../postData';

export default class Id_Type extends Component {
    constructor(props) {
        super(props);
        this.state = { id_type: 'dmv' };
    }

    _onPressContinueButton = () => {
        console.log("Id_Type Continue");
        console.log(this.state.id_type);
        if (this.state.id_type === "dmv") {
            data = {
                    "id_ssn_check": "",
                    "no_id_check": "",
                    "id_dmv_check": "X"
                };
            postData(data, () => {
                console.log("USCitizen YES");
                this.props.navigation.navigate('DMV_Number');
            });
        } else if (this.state.id_type === "ssn") {
            data = {
                    "id_ssn_check": "X",
                    "no_id_check": "",
                    "id_dmv_check": ""
                };
            postData(data, () => {
                console.log("USCitizen YES");
                this.props.navigation.navigate('SSN_Number');
            });
        } else if (this.state.id_type === "no_id") {
            data = {
                    "id_ssn_check": "",
                    "no_id_check": "X",
                    "id_dmv_check": ""
                };
            postData(data, () => {
                console.log("USCitizen YES");
                this.props.navigation.navigate('Party');
            });
        } else {
            console.log("ERROR");
        }
        
    }
    
    render() {
        return(
            <View style={styles.container}>
                <Text>
                    Choose a form of identification.
                </Text>
                <Text>
                    We’ll try to check your identity before Election Day, through the DMV number (driver’s license number or non-driver ID number), or the last four digits of your social security number, which you’ll fill in below.
                </Text>
                <Text>
                    If you do not have a DMV or social security number, you may use a valid photo ID, a current utility bill, bank statement, paycheck, government check or some other government document that shows your name and address. You may include a copy of one of those types of ID with this form— be sure to tape the sides of the form closed.
                </Text>
                <Text>
                    If we are unable to verify your identity before Election Day, you will be asked for ID when you vote for the first time.
                </Text>
                <Picker
                    selectedValue={this.state.id_type}
                    style={{ height: 50, width: 100 }}
                    onValueChange={(itemValue, itemIndex) => this.setState({id_type: itemValue})}>
                    <Picker.Item label="New York State DMV Number" value="dmv" />
                    <Picker.Item label="Social Security Number" value="ssn" />
                    <Picker.Item label="I do not have a NYS Driver's License or a Social Security Number" value="no_id" />
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