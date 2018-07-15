import React, { Component } from 'react';
import { Button, TextInput, StyleSheet, Text, View } from 'react-native';
import { postData } from '../postData';

export default class VCName extends Component {
    constructor(props) {
        super(props);
        this.state = { firstName: '',
                       middleInitial: '',
                       lastName: '',
                       suffix: '' };
    }

    _onPressContinueButton = () => { 
        if(this.state.lastName.length > 0 || this.state.firstName.length > 0 ) {
            let n = '' + this.state.firstName + this.state.middleInitial + this.state.lastName + this.state.suffix;
            let data = {
                "vh_name" : n
            };
            postData(data, () => {
                console.log("VCName Continue");
                this.props.navigation.navigate('VCAddress');
            });
        } else {
            Alert.alert(
                    'Please input a valid name',
                    'First and last names are required.',
                    [
                        {text: 'Ok', onPress: () => console.log('Invalid name')}
                    ],
                    { cancelable: true }
                )
        }
    }

    _onPressNoChangeButton = () => {
        data = {
                    "vh_name": ''
                }
        postData(data, () => {
            console.log("VCName No Change");
            this.props.navigation.navigate('VCAddress');
        }); 
    }
    
    render() {
        return(
            <View style={styles.container}>
                <Text>
                    If you had a different name the last time you voted, what was it?
                </Text>
                <TextInput
                    onChangeText={(firstName) => this.setState({firstName})}
                    value={this.state.firstName} placeholder={"First Name"}
                />
                <TextInput
                    onChangeText={(middleInitial) => this.setState({middleInitial})}
                    value={this.state.middleInitial} maxLength={1} placeholder={"Middle Initial"}
                />
                <TextInput
                    onChangeText={(lastName) => this.setState({lastName})}
                    value={this.state.lastName} placeholder={"Last Name"}
                />
                <TextInput
                    onChangeText={(suffix) => this.setState({suffix})}
                    value={this.state.suffix} placeholder={"Suffix (e.g. Jr., III, etc.)"}
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