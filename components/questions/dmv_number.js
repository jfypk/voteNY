import React, { Component } from 'react';
import { Button, TextInput, StyleSheet, Text, View } from 'react-native';
import { postData } from '../postData';

export default class DMV_Number extends Component {
    constructor(props) {
        super(props);
        this.state = { dmvNumber: 'XXXXXXXXX' };
    }

    _onPressContinueButton = () => {
        let data = {
            "dmv" : this.state.dmvNumber
        };
        postData(data,() => {
            console.log("DMV_Number Continue");
            this.props.navigation.navigate('Party');
        });
    }
    
    render() {
        return(
            <View style={styles.container}>
                <Text>
                    What is your New York State DMV Number? This number is located on your New York State Driver's License. 
                </Text>
                <TextInput
                    onChangeText={(dmvNumber) => this.setState({dmvNumber})}
                    value={this.state.dmvNumber} maxLength={9} placeholder={'123456789'}
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