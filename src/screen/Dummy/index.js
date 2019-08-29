import React, { Component } from 'react';

import {
  TouchableOpacity, Text, View, TextInput
} from 'react-native';

class MyKeyboard extends Component {
  onPress = () => {
    insertText(this.props.tag, 'Hello, world');
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Emoticons />
      </View>
    );
  }
}

register('hello', () => MyKeyboard);

class MyPage extends Component {
  state = {
    value: ''
  };

  onChangeText = (text) => {
    this.setState({ value: text });
  };

  render() {
    return (
      <View>
        <CustomTextInput
          customKeyboardType="hello"
          value={this.state.value}
          onChangeText={this.onChangeText}
        />
        <TextInput
          placeholder="aaaaaaa"
          // customKeyboardType="hello"
          // value={this.state.value}
          // onChangeText={this.onChangeText}
        />
      </View>
    );
  }
}

export default MyPage;
