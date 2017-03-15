import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class FixedDimensionBasics extends Component{
  render(){
    return (
      <View>
        <View style={{width:50, height:50, backgroundColor: 'powderblue'}}/>
        <View style={{width:100, height:100, backgroundColor: 'skyblue'}}/>
        <View style={{width:150, height:150, backgroundColor: 'steelblue'}}/>
      </View>
    );
  }
}

class FlexDimensionsBasics extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex:1, backgroundColor: 'powderblue'}}/>
        <View style={{flex:2, backgroundColor: 'skyblue'}}/>
        <View style={{flex:3, backgroundColor: 'steelblue'}}/>
      </View>
    )
  }
}

class FlexRowDimensionsBasics extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}/>
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}/>
      </View>
    )
  }
}

class JustifyContentBasics extends Component {
  render() {
    return (
      // Try setting `justifyContent` to `center`.
      // Try setting `flexDirection` to `row`.
      <View style={{
        flex: 1,
        flexDirection: 'row',//'column',
        justifyContent: 'center',//'space-between',
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};

class AlignItemsBasics extends Component {
  render() {
    return (
      // Try setting `alignItems` to 'flex-start'
      // Try setting `justifyContent` to `flex-end`.
      // Try setting `flexDirection` to `row`.
      <View style={{
        flex: 1,
        flexDirection: `column`,//'row',
        justifyContent: `flex-end`,//'center',
        alignItems: 'flex-start',//'center',
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};

export default class GettingStarted extends Component {
  render() {
    return (
      <AlignItemsBasics />
    );
  }
}


AppRegistry.registerComponent('GettingStarted', () => GettingStarted);
