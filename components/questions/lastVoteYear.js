import React, { Component } from 'react';
import { TextInput, Button, StyleSheet, Text, View } from 'react-native';
    
export default class LastVoteYear extends Component {
    constructor(props) {
        super(props);
        this.state = { voteYear: 'XXXX' };
    }

    _onPressContinueButton = () => {
        console.log("LastVote Continue");
        this.props.navigation.navigate('VCName');
    }

    render() {
        return(
            <View style={styles.container}>
                <Text>
                    In what year did you last vote?
                </Text>
                <TextInput
                    onChangeText={(voteYear) => this.setState({voteYear})}
                    value={this.state.voteYear} maxLength={4} clearTextOnFocus={true}
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