import React, { Component } from 'react';
import { DatePickerIOS, Button, StyleSheet, Text, View } from 'react-native';
import { postData } from '../postData';

export default class Birthday extends Component {
    constructor(props) {
        super(props);
        this.state = { birthday: new Date() };
    }

    setDate = newDate => {
        this.setState({birthday: newDate});
    }

    makeSingleNumberDouble = num => {
        if(num < 10) {
            return "0" + num.toString()
        } else {
            return num.toString()
        }
    }

    _onPressContinueButton = async () => {
        console.log("Birthday Continue");
        if((new Date() - this.state.birthday) > 568025136000) { //18 years

            let bday = this.state.birthday
            let monthString = this.makeSingleNumberDouble(bday.getMonth());
            let dateString = this.makeSingleNumberDouble(bday.getDate());
            let yearString = bday.getFullYear().toString();

            let data = {
                "older_than_18_yes": "X",
                "older_than_18_no" : "",
                "birth_month" : monthString,
                "birth_day" : dateString,
                "birth_year" : yearString
            };

            postData(data,() => {
                this.props.navigation.navigate('Name');
            });

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