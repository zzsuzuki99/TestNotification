/* eslint-disable react/no-multi-comp */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text, TouchableOpacity, ScrollView, StyleSheet, View
} from 'react-native';
import { KeyboardRegistry } from 'react-native-keyboard-input';
import RecordingAudio from 'hop-components/RecordingAudio';
import Emoticons from 'hop-components/Emoticons';

const styles = StyleSheet.create({
  keyboardContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

class KeyboardView extends Component {
  onButtonPress() {
    KeyboardRegistry.onItemSelected('KeyboardView', {
      message: 'item selected from KeyboardView'
    });
  }

  render() {
    const { onEmojiPress } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <Emoticons onPress={onEmojiPress} />
      </View>
    );
  }
}

class AnotherKeyboardView extends Component {
  static propTypes = {
    title: PropTypes.string
  };

  onButtonPress() {
    KeyboardRegistry.toggleExpandedKeyboard('AnotherKeyboardView');
  }

  render() {
    const { title } = this.props;
    return (
      <ScrollView contentContainerStyle={[styles.keyboardContainer, { backgroundColor: 'orange' }]}>
        <Text>*** ANOTHER ONE ***</Text>
        <Text>{title}</Text>
        <TouchableOpacity
          testID="toggle-fs"
          style={{ padding: 20, marginTop: 30, backgroundColor: 'white' }}
          onPress={() => this.onButtonPress()}
        >
          <Text>Toggle Full-Screen!</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

KeyboardRegistry.registerKeyboard('KeyboardView', () => KeyboardView);
KeyboardRegistry.registerKeyboard('RecordingAudioView', () => RecordingAudio);
KeyboardRegistry.registerKeyboard('AnotherKeyboardView', () => AnotherKeyboardView);
