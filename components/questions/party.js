import React, { Component } from 'react';
import { Picker, Button, TextInput, StyleSheet, Text, View } from 'react-native';

export default class Party extends Component {
    constructor(props) {
        super(props);
        this.state = { party: 'no party' };
    }

    _onPressContinueButton = () => {
        console.log("Party Continue");
        console.log(this.state.party);
        this.props.navigation.navigate('Absentee');
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
                <TextInput
                    onChangeText={(party) => this.setState({party})}
                    value={this.state.party} clearTextOnFocus={true}
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