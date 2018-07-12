import React, { Component } from 'react';
import { Button, TextInput, StyleSheet, Text, View } from 'react-native';

export default class Phone extends Component {
    constructor(props) {
        super(props);
        this.state = { areaCode: '',
                       firstThree: '',
                       lastFour: ''
                       };
    }

    _onPressContinueButton = () => {
        let data = {
            "tel_area_code" : this.state.areaCode,
            "tel_first3" : this.state.firstThree,
            "tel_last4": this.state.lastFour
        }
        fetch('http://localhost:5000/data', { //change URL
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(() => {
            console.log("Phone Continue");
            console.log(this.state.areaCode + ' ' + this.state.firstThree + ' ' + this.state.lastFour);
            this.props.navigation.navigate('Gender');
        })
        .catch((error) => {
            console.error(error);
        });
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
                    value={this.state.areaCode} maxLength={3} placeholder={'XXX'}
                />
                <TextInput
                    onChangeText={(firstThree) => this.setState({firstThree})}
                    value={this.state.firstThree} maxLength={3} placeholder={'XXX'}
                />
                <TextInput
                    onChangeText={(lastFour) => this.setState({lastFour})}
                    value={this.state.lastFour} maxLength={4} placeholder={'XXXX'}
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