import React, { Component } from 'react';
import { Button, TextInput, StyleSheet, Text, View } from 'react-native';

export default class SSN extends Component {
    constructor(props) {
        super(props);
        this.state = { ssnNumber: 'XXXX' };
    }

    _onPressContinueButton = () => {
        console.log("SSN_Number Continue");
        console.log(this.state.ssnNumber);
        this.props.navigation.navigate('Party');
    }
    
    render() {
        return(
            <View style={styles.container}>
                <Text>
                    What are the last four digits of your Social Security Number?
                </Text>
                <TextInput
                    onChangeText={(ssnNumber) => this.setState({ssnNumber})}
                    value={this.state.ssnNumber} maxLength={4} clearTextOnFocus={true}
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