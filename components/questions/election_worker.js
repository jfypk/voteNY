import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { postData } from '../postData';

export default class ElectionWorker extends Component {
    _onPressYesButton = () => {
        data = {
                    "election_worker_check": "X"
                };
        postData(data, () => {
            console.log("ElectionWorker YES");
            this.props.navigation.navigate('Complete');
        });
    }

    _onPressNoButton = () => {
        data = {
                    "election_worker_check": ""
                };
        postData(data, () => {
            console.log("ElectionWorker NO");
            this.props.navigation.navigate('Complete');
        });
        
        
    }
    render() {
        return(
            <View style={styles.container}>
                <Text>
                    Would you like to be an Election Day worker?
                </Text>
                <Button
                    onPress={this._onPressYesButton}
                    title="Yes"
                />
                <Button
                    onPress={this._onPressNoButton}
                    title="No"
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