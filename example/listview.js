import React, { Component } from 'react';
import {
  AppRegistry,
  ListView,
  View,
  Text
} from 'react-native';

class ListViewBasics extends Component {
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1,r2) => r1!==r2
    });
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    };
  }//end constructor

  render(){
    return (
      <View Style={{flex:1, paddingTop:22}}>
      <ListView
      dataSource={this.state.dataSource}
      renderRow={(rowData) => <Text>{rowData}</Text>}
      />
      </View>
    )
  }
}

export default class GettingStarted extends Component {
  render() {
    return (
      <ListViewBasics />
    );
  }
}


AppRegistry.registerComponent('GettingStarted', () => GettingStarted);
