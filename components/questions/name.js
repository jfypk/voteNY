import React, { Component } from 'react';
import { Alert, Button, TextInput, StyleSheet, Text, View } from 'react-native';
import { postData } from '../postData';

export default class Name extends Component {
    constructor(props) {
        super(props);
        this.state = { firstName: '',
                       middleInitial: '',
                       lastName: '',
                       suffix: '' };
    }

    _onPressContinueButton = () => {
        if(this.state.lastName.length > 0 || this.state.firstName.length > 0 ) {
            let data = {
                "last_name" : this.state.lastName,
                "suffix" : this.state.suffix,
                "first_name": this.state.firstName,
                "middle_initial": this.state.middleInitial
            };
            postData(data, () => {
                console.log("Name Continue");
                this.props.navigation.navigate('Phone');
            })
            .catch((error) => {
                console.error(error);
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
    
    render() {
        return(
            <View style={styles.container}>
                <Text>
                    What is your name?
                </Text>
                <TextInput
                    onChangeText={(firstName) => this.setState({firstName})}
                    value={this.state.firstName} placeholder={"First Name"}
                />
                <TextInput
                    onChangeText={(middleInitial) => this.setState({middleInitial})}
                    value={this.state.middleInitial} maxLength={1}  placeholder={"Middle Initial"}
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