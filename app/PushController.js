import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import FCM, {FCMEvent, RemoteNotificationResult, WillPresentNotificationResult, NotificationType} from 'react-native-fcm';

export default class PushController extends Component {
  constructor(props){
    super(props);
    this.state = {
      token: ''
    };

    FCM.getFCMToken().then(token => {
      this.setState({
        token: token
      })
    });

  }//end constructor

  render() {
    let display = this.state.token || 'Empty token';
    return (
      <Text>
        {display}
      </Text>
    )
  }
}
