import React, { Component } from 'react';
import { Button, TextInput, StyleSheet, Text, View } from 'react-native';

export default class VCName extends Component {
    constructor(props) {
        super(props);
        this.state = { firstName: 'First Name',
                       middleInitial: 'Middle Initial',
                       lastName: 'Last Name',
                       suffix: 'Suffix' };
    }

    _onPressContinueButton = () => {
        console.log("VCName Continue");
        console.log(this.state.firstName + ' ' + this.state.middleInitial + ' ' + this.state.lastName + ' ' + this.state.suffix);
        this.props.navigation.navigate('VCAddress');
    }

    _onPressNoChangeButton = () => {
        console.log("VCName No Change");
        this.props.navigation.navigate('VCAddress');
    }
    
    render() {
        return(
            <View style={styles.container}>
                <Text>
                    If you had a different name the last time you voted, what was it?
                </Text>
                <TextInput
                    onChangeText={(firstName) => this.setState({firstName})}
                    value={this.state.firstName} clearTextOnFocus={true}
                />
                <TextInput
                    onChangeText={(middleInitial) => this.setState({middleInitial})}
                    value={this.state.middleInitial} maxLength={1} clearTextOnFocus={true}
                />
                <TextInput
                    onChangeText={(lastName) => this.setState({lastName})}
                    value={this.state.lastName} clearTextOnFocus={true}
                />
                <TextInput
                    onChangeText={(suffix) => this.setState({suffix})}
                    value={this.state.suffix} clearTextOnFocus={true}
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