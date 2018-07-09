import React, { Component } from 'react';
import { DatePickerIOS, Button, StyleSheet, Text, View } from 'react-native';

export default class Birthday extends Component {
    constructor(props) {
        super(props);
        this.state = { birthday: new Date() };
    }

    setDate = newDate => {
        this.setState({birthday: newDate});
    }

    _onPressContinueButton = () => {
        console.log("Birthday Continue");
        if((new Date() - this.state.birthday) > 568025136000) { //18 years
            this.props.navigation.navigate('Name');
        } else {
            console.log("Error: Registrant is too young to vote.");
            this.props.navigation.navigate('Unable');
        }
        
    }
    
    render() {
        return(
            <View style={styles.container}>
                <Text>
                    When is your birthday?
                </Text>
                <DatePickerIOS date={this.state.birthday} onDateChange={this.setDate} mode='date'/>
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
    justifyContent: 'center',
  },
});