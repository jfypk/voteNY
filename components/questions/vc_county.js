import React, { Component } from 'react';
import { Picker, Button, TextInput, StyleSheet, Text, View } from 'react-native';
import { postData } from '../postData';

export default class VCCounty extends Component {
    constructor(props) {
        super(props);
        this.state = { county: '' };
    }

    _onPressContinueButton = () => {
        data = {
                    "vh_county": this.state.county
                };
        postData(data, () => {
            console.log("VCCounty Continue");
            this.props.navigation.navigate('Id_Type');
        });
    }

    _onPressNoChangeButton = () => {
        data = {
                    "vh_county": ''
                };
        postData(data, () => {
            console.log("VCCounty NoChange");
            this.props.navigation.navigate('Id_Type');
        });
    }
    
    render() {
        return(
            <View style={styles.container}>
                <Text>
                    If you moved since you last voted, what county did you previously live in?
                </Text>
                <TextInput
                    onChangeText={(county) => this.setState({county})}
                    value={this.state.county} placeholder={'County'}
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