/** @format */

import { AppRegistry, Platform } from 'react-native';
import firebase from 'react-native-firebase';
import App from './src/index';
import { name as appName } from './app.json';

function getCurrentPosition(options = {}) {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}

const handleBackgroundMessage = async (message) => {
  console.log('aaaaaass', message);
  const { coords } = await getCurrentPosition();
  const { latitude, longitude } = coords;
  const localNotification = new firebase.notifications.Notification()
    .setNotificationId(message.messageId)
    .setTitle(latitude)
    .setBody(longitude);

  if (Platform.OS === 'android' && localNotification.android.channelId == null) {
    const channel = new firebase.notifications.Android.Channel(
      'aa-channel',
      'aaChannel',
      firebase.notifications.Android.Importance.Max
    ).setDescription('Instock channel');

    // Create the channel
    await firebase.notifications().android.createChannel(channel);
    localNotification.android.setChannelId(channel.channelId);
  }
  console.log('111111');
  await firebase.notifications().displayNotification(localNotification);

  return Promise.resolve();
};

AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerHeadlessTask('RNFirebaseBackgroundMessage', () => handleBackgroundMessage); // <-- Add this line
