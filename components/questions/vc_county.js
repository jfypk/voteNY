import React, { Component } from 'react';
import { Picker, Button, TextInput, StyleSheet, Text, View } from 'react-native';

export default class VCCounty extends Component {
    constructor(props) {
        super(props);
        this.state = { county: 'County' };
    }

    _onPressContinueButton = () => {
        console.log("VCCounty Continue");
        console.log(this.state.county);
        this.props.navigation.navigate('Id_Type');
    }

    _onPressNoChangeButton = () => {
        console.log("VCCounty Continue");
        console.log(this.state.firstName + ' ' + this.state.middleInitial + ' ' + this.state.lastName + ' ' + this.state.suffix);
        this.props.navigation.navigate('Id_Type');
    }
    
    render() {
        return(
            <View style={styles.container}>
                <Text>
                    If you moved since you last voted, what county did you previously live in?
                </Text>
                <TextInput
                    onChangeText={(county) => this.setState({county})}
                    value={this.state.county} clearTextOnFocus={true}
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