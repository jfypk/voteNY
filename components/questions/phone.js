import React, { Component } from 'react';
import { Alert, Button, TextInput, StyleSheet, Text, View } from 'react-native';
import { postData } from '../postData';

export default class Phone extends Component {
    constructor(props) {
        super(props);
        this.state = { areaCode: '',
                       firstThree: '',
                       lastFour: ''
                       };
    }

    _onPressContinueButton = () => {
        if(this.state.areaCode > 0 && this.state.firstThree > 0 && this.state.lastFour > 0) {
            let data = {
                "tel_area_code" : this.state.areaCode,
                "tel_first3" : this.state.firstThree,
                "tel_last4": this.state.lastFour
            };
            postData(data, () => {
                console.log("Phone Continue");
                console.log(this.state.areaCode + ' ' + this.state.firstThree + ' ' + this.state.lastFour);
                this.props.navigation.navigate('Gender');
            });
        } else  {
            Alert.alert(
                    'Invalid phone number',
                    'Input a valid phone number',
                    [
                        {text: 'Ok', onPress: () => console.log('Invalid phone number')},
                        {text: 'Skip', onPress: () => {
                            console.log('Phone Try & Skip');
                            this.props.navigation.navigate('Gender');
                        }}
                    ],
                    { cancelable: true }
                )
        }
        
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
                    value={this.state.areaCode} maxLength={3} placeholder={'123'}
                />
                <TextInput
                    onChangeText={(firstThree) => this.setState({firstThree})}
                    value={this.state.firstThree} maxLength={3} placeholder={'456'}
                />
                <TextInput
                    onChangeText={(lastFour) => this.setState({lastFour})}
                    value={this.state.lastFour} maxLength={4} placeholder={'7890'}
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