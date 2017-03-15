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

// import React, { Component } from 'react';
// import { AppRegistry, Image } from 'react-native';
//
// export default class GettingStarted extends Component {
//  render() {
//    let pic = {
//      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//    };
//    return (
//      <Image source={pic} style={{width: 193, height: 110}}/>
//    );
//  }
// }
//
// AppRegistry.registerComponent('GettingStarted', () => GettingStarted);

class Greeting extends Component{
  render(){
    return (
      <Text>Hello {this.props.name}!</Text>
    )
  }
}

class LotsOfGreetings extends Component{
  render(){
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
      </View>
    )
  }
}

export default class GettingStarted extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Biztech Partners!
        </Text>
        <Text style={styles.instructions}>
          This page is index.android.js
        </Text>
        <Image source={pic} style={{width: 193, height: 110}} />
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        <LotsOfGreetings/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('GettingStarted', () => GettingStarted);
