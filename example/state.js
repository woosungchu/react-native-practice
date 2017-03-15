/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

class Blink extends Component {
  constructor(props){
    super(props);
    this.state = {
      showText: true
    };

    //Toggle the state every second
    setInterval(()=>{
      this.setState({
        showText: !this.state.showText
      })
    }, 1000);
  }//end constructor

  render(){
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    )
  }


}

export default class GettingStarted extends Component {
  render() {
    return (
      <View>
        <Blink text='I love to blink' />
        <Blink text='Yes blinking is so great' />
        <Blink text='Why did they ever take this out of HTML' />
        <Blink text='Look at me look at me look at me' />
      </View>
    );
  }
}


AppRegistry.registerComponent('GettingStarted', () => GettingStarted);