import React, { Component } from 'react';
import { Picker, Button, TextInput, StyleSheet, Text, View } from 'react-native';
import { postData } from '../postData';

export default class Party extends Component {
    constructor(props) {
        super(props);
        this.state = { party: 'no party' };
    }

    //need other text input

    _onPressContinueButton = () => {
        let data = {};
        switch(this.state.party) {
            case "democratic":
                data = {
                    "democratic_check": "X",
                    "republican_check": "",
                    "conservative_check": "",
                    "green_party_check": "",
                    "working_family_check": "",
                    "independence_check": "",
                    "women_equality_check": "",
                    "reform_check": "",
                    "other_party_check": "",
                    "no_party_check": "",
                    "other_party": ""
                };
                break;
            case "republican":
                data = {
                    "democratic_check": "",
                    "republican_check": "X",
                    "conservative_check": "",
                    "green_party_check": "",
                    "working_family_check": "",
                    "independence_check": "",
                    "women_equality_check": "",
                    "reform_check": "",
                    "other_party_check": "",
                    "no_party_check": "",
                    "other_party": ""
                };
                break;
            case "conservative":
                data = {
                    "democratic_check": "",
                    "republican_check": "",
                    "conservative_check": "X",
                    "green_party_check": "",
                    "working_family_check": "",
                    "independence_check": "",
                    "women_equality_check": "",
                    "reform_check": "",
                    "other_party_check": "",
                    "no_party_check": "",
                    "other_party": ""
                };
                break;
            case "green":
                data = {
                    "democratic_check": "",
                    "republican_check": "",
                    "conservative_check": "",
                    "green_party_check": "X",
                    "working_family_check": "",
                    "independence_check": "",
                    "women_equality_check": "",
                    "reform_check": "",
                    "other_party_check": "",
                    "no_party_check": "",
                    "other_party": ""
                };
                break;
            case "working-families":
                data = {
                    "democratic_check": "",
                    "republican_check": "",
                    "conservative_check": "",
                    "green_party_check": "",
                    "working_family_check": "X",
                    "independence_check": "",
                    "women_equality_check": "",
                    "reform_check": "",
                    "other_party_check": "",
                    "no_party_check": "",
                    "other_party": ""
                };
                break;
            case "independence":
                data = {
                    "democratic_check": "",
                    "republican_check": "",
                    "conservative_check": "",
                    "green_party_check": "",
                    "working_family_check": "",
                    "independence_check": "X",
                    "women_equality_check": "",
                    "reform_check": "",
                    "other_party_check": "",
                    "no_party_check": "",
                    "other_party": ""
                };
                break;
            case "women-equality":
                data = {
                    "democratic_check": "",
                    "republican_check": "",
                    "conservative_check": "",
                    "green_party_check": "",
                    "working_family_check": "",
                    "independence_check": "",
                    "women_equality_check": "X",
                    "reform_check": "",
                    "other_party_check": "",
                    "no_party_check": "",
                    "other_party": ""
                };
                break;
            case "reform":
                data = {
                    "democratic_check": "",
                    "republican_check": "",
                    "conservative_check": "",
                    "green_party_check": "",
                    "working_family_check": "",
                    "independence_check": "",
                    "women_equality_check": "",
                    "reform_check": "X",
                    "other_party_check": "",
                    "no_party_check": "",
                    "other_party": ""
                };
                break;
            case "other": 
                data = {
                    "democratic_check": "",
                    "republican_check": "",
                    "conservative_check": "",
                    "green_party_check": "",
                    "working_family_check": "",
                    "independence_check": "",
                    "women_equality_check": "",
                    "reform_check": "",
                    "other_party_check": "X",
                    "no_party_check": "",
                    "other_party": ""
                };
                break;
            default:
                data = {
                    "democratic_check": "",
                    "republican_check": "",
                    "conservative_check": "",
                    "green_party_check": "",
                    "working_family_check": "",
                    "independence_check": "",
                    "women_equality_check": "",
                    "reform_check": "",
                    "other_party_check": "",
                    "no_party_check": "X",
                    "other_party": ""
                };
        };
        postData(data, () => {
            console.log("Party Continue");
            this.props.navigation.navigate('Absentee');
        }); 
    }
    
    //only render TextInput if other is chosen...
    render() {
        return(
            <View style={styles.container}>
                <Text>
                    What political party do you wish to enroll in?
                </Text>
                <Text>
                    Political party enrollment is optional but that, in order to vote in a primary election of a political party, a voter must enroll in that political party, unless state party rules allow otherwise. 
                </Text>
                <Picker
                    selectedValue={this.state.party}
                    style={{ height: 50, width: 100 }}
                    onValueChange={(itemValue, itemIndex) => this.setState({party: itemValue})}>
                    <Picker.Item label="Democratic Party" value="democratic" />
                    <Picker.Item label="Republican Party" value="republican" />
                    <Picker.Item label="Conservative Party" value="conservative" />
                    <Picker.Item label="Green Party" value="green" />
                    <Picker.Item label="Working Families Party" value="working-families" />
                    <Picker.Item label="Independence Party" value="independence" />
                    <Picker.Item label="Women's Equality Party" value="women-equality" />
                    <Picker.Item label="Reform Party" value="reform" />
                    <Picker.Item label="Other Party" value="other" />
                    <Picker.Item label="No Party Affiliation" value="no party" />
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