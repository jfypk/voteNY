import React, { Component } from 'react';
import { Button, TextInput, StyleSheet, Text, View } from 'react-native';

export default class Phone extends Component {
    constructor(props) {
        super(props);
        this.state = { areaCode: 'XXX',
                       firstThree: 'XXX',
                       lastFour: 'XXXX'
                       };
    }

    _onPressContinueButton = () => {
        console.log("Phone Continue");
        console.log(this.state.areaCode + ' ' + this.state.firstThree + ' ' + this.state.lastFour);
        this.props.navigation.navigate('Gender');
    }

    _onPressSkipButton = () => {
        console.log("Phone Skip");
        this.props.navigation.navigate('Gender');
    }
    
    render() {
        return(
            <View style={styles.container}>
                <Text>
                    What is your phone number?
                </Text>
                <TextInput
                    onChangeText={(areaCode) => this.setState({areaCode})}
                    value={this.state.areaCode} maxLength={3} clearTextOnFocus={true}
                />
                <TextInput
                    onChangeText={(firstThree) => this.setState({firstThree})}
                    value={this.state.firstThree} maxLength={3} clearTextOnFocus={true}
                />
                <TextInput
                    onChangeText={(lastFour) => this.setState({lastFour})}
                    value={this.state.lastFour} maxLength={4} clearTextOnFocus={true}
                />
                <Button
                    onPress={this._onPressContinueButton}
                    title="Continue"
                />
                <Button
                    onPress={this._onPressSkipButton}
                    title="Skip"
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