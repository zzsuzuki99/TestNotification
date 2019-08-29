import React from "react";

// Libs
import { YellowBox, Text, AsyncStorage, Platform, View } from "react-native";
import firebase from "react-native-firebase";
// Components
import { getAddressByLocation } from "./utils/location";

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
    if (__DEV__) {
      YellowBox.ignoreWarnings([
        "Warning: isMounted(...) is deprecated",
        "Module RCTImageLoader",
        "Require cycle:"
      ]);
    }
    if (Text.defaultProps == null) Text.defaultProps = {};
    Text.defaultProps.allowFontScaling = false;
  }

  async componentDidMount() {
    this.checkPermission();

    this.notificationListener = firebase
      .notifications()
      .onNotification(async notification => {
        const response = await getAddressByLocation();
        console.log(
          "Notification",
          notification,
          response
        );
        const { data } = response;
        const localNotification = new firebase.notifications.Notification()
          .setNotificationId(notification.notificationId)
          .setTitle("Địa chỉ của bạn")
          .setBody(data.results[0].formatted_address);

        if (
          Platform.OS === "android" &&
          localNotification.android.channelId == null
        ) {
          const channel = new firebase.notifications.Android.Channel(
            "aa-channel",
            "aaChannel",
            firebase.notifications.Android.Importance.Max
          ).setDescription("Instock channel");

          // Create the channel
          await firebase.notifications().android.createChannel(channel);
          localNotification.android.setChannelId(channel.channelId);
        }
        console.log("aaaaaaaaa");
        await firebase.notifications().displayNotification(localNotification);
      });
  }

  // 1
  async checkPermission() {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
      this.getToken();
    } else {
      this.requestPermission();
    }
  }

  // 3
  async getToken() {
    let fcmToken = await AsyncStorage.getItem("fcmToken");
    console.log("11111", fcmToken);
    if (!fcmToken) {
      fcmToken = await firebase.messaging().getToken();
      if (fcmToken) {
        // user has a device token
        await AsyncStorage.setItem("fcmToken", fcmToken);
      }
    }
  }

  // 2
  async requestPermission() {
    try {
      await firebase.messaging().requestPermission();
      // User has authorised
      this.getToken();
    } catch (error) {
      // User has rejected permissions
      console.log("permission rejected");
    }
  }

  render() {
    return <View />;
  }
}
