import React, { Component } from 'react';
import { TextInput, Button, StyleSheet, Text, View } from 'react-native';
import { postData } from '../postData';

export default class LastVoteYear extends Component {
    constructor(props) {
        super(props);
        this.state = { voteYear: '' };
    }

    _onPressContinueButton = () => {
        data = { "vh_year": this.state.voteYear };
        postData(data, () => {
            console.log("LastVote Continue");
            this.props.navigation.navigate('VCName');
        }); 
    };

    render() {
        return(
            <View style={styles.container}>
                <Text>
                    In what year did you last vote?
                </Text>
                <TextInput
                    onChangeText={(voteYear) => this.setState({voteYear})}
                    value={this.state.voteYear} maxLength={4} placeholder={'e.g. 2014'}
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